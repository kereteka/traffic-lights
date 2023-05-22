import React, { useEffect, useState } from "react";
import TrafficLight from "../TrafficLights";

const Screen = () => {
  const [open, setOpen] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [greenTime, setGreenTime] = useState(); // Varsayılan yeşil süre 10 saniye
  const [timer, setTimer] = useState(5);

  const defaultTime = 5;
  const color = [
    ["red", "red", defaultTime],
    ["green", "red", greenTime],
    ["yellow", "red", defaultTime],
    ["red", "green", greenTime],
    ["red", "yellow", defaultTime],
    ["red", "red", defaultTime],
  ];

  const changeInterval = (time) =>
    !isOpen &&
    setInterval(() => {
      setOpen((prevOpen) => (prevOpen + 1) % color.length);
    }, time);

  useEffect(() => {
    const interval = changeInterval(color[open][2] * 1000);

    !isOpen ? setTimer(color[open][2]) : setTimer(15);

    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(countdown);
    };
  }, [open, isOpen, greenTime]);

  const handleClick = () => {
    setIsOpen(true);
    setOpen(0);
    setTimeout(() => {
      setIsOpen(false);
    }, 15000);
  };

  const handleInputChange = (value) => {
    setGreenTime(value);
  };

  return (
    <div className="w-fit flex flex-col items-center mx-auto">
      <div className=" w-full mt-24 -mb-12 bg-gray-400 flex justify-between px-24">
        <div className="">Mevcut Adım : {open} </div>
        <div>Sonraki Adıma Kalan Süre : {timer}</div>
      </div>
      <div className="flex justify-center items-center">
        <TrafficLight active={color[open][0]} />
        <TrafficLight active={color[open][1]} />
        <TrafficLight active={isOpen ? "green" : "red"} />
        <input
          className=" border border-black h-12 w-24 p-4"
          type="number"
          max={30}
          min={1}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <button
          className=" w-12 h-12 ml-4 bg-green-400 rounded-full border-4 border-black hover:brightness-95"
          onClick={handleClick}
        ></button>
      </div>
      <input type="text" />
    </div>
  );
};

export default Screen;
