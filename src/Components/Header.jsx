import React from "react";
import moonSolid from "../assets/moon-solid.svg";
import moonRegular from "../assets/moon-regular.svg";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../features/darkmode";

export default function Header() {
  const dispatch = useDispatch();
  const darkmode = useSelector((state) => state.darkmode);

  return (
    <div
      className={
        darkmode.state
          ? "flex justify-between px-10 py-5 bg-oxford-blue-900"
          : "flex justify-between px-10 py-5 bg-white"
      }
    >
      <p
        className={
          darkmode.state
            ? "font-bold text-white md:text-xl"
            : "font-bold text-black md:text-xl"
        }
      >
        Where in the world?
      </p>
      <button
        onClick={() => dispatch(changeMode())}
        className="flex items-center justify-between"
      >
        <span>
          {darkmode.state ? (
            <img className="w-4" src={moonSolid} alt="icon moon " />
          ) : (
            <img className="w-4" src={moonRegular} alt="icon moon " />
          )}
        </span>
        <span
          className={darkmode.state ? "ml-2 text-white" : "ml-2 text-black"}
        >
          Dark Mode
        </span>
      </button>
    </div>
  );
}
