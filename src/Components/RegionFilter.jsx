import React from "react";
import { useSelector } from "react-redux";

export default function RegionFilter() {
  const darkmode = useSelector((state) => state.darkmode);
  return (
    <select
      className={`${
        darkmode.state
          ? "w-1/2 mt-5 px-3 py-3 rounded bg-oxford-blue-900 text-white text-sm"
          : "w-1/2 mt-5 px-3 py-3 rounded bg-white text-black text-sm"
      }`}
      name="region"
    >
      <option value="">Filter by region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}
