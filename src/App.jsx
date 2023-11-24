import React, { useState } from "react";
import Header from "./Components/Header";
import SearchCountry from "./Components/SearchCountry";
import { useSelector, useDispatch } from "react-redux";
import RegionFilter from "./Components/RegionFilter";
import { getCountryList } from "./features/country";
import CountryCard from "./Components/CountryCard";
import { nanoid } from "nanoid";

export default function App() {
  const darkmode = useSelector((state) => state.darkmode);
  const countriesList = useSelector((state) => state.country);
  const searchCountry = useSelector((state) => state.searchCountry);

  const dispatch = useDispatch();

  if (!countriesList.data) {
    dispatch(getCountryList());
  }

  console.log(searchCountry.SearchByName);

  return (
    <div className={darkmode.state ? "bg-shark-950" : " bg-slate-100"}>
      <Header />
      <div>
        <div className="mt-5 w-full pb-20">
          <div className="w-full flex flex-col items-start ml-10 justify-center">
            <SearchCountry />
            <RegionFilter />
          </div>
          <div>
            <ul className="w-4/5 flex flex-wrap items-center justify-center mx-auto">
              {countriesList.data &&
                countriesList.data.length > 0 &&
                countriesList.data
                  // .filter((el) =>
                  //   searchCountry.SearchByName !== ""
                  //     ? el.name.some(searchCountry.SearchByName)
                  //     : el
                  // )
                  .map((country) => (
                    <CountryCard key={nanoid(8)} country={country} />
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
