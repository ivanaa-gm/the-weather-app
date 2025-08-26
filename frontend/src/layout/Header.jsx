import { MapPin, Search, Settings, Info, Clock, Mountain } from "lucide-react";
import { useState } from "react";
import SearchModal from "../components/SearchModal";
import SettingsModal from "../components/SettingsModal";
import InfoModal from "../components/InfoModal";
import { timezone, latitude, longitude, elevation } from "../utils/api";

const Header = () => {
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);

  return (
    <div className="absolute left-0 top-0 z-100">
      <div className="p-2 text-white flex flex-col gap-2">
        <div
          className="flex items-center justify-center w-10 h-10 bg-black/30 rounded-full shadow-2xl cursor-pointer transition hover:scale-105 filter hover:brightness-105"
          onClick={() => setSearchModalOpen(true)}
        >
          <Search size={24} />
        </div>

        <div
          className="flex items-center justify-center w-10 h-10 bg-black/30 rounded-full shadow-2xl cursor-pointer transition hover:scale-105 filter hover:brightness-105"
          onClick={() => setSettingsModalOpen(true)}
        >
          <Settings size={24} />
        </div>

        <div
          className="flex items-center justify-center w-10 h-10 bg-black/30 rounded-full shadow-2xl cursor-pointer transition hover:scale-105 filter hover:brightness-105"
          onClick={() => setInfoModalOpen(true)}
        >
          <Info size={24} />
        </div>
      </div>

      {isSearchModalOpen && (
        <SearchModal onClose={() => setSearchModalOpen(false)} />
      )}
      {isSettingsModalOpen && (
        <SettingsModal onClose={() => setSettingsModalOpen(false)} />
      )}
      {isInfoModalOpen && <InfoModal onClose={() => setInfoModalOpen(false)} />}
    </div>
  );
};

export default Header;
