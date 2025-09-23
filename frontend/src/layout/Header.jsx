import { Search, Settings, Info } from "lucide-react";
import SettingsTab from "../components/tabs/SettingsTab";
import SearchTab from "../components/tabs/SearchTab";
import InfoTab from "../components/tabs/InfoTab";

const Header = ({ openTab, setOpenTab, onClose }) => {
  const toggleTab = (tabName) => {
    setOpenTab((prev) => (prev === tabName ? null : tabName));
  };

  return (
    <div className="absolute left-0 top-0 z-[9998]">
      <div className="p-2 text-white flex flex-col gap-2">
        <div className="relative">
          <div
            className={`flex items-center justify-center w-10 h-10 duration-500 rounded-full shadow-2xl cursor-pointer transition hover:scale-105 filter hover:brightness-105 
      ${openTab === "search" ? "bg-black/70" : "bg-black/30"}`}
            onClick={() => toggleTab("search")}
          >
            <Search size={24} />
          </div>

          <div
            className={`absolute top-0 md:w-96 w-[20rem] transform transition-all duration-300 ease-in-out
      ${
        openTab === "search"
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-4 pointer-events-none"
      }`}
          >
            <SearchTab onClose={onClose} />
          </div>
        </div>

        <div className="relative">
          <div
            className={`flex items-center justify-center w-10 h-10 duration-500 rounded-full shadow-2xl cursor-pointer transition hover:scale-105 filter hover:brightness-105 
              ${openTab === "settings" ? "bg-black/70" : "bg-black/30"}`}
            onClick={() => toggleTab("settings")}
          >
            <Settings size={24} />
          </div>

          <div
            className={`absolute top-0 md:w-96 w-[20rem] transform transition-all duration-300 ease-in-out
      ${
        openTab === "settings"
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-4 pointer-events-none"
      }`}
          >
            <SettingsTab onClose={onClose} />
          </div>
        </div>

        <div className="relative">
          <div
            className={`flex items-center justify-center w-10 h-10 duration-500 rounded-full shadow-2xl cursor-pointer transition hover:scale-105 filter hover:brightness-105 
              ${openTab === "info" ? "bg-black/70" : "bg-black/30"}`}
            onClick={() => toggleTab("info")}
          >
            <Info size={24} />
          </div>

          <div
            className={`absolute top-0 md:w-96 w-[20rem] transform transition-all duration-300 ease-in-out
      ${
        openTab === "info"
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-4 pointer-events-none"
      }`}
          >
            <InfoTab onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
