import { MapPin, Search, Settings, Info, Clock, Mountain } from "lucide-react";
import { useState } from "react";
import SearchModal from "../components/SearchModal";
import SettingsModal from "../components/SettingsModal";
import InfoModal from "../components/InfoModal";
import { locationsData } from "../utils/api";
import { useTranslation } from "react-i18next";
import { useMetrics } from "../contexts/MetricsContext";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { metrics, setMetrics } = useMetrics();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [areSettingsOpen, setAreSettingsOpen] = useState(false);
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);

  const handleSearchOpen = (isOpen) => {
    setIsSearchOpen(isOpen);
    setAreSettingsOpen(false);
    if (isOpen === false) setQuery("");
  };

  const handleSettingsOpen = (isOpen) => {
    setAreSettingsOpen(isOpen);
    setIsSearchOpen(false)
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      const updatedLocations = locationsData.map((loc) => ({
        ...loc,
        flag: `/country-flags/${loc.country_code.toLowerCase()}.svg`,
      }));
      console.log(updatedLocations);
      setResults(updatedLocations);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="absolute left-0 top-0 z-100">
      <div className="p-2 text-white flex flex-col gap-2">
        <div
          className={`flex items-center justify-center h-10 rounded-full shadow-2xl transition duration-1000 ease-in-out ${
            isSearchOpen
              ? " bg-black/70 pl-2 py-2"
              : "bg-black/30 hover:scale-105 filter hover:brightness-105"
          }`}
        >
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center transition ease-linear">
              {isSearchOpen && (
                <input
                  value={query}
                  onChange={handleInputChange}
                  className="bg-white/10 border-2 w-80 h-8 text-lg text-white/90 border-white/70 rounded-md"
                  placeholder={t("location")}
                />
              )}
              <div className="flex items-center justify-center w-10 h-1 rounded-full cursor-pointer transition hover:scale-105 filter hover:brightness-105">
                <Search
                  onClick={() => handleSearchOpen(!isSearchOpen)}
                  size={24}
                />
              </div>
            </div>

            {results.length > 0 && (
              <div className="absolute top-12 left-4 w-80 h-60 overflow-scroll bg-[#2a2a2a] border border-gray-500 rounded-md shadow-lg z-50">
                {results.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-2 items-center px-3 py-2 hover:bg-gray-600 cursor-pointer"
                    onClick={() => {
                      setQuery(item.name + ", " + item.admin1);
                      setResults([]);
                    }}
                  >
                    <img
                      className="h-4"
                      src={item.flag}
                      alt={item.country_code}
                    />
                    <p>
                      {item.name}, {item.admin1}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div
          className={`flex items-center justify-center h-10 rounded-full shadow-2xl cursor-pointer transition hover:scale-105 filter hover:brightness-105 
        ${
          areSettingsOpen
            ? " bg-black/70"
            : "bg-black/30 hover:scale-105 filter hover:brightness-105"
        }`}
        >
          <div className="flex  flex-row">
            <div className="relative flex flex-row w-10 h-10 rounded-full cursor-pointer transition hover:scale-105 filter hover:brightness-105">
              <Settings
                onClick={() => handleSettingsOpen(!areSettingsOpen)}
                size={24}
              />
            </div>
            {areSettingsOpen && (
              <div className="flex flex-col items-start m-4 w-80">
                <div className="flex flex-col w-fit items-center gap-2">
                  <p>{t("temperature")}</p>
                  <div className="border rounded-lg flex flex-row ">
                    <button
                      className={`p-2 px-6 transition rounded-lg   ${
                        metrics.temperature === "C"
                          ? "bg-[#c5c5c5] text-[#212121f8]"
                          : "hover:bg-white/5"
                      }`}
                      onClick={() =>
                        setMetrics({ ...metrics, temperature: "C" })
                      }
                    >
                      °C
                    </button>
                    <button
                      className={`p-2 px-6 transition rounded-lg ${
                        metrics.temperature === "F"
                          ? "bg-[#c5c5c5] text-[#212121f8]"
                          : "hover:bg-white/5"
                      }`}
                      onClick={() =>
                        setMetrics({ ...metrics, temperature: "F" })
                      }
                    >
                      °F
                    </button>
                  </div>
                </div>
                <div className="flex flex-col w-fit items-center gap-2">
                  <p>{t("precipitation")}</p>
                  <div className="border rounded-lg flex flex-row ">
                    <button
                      className={`p-2 px-6 transition rounded-lg ${
                        metrics.precipitation === "mm"
                          ? "bg-[#c5c5c5] text-[#212121f8]"
                          : "hover:bg-white/5"
                      }`}
                      onClick={() =>
                        setMetrics({ ...metrics, precipitation: "mm" })
                      }
                    >
                      {t("mm")}
                    </button>
                    <button
                      className={`p-2 px-6 transition rounded-lg ${
                        metrics.precipitation === "inch"
                          ? "bg-[#c5c5c5] text-[#212121f8]"
                          : "hover:bg-white/5"
                      }`}
                      onClick={() =>
                        setMetrics({ ...metrics, precipitation: "inch" })
                      }
                    >
                      {t("inch")}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p>{t("language")}</p>
                  <div className="border rounded-lg flex flex-row">
                    <button
                      className={`p-2 px-6 transition rounded-lg ${
                        i18n.language === "en"
                          ? "bg-[#c5c5c5]"
                          : "hover:bg-white/5"
                      }`}
                      onClick={() => handleLanguageChange("en")}
                    >
                      <img
                        src="/country-flags/gb.svg"
                        alt="UK flag"
                        className="h-6"
                      />
                    </button>
                    <button
                      className={`p-2 px-6 transition rounded-lg ${
                        i18n.language === "bg"
                          ? "bg-[#c5c5c5]"
                          : "hover:bg-white/5"
                      }`}
                      onClick={() => handleLanguageChange("bg")}
                    >
                      <img
                        src="/country-flags/bg.svg"
                        alt="BG flag"
                        className="h-6"
                      />
                    </button>
                    <button
                      className={`p-2 px-6 transition rounded-lg ${
                        i18n.language === "es"
                          ? "bg-[#c5c5c5]"
                          : "hover:bg-white/5"
                      }`}
                      onClick={() => handleLanguageChange("es")}
                    >
                      <img
                        src="/country-flags/es.svg"
                        alt="ES flag"
                        className="h-6"
                      />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p>{t("windSpeed")}</p>
                  <div className="border rounded-lg flex flex-row ">
                    <button
                      className={`p-2 px-6 transition rounded-lg ${
                        metrics.windSpeed === "kmh"
                          ? "bg-[#c5c5c5] text-[#212121f8]"
                          : "hover:bg-white/5"
                      }`}
                      onClick={() =>
                        setMetrics({ ...metrics, windSpeed: "kmh" })
                      }
                    >
                      {t("kmh")}
                    </button>
                    <button
                      className={`p-2 px-6 transition rounded-lg ${
                        metrics.windSpeed === "ms"
                          ? "bg-[#c5c5c5] text-[#212121f8]"
                          : "hover:bg-white/5"
                      }`}
                      onClick={() =>
                        setMetrics({ ...metrics, windSpeed: "ms" })
                      }
                    >
                      {t("ms")}
                    </button>
                    <button
                      className={`p-2 px-6 transition rounded-lg ${
                        metrics.windSpeed === "knots"
                          ? "bg-[#c5c5c5] text-[#212121f8]"
                          : "hover:bg-white/5"
                      }`}
                      onClick={() =>
                        setMetrics({ ...metrics, windSpeed: "knots" })
                      }
                    >
                      {t("knots")}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className="flex items-center justify-center w-10 h-10 bg-black/30 rounded-full shadow-2xl cursor-pointer transition hover:scale-105 filter hover:brightness-105"
          onClick={() => setInfoModalOpen(true)}
        >
          <Info size={24} />
        </div>
      </div>

      {/* {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />} */}
      {/* {areSettingsOpen && (
        <SettingsModal onClose={() => setAreSettingsOpen(false)} />
      )} */}
      {isInfoModalOpen && <InfoModal onClose={() => setInfoModalOpen(false)} />}
    </div>
  );
};

export default Header;
