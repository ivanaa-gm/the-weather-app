import { X, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { locationsData } from "../utils/api";

const SettingsModal = ({ onClose }) => {
  const [visible, setVisible] = useState(false);
  
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 200);
  };

  

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-[#212121f8] text-[#c5c5c5] m-4 p-4 pb-8 rounded-lg shadow-xl gap-2 flex flex-col justify-center border-2 border-[#c5c5c5] transform transition-all duration-200 ${
          visible ? "scale-100 translate-y-0" : "scale-95 translate-y-2"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-row justify-between border-b p-2">
          <h1 className="text-2xl">{t("search")}</h1>
          <X
            size={24}
            className="cursor-pointer hover:opacity-70 transition"
            onClick={handleClose}
          />
        </div>

        <div className="flex flex-col gap-2 mt-4 relative">
          <div className="flex flex-row gap-2 items-center">
            <input
              value={query}
              onChange={handleInputChange}
              className="bg-white/10 border-2 w-96 h-10 text-lg p-2 border-white rounded-sm"
              placeholder={t("location")}
            />
            <Search size={26} className="hover:scale-105 cursor-pointer" />
          </div>

          {results.length > 0 && (
            <div className="absolute top-12 left-0 w-96 bg-[#2a2a2a] border border-gray-500 rounded-md shadow-lg z-50">
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
                  <p>{item.name}, {item.admin1}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
