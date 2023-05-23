import React from "react";

const TrafficLight = ({ active }) => {
  const lights = ["red", "yellow", "green"];

  return (
    <div className="p-24 w-24 flex flex-col items-center">
      <div className="w-24 h-56 py-2 bg-gray-700 rounded-3xl flex flex-col items-center justify-around">
        {lights.map((light, key) => (
          <div
            key={key}
            className={
              " w-16 h-16 rounded-full border-4 border-black" +
              (active === light
                ? " brightness-125  "
                : " brightness-50 opacity-40 ")
            }
            style={{ backgroundColor: light }}
          >
            {}
          </div>
        ))}
      </div>
      <div className="w-4 h-48 bg-black"></div>
      <div className=" w-16 h-4 bg-black"></div>
    </div>
  );
};

export default TrafficLight;
