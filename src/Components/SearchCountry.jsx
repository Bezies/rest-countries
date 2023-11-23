import React from "react";
import { useSelector } from "react-redux";

export default function SearchCountry() {
  const darkmode = useSelector((state) => state.darkmode);
  return (
    <input
      className={
        darkmode.state
          ? "w-4/5 bg-oxford-blue-900 rounded text-sm py-3 pl-16 bg-[url('src/assets/loupe-w.svg')] bg-no-repeat bg-[length:50px_25px] bg-left"
          : "w-4/5 bg-white text-slate-100 text-sm rounded py-3 pl-16 bg-[url('src/assets/loupe-g.svg')] bg-no-repeat bg-[length:50px_25px] bg-left"
      }
      type="text"
      placeholder="Search for a country..."
    />
  );
}
