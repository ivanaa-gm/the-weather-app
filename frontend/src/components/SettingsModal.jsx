import { changeLanguage } from "i18next";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CircleLoader } from "react-spinners";
import { useMetrics } from "../contexts/MetricsContext.jsx";

const SettingsModal = ({ onClose }) => {
  const [visible, setVisible] = useState(false);
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const { metrics, setMetrics } = useMetrics();

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 200);
  };

  const handleLanguageChange = (lng) => {
    setIsLoading(true);
    setTimeout(() => {
      i18n.changeLanguage(lng);
      localStorage.setItem("lng", lng);
      setIsLoading(false);
    }, 500);
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
        className={`bg-[#D5D5D5]/85 w-[44%] h-[60%] m-4 p-4 pb-8 rounded-lg shadow-xl gap-2 flex flex-col justify-center border-2 transform transition-all duration-200 ${
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
        {isLoading ? (
          <div className="flex h-full items-center justify-center">
            <CircleLoader color="#2cceff" size={70} />
          </div>
        ) : (
          <div className="text-xl h-full items-center flex flex-row justify-between mx-6 mt-4">
            <div className="flex flex-col gap-14">
              <div className="flex flex-col w-fit items-center gap-2">
                <p>{t("temperature")}</p>
                <div className="border rounded-lg flex flex-row ">
                  <button
                    className={`p-2 px-6 transition rounded-lg   ${
                      metrics.temperature === "C"
                        ? "bg-white"
                        : "hover:bg-black/10"
                    }`}
                    onClick={() => setMetrics({ ...metrics, temperature: "C" })}
                  >
                    °C
                  </button>
                  <button
                    className={`p-2 px-6 transition rounded-lg ${
                      metrics.temperature === "F"
                        ? "bg-white"
                        : "hover:bg-black/10"
                    }`}
                    onClick={() => setMetrics({ ...metrics, temperature: "F" })}
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
                        ? "bg-white"
                        : "hover:bg-black/10"
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
                        ? "bg-white"
                        : "hover:bg-black/10 "
                    }`}
                    onClick={() =>
                      setMetrics({ ...metrics, precipitation: "inch" })
                    }
                  >
                    {t("inch")}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-14">
              <div className="flex flex-col items-center gap-2">
                <p>{t("language")}</p>
                <div className="border rounded-lg flex flex-row">
                  <button
                    className={`p-2 px-6 transition rounded-lg ${
                      i18n.language === "en" ? "bg-white" : "hover:bg-black/10"
                    }`}
                    onClick={() => handleLanguageChange("en")}
                  >
                    <img src="/flags/gb.svg" alt="UK flag" className="h-6" />
                  </button>
                  <button
                    className={`p-2 px-6 transition rounded-lg ${
                      i18n.language === "bg" ? "bg-white" : "hover:bg-black/10"
                    }`}
                    onClick={() => handleLanguageChange("bg")}
                  >
                    <img src="/flags/bg.svg" alt="BG flag" className="h-6" />
                  </button>
                  <button
                    className={`p-2 px-6 transition rounded-lg ${
                      i18n.language === "es" ? "bg-white" : "hover:bg-black/10"
                    }`}
                    onClick={() => handleLanguageChange("es")}
                  >
                    <img src="/flags/es.svg" alt="ES flag" className="h-6" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <p>{t("windSpeed")}</p>
                <div className="border rounded-lg flex flex-row ">
                  <button
                    className={`p-2 px-6 transition rounded-lg ${
                      metrics.windSpeed === "kmh"
                        ? "bg-white"
                        : "hover:bg-black/10"
                    }`}
                    onClick={() => setMetrics({ ...metrics, windSpeed: "kmh" })}
                  >
                    {t("kmh")}
                  </button>
                  <button
                    className={`p-2 px-6 transition rounded-lg ${
                      metrics.windSpeed === "ms"
                        ? "bg-white"
                        : "hover:bg-black/10"
                    }`}
                    onClick={() => setMetrics({ ...metrics, windSpeed: "ms" })}
                  >
                    {t("ms")}
                  </button>
                  <button
                    className={`p-2 px-6 transition rounded-lg ${
                      metrics.windSpeed === "knots"
                        ? "bg-white"
                        : "hover:bg-black/10"
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
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsModal;
