import { MapPin, Clock, Mountain } from "lucide-react";
import { location, timezone, latitude, longitude, elevation } from "../utils/api";
import { formatCoordinates } from "../utils/utils";

const PlaceInformation = () => {
  return (
    <div className="flex flex-col items-end">
      <div className="text-end w-20 text-white font-medium mt-2 mr-4">{location}</div>
      <div className="flex flex-row items-center gap-2 mt-2 text-white font-extralight text-sm">
        <div className="flex flex-col">
          <div className="text-end">{formatCoordinates(latitude)}</div>
          <div className="text-end">{formatCoordinates(longitude)}</div>
        </div>  
        <MapPin
          size={24}
          strokeWidth="1.5"
          onClick={() => setSearchModalOpen(true)}
        />
      </div>
      <div className="flex flex-row items-center gap-2 mt-2 text-white font-extralight text-sm">
        <div className="text-end">{timezone}</div>
        <Clock
          size={20}
          strokeWidth="1.5"
          onClick={() => setSearchModalOpen(true)}
        />
      </div>
      <div className="flex flex-row items-center gap-2 mt-2 text-white font-extralight text-sm">
        <div className="text-end">{elevation} m</div>
        <Mountain
          size={20}
          strokeWidth="1.5"
          onClick={() => setSearchModalOpen(true)}
        />
      </div>
    </div>
  );
};

export default PlaceInformation;
