import { Search, Settings, Info } from "lucide-react";
import { useRef, useEffect } from "react";
import SettingsTab from "../components/tabs/SettingsTab";
import SearchTab from "../components/tabs/SearchTab";
import InfoTab from "../components/tabs/InfoTab";

const Header = ({ openTab, setOpenTab }) => {
  const buttonsRef = useRef(null);
  const tabRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        tabRef.current &&
        !tabRef.current.contains(e.target) &&
        buttonsRef.current &&
        !buttonsRef.current.contains(e.target)
      ) {
        setOpenTab(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTab = (tabName) => {
    setOpenTab((prev) => (prev === tabName ? null : tabName));
  };

  return (
    <div className="absolute left-0 top-0 z-[9999]">
      <div className="p-2 text-white flex flex-col gap-2" ref={buttonsRef}>
        
        <div className="relative">
          <div
            className={`flex items-center justify-center w-10 h-10 duration-500 rounded-full shadow-2xl cursor-pointer transition hover:scale-105 filter hover:brightness-105 
              ${openTab === "search" ? "bg-black/70" : "bg-black/30"}`}
            onClick={() => toggleTab("search")}
          >
            <Search size={24} />
          </div>
          {openTab === "search" && (
            <div ref={tabRef}>
              <SearchTab onClose={() => setOpenTab(null)} />
            </div>
          )}
        </div>

        <div className="relative">
          <div
            className={`flex items-center justify-center w-10 h-10 duration-500 rounded-full shadow-2xl cursor-pointer transition hover:scale-105 filter hover:brightness-105 
              ${openTab === "settings" ? "bg-black/70" : "bg-black/30"}`}
            onClick={() => toggleTab("settings")}
          >
            <Settings size={24} />
          </div>
          {openTab === "settings" && (
            <div ref={tabRef}>
              <SettingsTab onClose={() => setOpenTab(null)} />
            </div>
          )}
        </div>

        <div className="relative">
          <div
            className={`flex items-center justify-center w-10 h-10 duration-500 rounded-full shadow-2xl cursor-pointer transition hover:scale-105 filter hover:brightness-105 
              ${openTab === "info" ? "bg-black/70" : "bg-black/30"}`}
            onClick={() => toggleTab("info")}
          >
            <Info size={24} />
          </div>
          {openTab === "info" && (
            <div ref={tabRef}>
              <InfoTab onClose={() => setOpenTab(null)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
