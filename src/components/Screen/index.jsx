import React, { useCallback, useEffect, useMemo, useState } from "react";
import TrafficLight from "../TrafficLights";

const Screen = () => {
  const [open, setOpen] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isYellow, setIsYellow] = useState(false);
  const [isRed, setIsRed] = useState(false);
  const [greenTime, setGreenTime] = useState(5);
  const [timer, setTimer] = useState(5);
  const [input, setInput] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const defaultTime = 5;
  const color = useMemo(
    () => [
      ["red", "red", defaultTime],
      ["green", "red", greenTime],
      ["yellow", "red", defaultTime],
      ["red", "green", greenTime],
      ["red", "yellow", defaultTime],
      ["red", "red", defaultTime],
    ],
    [defaultTime, greenTime]
  );

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

  const handleClick = useCallback(() => {
    if (!buttonDisabled) {
      setIsOpen(true);
      setIsYellow(true);
      setButtonDisabled(true);

      setTimeout(() => {
        setIsYellow(false);
        setIsRed(true);
      }, 7500);

      setTimeout(() => {
        setIsRed(false);
      }, 15000);

      setOpen(0);
      setTimeout(() => {
        setIsOpen(false);
        setButtonDisabled(false);
      }, 15000);
    }
  }, [buttonDisabled]);

  const handleInputChange = useCallback((value) => {
    value = Math.floor(value);
    if (value > 30) {
      value = 30;
    } else if (value < 1) {
      value = 1;
    }

    setGreenTime(value);
    setInput(value);
  }, []);
  return (
    <div className="w-fit flex flex-col items-center mx-auto">
      <div className=" w-full mt-24 -mb-12 bg-gray-400 flex justify-between px-24">
        <div className="">Mevcut Adım : {open} </div>
        <div>Sonraki Adıma Kalan Süre : {timer}</div>
      </div>
      <div className="flex justify-center items-center">
        <TrafficLight
          active={isYellow ? "yellow" : isRed ? "red" : color[open][0]}
        />
        <TrafficLight
          active={isYellow ? "yellow" : isRed ? "red" : color[open][1]}
        />
        <TrafficLight active={isOpen ? "green" : "red"} />
        <input
          className=" border border-black h-12 w-24 p-4"
          type="number"
          max={30}
          min={1}
          step={1}
          value={input}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <button
          className=" w-12 h-12 ml-4 bg-green-400 rounded-full border-4 border-black hover:brightness-95"
          onClick={handleClick}
          disabled={buttonDisabled}
        ></button>
      </div>
    </div>
  );
};

export default Screen;
