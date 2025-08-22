import Card from "./Card";

const ForecastGrid = () => {
  return (
    <div className="h-screen w-full grid grid-cols-3 grid-rows-2 bg-yellow-500">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i}>
          <Card />
        </div>
      ))}
    </div>
  );
};

export default ForecastGrid;
