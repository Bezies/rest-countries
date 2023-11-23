import React from "react";
import Header from "./Components/Header";
import SearchCountry from "./Components/SearchCountry";
import { useSelector, useDispatch } from "react-redux";
import RegionFilter from "./Components/RegionFilter";
import { getCountryList } from "./features/country";

export default function App() {
  const darkmode = useSelector((state) => state.darkmode);
  const countriesList = useSelector((state) => state.country);
  const dispatch = useDispatch();

  if (!countriesList.data) {
    dispatch(getCountryList());
  }

  console.log(countriesList.data);
  return (
    <div
      className={
        darkmode.state ? "bg-shark-950 h-screen" : "h-screen bg-slate-100"
      }
    >
      <Header />
      <div>
        <div className="flex items-center justify-center mt-5 w-full">
          <div className="w-full flex flex-col items-start ml-10 justify-center">
            <SearchCountry />
            <RegionFilter />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
