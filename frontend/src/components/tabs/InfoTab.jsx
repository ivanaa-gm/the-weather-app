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
          <b>Weather Icons by Bas</b>, I found the perfect set of icons that
          inspired me to build the entire app.
        </p>
        <br />
        <p>
          From a technical perspective the app is built with{" "}
          <b>React + Tailwind CSS</b> for a smooth and modern user interface and{" "}
          <b>Node.js + NestJS</b>, serving as a proxy for external API calls.
          The APIs that I am using are <b>Open Meteo</b> for weather forecasts
          and location geocoding and <b>Stormglass</b> for moon phase and
          astronomical data - both are free of charge and serving thorough
          information that helped me make the app useful. The backend fetches
          current weather updates at half-hour intervals in order to provide
          accurate and timely information. Since Stormglass API has a limited
          daily quota, I call the API on load and then cache the moon phase in
          memory for the rest of the day. A new API call is only made if the
          cached date is no longer current.
        </p>
        <br />
        <p>
          I also deployed the app on <b>Render</b>. I hosted the frontend as a
          static site and the backend as a separate service. This makes the app
          publicly accessible and keeps the architecture close to a real-world
          setup.
        </p>
        <br />
        <p>
          Overall, this app was very fun to create because of desing and
          animations but also I explored more in backend development and API
          integrations.
        </p>
        <br />
        <p>
          <b>Ivana</b>
        </p>
      </div>
    </div>
  );
};

export default InfoTab;
