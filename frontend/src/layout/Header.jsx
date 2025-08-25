import { Search, Settings, Info } from "lucide-react";
import { useState } from "react";
import SearchModal from "../components/SearchModal";
import SettingsModal from "../components/SettingsModal";
import InfoModal from "../components/InfoModal";

const Header = () => {
      const [isSearchModalOpen, setSearchModalOpen] = useState(false);
      const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
      const [isInfoModalOpen, setInfoModalOpen] = useState(false);
    
  return (
    <div
      className="absolute left-0 top-0"
    >
      <div className="cursor-pointer p-2 text-white flex flex-col gap-4 justify-around h-full w-full items-center">
        <div className="bg-black/30 rounded-full p-2 shadow-2xl transition hover:scale-105 filter hover:brightness-105">
          <Search size={28} onClick={() => setSearchModalOpen(true)}/>
        </div>
        <div className="cursor-pointer bg-black/30 rounded-full p-2 shadow-2xl transition hover:scale-105 filter hover:brightness-105">
          <Settings size={28} onClick={() => setSettingsModalOpen(true)} />
        </div>
        <div className="cursor-pointer bg-black/30 rounded-full p-2 shadow-2xl transition hover:scale-105 filter hover:brightness-105">
          <Info size={28} onClick={() => setInfoModalOpen(true)}/>
        </div>
      </div>
      {isSearchModalOpen && <SearchModal onClose={() => setSearchModalOpen(false)} />}
      {isSettingsModalOpen && <SettingsModal onClose={() => setSettingsModalOpen(false)} />}
      {isInfoModalOpen && <InfoModal onClose={() => setInfoModalOpen(false)} />}
    </div>
  );
};

export default Header;
