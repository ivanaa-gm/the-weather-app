import { useRef } from "react";
const InfoTab = ({ onClose }) => {
  const ref = useRef();

  return (
    <div
      className="absolute left-12 top-0 bg-black/90 border border-gray-600 rounded-xl shadow-xl p-4 md:w-96 w-[20rem]"
      ref={ref}
    >
      <div className="max-h-80 overflow-scroll text-wrap text-white">
        <p>
          I built The Weather App mainly because I wanted to explore more
          creative design elements in a web application. I’ve always enjoyed
          playing with backgrounds, SVGs and animated icons and creating new
          ones when I couldn't find what I was looking for. Thanks to the
          Weather Icons by Bas, I found the perfect set of icons that inspired
          me to build the entire app.
        </p>
        <br></br>
        <p>
          From a technical perspective the app is built with React + Tailwind
          CSS for a smooth and modern user interface and Node.js + NestJS,
          serving as a proxy for external API calls. The APIs that I am using
          are Open Meteo for weather forecasts and location geocoding and
          Stormglass for moon phase and astronomical data. Not only they are
          free of charge, but also they serve thorough information that helped
          me make the app useful. The backend fetches current weather updates at
          half-hour intervals in order to provide accurate and timely
          information. Since Stormglass API has a limited daily quota, I cache
          the first day’s moon phase in memory. A new API call is only made if
          the cached date is no longer current.
        </p>
        <br></br>
        <p>
          Overall, this app combines both my interest in design and frontend
          animations with my growing experience in backend development and API
          integrations. It was a very fun project that helped me to improve both
          my technical and creative skills.
        </p>
      </div>
    </div>
  );
};

export default InfoTab;
