import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "../../contexts/LocationContext";
import { latitude, longitude } from "../../utils/api";

const SearchTab = ({ onClose }) => {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const ref = useRef(null);
  const { locationData, setLocationData } = useLocation();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleInputChange(e) {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      try {
        const res = await fetch(
          `http://localhost:3000/locations?string=${query}&lang=en`
        );
        const data = await res.json();
        const locations = data.map((loc) => ({
          ...loc,
          flag: `/country-flags/${loc.country_code.toLowerCase()}.svg`,
        }));
        setResults(locations);
      } catch (err) {
        console.error("Failed to fetch location:", err);
        setResults([]);
      }
    } else {
      setResults([]);
    }
  }

  return (
    <div className="absolute left-12 top-0 w-80" ref={ref}>
      <div className=" bg-black/90 border border-gray-600 rounded-xl shadow-xl p-1 flex flex-col gap-4">
        <input
          value={query}
          onChange={handleInputChange}
          className="bg-white/10 border-2 h-8 px-2 text-lg text-white/90 border-white/70 rounded-md"
          placeholder={t("location")}
          autoFocus
          autoCapitalize="words"
        />
      </div>
      {results.length > 0 && (
        <div className="h-60 overflow-scroll bg-black/90 border border-gray-600 rounded-xl shadow-xl">
          {results.map((item, index) => (
            <div
              key={index}
              className="flex flex-row gap-2 items-center px-3 py-2 hover:bg-black/50 cursor-pointer"
              onClick={() => {
                setLocationData({
                  location: item.name,
                  latitude: item.latitude,
                  longitude: item.longitude
                })
                setQuery("");
                setResults([]);
                onClose();
              }}
            >
              <img className="h-4" src={item.flag} alt={item.country_code} />
              <p>
                {item.name}, {item.admin1}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchTab;
