import { Search, Settings, Info } from "lucide-react";
import { useState } from "react";
import SettingsTab from "../components/tabs/SettingsTab";
import SearchTab from "../components/tabs/SearchTab";
import InfoTab from "../components/tabs/InfoTab";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [areSettingsOpen, setAreSettingsOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const handleSearchOpen = (isOpen) => {
    setIsSearchOpen(isOpen);
    if (isOpen) {
      setAreSettingsOpen(false);
      setIsInfoOpen(false);
    }
    if (!isOpen) setQuery("");
  };

  const handleSettingsOpen = (isOpen) => {
    setAreSettingsOpen(isOpen);
    if (isOpen) {
      setIsSearchOpen(false);
      setIsInfoOpen(false);
    }
  };

  const handleInfoOpen = (isOpen) => {
    setIsInfoOpen(isOpen);
    if (isOpen) {
      setIsSearchOpen(false);
      setAreSettingsOpen(false);
    }
  };

  return (
    <div className="absolute left-0 top-0 z-[9999]">
      <div className="p-2 text-white flex flex-col gap-2">
        
        <div className="relative">
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full shadow-2xl cursor-pointer transition hover:scale-105 filter hover:brightness-105 
            ${isSearchOpen ? "bg-black/70" : "bg-black/30"}`}
            onClick={() => handleSearchOpen(!isSearchOpen)}
          >
            <Search size={24} />
          </div>

          {isSearchOpen && <SearchTab onClose={() => setIsSearchOpen(false)}/>}
        </div>

        <div className="relative">
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full shadow-2xl cursor-pointer transition hover:scale-105 filter hover:brightness-105 
            ${areSettingsOpen ? "bg-black/70" : "bg-black/30"}`}
            onClick={() => handleSettingsOpen(!areSettingsOpen)}
          >
            <Settings size={24} />
          </div>

          {areSettingsOpen && <SettingsTab onClose={() => setAreSettingsOpen(false)}/>}
        </div>

        <div className="relative">
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full shadow-2xl cursor-pointer transition hover:scale-105 filter hover:brightness-105 
            ${isInfoOpen ? "bg-black/70" : "bg-black/30"}`}
            onClick={() => handleInfoOpen(!isInfoOpen)}
          >
            <Info size={24} />
          </div>

          {isInfoOpen && <InfoTab onClose={() => setIsInfoOpen(false)}/>}
        </div>
      </div>
    </div>
  );
};

export default Header;
