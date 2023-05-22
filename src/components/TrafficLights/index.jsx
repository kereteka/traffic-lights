import React from "react";

const TrafficLight = ({ active }) => {
  // const [open, setOpen] = useState(0);
  const lights = ["red", "yellow", "green"];

  // const [greenTime, setGreenTime] = useState(0); // Varsayılan yeşil süre 10 saniye
  // const [timer, setTimer] = useState(5);

  // const defaultTime = 5;

  // const color = [
  //   ["red", "red", defaultTime],
  //   ["green", "red", greenTime],
  //   ["yellow", "red", defaultTime],
  //   ["red", "green", greenTime],
  //   ["red", "yellow", defaultTime],
  //   ["red", "red", defaultTime],
  // ];
  // const grOne = ["red", "green", "yellow", "red", "red", "red"];
  // const grTwo = ["red", "red", "red", "green", "yellow", "red"];

  //const [timer, setTimer] = useState(5); // Timer set to 5 seconds

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setOpen((prevOpen) => (prevOpen + 1) % lights.length);
  //     setTimer(5); // Reset the timer to 5 seconds for each light
  //   }, 5000); // Open the next light every 5 seconds

  //   const countdown = setInterval(() => {
  //     setTimer((prevTimer) => prevTimer - 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //     clearInterval(countdown);
  //   };
  // }, []);

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
