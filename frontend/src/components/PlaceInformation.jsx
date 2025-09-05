import { MapPin, Clock, Mountain } from "lucide-react";
import { useLocation } from "../contexts/LocationContext";
import { formatCoordinates } from "../utils/utils";

const PlaceInformation = () => {
  const { locationData } = useLocation();
  const { location, latitude, longitude, timezoneTerm, elevation, admin1 } = locationData;
  if (!location) return null;

  return (
    <div className="flex flex-col items-end mr-2">
      <div className="text-end w-20 text-white font-medium mt-2">
        {location}, {admin1}
      </div>
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
        <div className="text-end">{timezoneTerm}</div>
        <Clock
          size={20}
          strokeWidth="1.5"
          onClick={() => setSearchModalOpen(true)}
        />
      </div>
      <div className="flex flex-row items-center gap-2 mt-2 text-white font-extralight text-sm">
        <div className="text-end">{elevation}</div>
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
