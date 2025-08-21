import { useState } from "react";
import TodayCard from "./TodayCard";
import Card from "./Card";

const MobileCarousel = () => {
  const cards = [<TodayCard key="today" />, ...Array.from({ length: 6 }, (_, i) => <Card key={i} />)];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e) => {
    const scrollX = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    const index = Math.round(scrollX / width);
    setActiveIndex(index);
  };

  return (
    <div className="h-full w-full flex flex-col relative">
      <div
        className="flex-1 flex overflow-x-auto snap-x snap-mandatory"
        onScroll={handleScroll}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full h-full snap-center flex items-center justify-center"
          >
            {card}
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {cards.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              i === activeIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileCarousel;
