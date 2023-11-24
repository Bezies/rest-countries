import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRegion } from "../features/searchCountry";

export default function RegionFilter() {
  const darkmode = useSelector((state) => state.darkmode);
  const dispatch = useDispatch();

  return (
    <select
      onChange={(e) => dispatch(addRegion(e.target.value))}
      className={`${
        darkmode.state
          ? "w-1/2 mt-5 md:mt-0 md:w-1/5 px-3 py-3 rounded bg-oxford-blue-900 text-white text-sm"
          : "w-1/2 mt-5 md:mt-0 md:w-1/5 px-3 py-3 rounded bg-white text-black text-sm"
      }`}
      name="region"
    >
      <option value="">Filter by region</option>
      <option value="africa">Africa</option>
      <option value="americas">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}
