import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMetrics } from "../contexts/MetricsContext.jsx";

const SettingsModal = ({ onClose }) => {
  const [visible, setVisible] = useState(false);
  

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 200);
  };

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  console.log(metrics);

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
          <h1 className="text-2xl">{t("settings")}</h1>
          <X
            size={24}
            className="cursor-pointer hover:opacity-70 transition"
            onClick={handleClose}
          />
        </div>
        <>
          

          
        </>
      </div>
    </div>
  );
};

export default SettingsModal;
