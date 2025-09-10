import { useState, useRef, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "../../contexts/LocationContext";
import { searchLocations } from "../../utils/api";
import { CircleLoader } from "react-spinners";

const SearchTab = ({ onClose }) => {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const ref = useRef(null);
  const { locationData, setLocationData } = useLocation();

  async function handleInputChange(e) {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      try {
        const data = await searchLocations(value);
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

  const resultResponse = useMemo(() => {
    if (query.length > 2 && results.length === 0) {
      return (
        <div className="flex justify-center h-10 overflow-scroll bg-black/90 border items-center border-gray-600 rounded-xl shadow-xl">
          <p>No locations found.</p>
        </div>
      );
    }

    if (query.length > 2 && results.length > 0) {
      return (
        <div className="max-h-60 overflow-scroll bg-black/90 border border-gray-600 rounded-xl shadow-xl">
          {results.map((item, index) => (
            <div
              key={index}
              className="flex flex-row gap-2 items-center px-3 py-2 hover:bg-white/10 cursor-pointer"
              onClick={() => {
                setLocationData({
                  location: item.name,
                  latitude: item.latitude,
                  longitude: item.longitude,
                  timezoneString: item.timezone,
                  admin1: item.admin1,
                });
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
      );
    }

    if (query.length > 0) {
      return (
        <div className="flex justify-center h-10 overflow-scroll bg-black/90 border items-center border-gray-600 rounded-xl shadow-xl">
          <CircleLoader color="#CACED1" size={18} />
        </div>
      );
    }
  }, [query, results]);

  return (
    <div
      className="absolute left-12 top-0 md:w-96 w-[20rem] duration-500"
      ref={ref}
    >
      <div className=" bg-black/90 border border-gray-600 rounded-xl shadow-xl p-1 flex flex-col gap-4">
        <input
          value={query}
          onChange={handleInputChange}
          className="bg-black/70 border-2 h-8 px-2 text-lg text-white/90 border-white/70 rounded-md"
          placeholder={t("location")}
          autoFocus
          autoCapitalize="words"
        />
      </div>
      {resultResponse}
    </div>
  );
};

export default SearchTab;
