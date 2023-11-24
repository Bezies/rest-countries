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

  return (
    <div
      className={
        darkmode.state ? "bg-shark-950 font-nuno" : " bg-slate-100 font-nuno"
      }
    >
      <Header />
      <div>
        <div className="mt-5 w-full pb-20">
          <div className="w-full md:w-10/12 md:justify-between md:items-center md:mx-auto flex flex-col md:flex-row items-start pl-10 justify-center">
            <SearchCountry />
            <RegionFilter />
          </div>
          <div>
            <ul className="w-11/12 flex flex-wrap items-center justify-center mx-auto">
              {countriesList.data &&
                countriesList.data.length > 0 &&
                countriesList.data
                  .filter((el) =>
                    searchCountry.SearchByName !== ""
                      ? el.name
                          .toLowerCase()
                          .includes(searchCountry.SearchByName)
                      : el
                  )
                  .filter((el) =>
                    searchCountry.FilterByRegion === ""
                      ? el
                      : el.region.toLowerCase() === searchCountry.FilterByRegion
                  )
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
