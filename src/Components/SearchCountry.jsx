import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addName } from "../features/searchCountry";

export default function SearchCountry() {
  const darkmode = useSelector((state) => state.darkmode);
  const searchCountry = useSelector((state) => state.searchCountry);

  const dispatch = useDispatch();

  return (
    <input
      value={searchCountry.SearchByName}
      onChange={(e) => dispatch(addName(e.target.value))}
      className={
        darkmode.state
          ? "w-4/5 md:w-1/3 outline-none bg-oxford-blue-900 text-white rounded text-sm py-3 pl-16 bg-[url('/loupe-w.svg')] bg-no-repeat bg-[length:50px_25px] bg-left"
          : "w-4/5 md:w-1/3 outline-none bg-white text-slate-100 text-sm rounded py-3 pl-16 bg-[url('/loupe-g.svg')] bg-no-repeat bg-[length:50px_25px] bg-left"
      }
      type="text"
      placeholder="Search for a country..."
    />
  );
}
