import TodayCard from "../components/TodayCard";
import ForecastGrid from "../components/ForecastGrid";
import MobileCarousel from "../components/MobileCarousel";

const MainContent = () => {
  return (
    <div className="h-full w-full ">
      <div className="hidden md:grid grid-cols-3 h-full w-full">
        <div className="col-span-1 h-full">
          <TodayCard />
        </div>
        <div className="col-span-2 h-full">
          <ForecastGrid />
        </div>
      </div>

      <div className="md:hidden h-full w-full">
        <MobileCarousel />
      </div>
    </div>
  );
};

export default MainContent;
