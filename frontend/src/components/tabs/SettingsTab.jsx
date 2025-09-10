import { useRef } from "react";
import { useMetrics } from "../../contexts/MetricsContext";
import { useTranslation } from "react-i18next";

const SettingsTab = ({ onClose }) => {
  const { metrics, setMetrics } = useMetrics();
  const { t, i18n } = useTranslation();
  const ref = useRef();

  return (
    <div
      className="absolute left-12 top-0 bg-black/90 border border-gray-600 rounded-xl shadow-xl p-4 md:w-96 w-[20rem] flex flex-col gap-4"
      ref={ref}
    >
      <div className="flex flex-col items-center gap-2">
        <p>{t("temperature")}</p>
        <div className="border rounded-lg flex flex-row">
          <button
            className={`p-2 px-6 transition rounded-lg ${
              metrics.temperature === "C"
                ? "bg-[#c5c5c5] text-[#212121f8]"
                : "hover:bg-white/5"
            }`}
            onClick={() => setMetrics({ ...metrics, temperature: "C" })}
          >
            °C
          </button>
          <button
            className={`p-2 px-6 transition rounded-lg ${
              metrics.temperature === "F"
                ? "bg-[#c5c5c5] text-[#212121f8]"
                : "hover:bg-white/5"
            }`}
            onClick={() => setMetrics({ ...metrics, temperature: "F" })}
          >
            °F
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p>{t("precipitation")}</p>
        <div className="border rounded-lg flex flex-row">
          <button
            className={`p-2 px-6 transition rounded-lg ${
              metrics.precipitation === "mm"
                ? "bg-[#c5c5c5] text-[#212121f8]"
                : "hover:bg-white/5"
            }`}
            onClick={() => setMetrics({ ...metrics, precipitation: "mm" })}
          >
            {t("mm")}
          </button>
          <button
            className={`p-2 px-6 transition rounded-lg ${
              metrics.precipitation === "inch"
                ? "bg-[#c5c5c5] text-[#212121f8]"
                : "hover:bg-white/5"
            }`}
            onClick={() => setMetrics({ ...metrics, precipitation: "inch" })}
          >
            {t("inch")}
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p>{t("windSpeed")}</p>
        <div className="border rounded-lg md:flex md:flex-row grid grid-cols-2 gap-2">
          <button
            className={`p-2 px-6 transition rounded-lg ${
              metrics.windSpeed === "kmh"
                ? "bg-[#c5c5c5] text-[#212121f8]"
                : "hover:bg-white/5"
            }`}
            onClick={() => setMetrics({ ...metrics, windSpeed: "kmh" })}
          >
            {t("kmh")}
          </button>
          <button
            className={`p-2 px-6 transition rounded-lg ${
              metrics.windSpeed === "ms"
                ? "bg-[#c5c5c5] text-[#212121f8]"
                : "hover:bg-white/5"
            }`}
            onClick={() => setMetrics({ ...metrics, windSpeed: "ms" })}
          >
            {t("ms")}
          </button>
          <button
            className={`p-2 px-6 transition rounded-lg ${
              metrics.windSpeed === "mph"
                ? "bg-[#c5c5c5] text-[#212121f8]"
                : "hover:bg-white/5"
            }`}
            onClick={() => setMetrics({ ...metrics, windSpeed: "mph" })}
          >
            {t("mph")}
          </button>
          <button
            className={`p-2 px-6 transition rounded-lg ${
              metrics.windSpeed === "kn"
                ? "bg-[#c5c5c5] text-[#212121f8]"
                : "hover:bg-white/5"
            }`}
            onClick={() => setMetrics({ ...metrics, windSpeed: "kn" })}
          >
            {t("kn")}
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p>{t("language")}</p>
        <div className="border rounded-lg flex flex-row">
          <button
            className={`p-2 px-6 transition rounded-lg ${
              i18n.language === "en" ? "bg-[#c5c5c5]" : "hover:bg-white/5"
            }`}
            onClick={() => i18n.changeLanguage("en")}
          >
            <img src="/country-flags/gb.svg" alt="UK flag" className="h-6" />
          </button>
          <button
            className={`p-2 px-6 transition rounded-lg ${
              i18n.language === "bg" ? "bg-[#c5c5c5]" : "hover:bg-white/5"
            }`}
            onClick={() => i18n.changeLanguage("bg")}
          >
            <img src="/country-flags/bg.svg" alt="BG flag" className="h-6" />
          </button>
          <button
            className={`p-2 px-6 transition rounded-lg ${
              i18n.language === "es" ? "bg-[#c5c5c5]" : "hover:bg-white/5"
            }`}
            onClick={() => i18n.changeLanguage("es")}
          >
            <img src="/country-flags/es.svg" alt="ES flag" className="h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsTab;
