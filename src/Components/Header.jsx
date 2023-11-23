import React from "react";
import moonDark from "../assets/moon-solid.svg";

export default function Header() {
  return (
    <div className="flex justify-between px-10 py-5 bg-oxford-blue-900">
      <p className="font-bold text-white">Where in the world?</p>
      <button className="flex">
        <span>
          <img className="w-5" src={moonDark} alt="" />
        </span>
        <span className="ml-2 text-white">Dark Mode</span>
      </button>
    </div>
  );
}
