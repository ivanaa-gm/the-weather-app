import Card from "./Card";

const ForecastGrid = () => {
  return (
    <div className="h-full w-full grid grid-cols-3 grid-rows-2 bg-yellow-500">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
};

export default ForecastGrid;
