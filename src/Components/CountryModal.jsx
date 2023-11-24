import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import arrowWhite from "../assets/arrow-w.svg";
import arrowBlack from "../assets/arrow-b.svg";
import { nanoid } from "nanoid";

export default function CountryModal({ country, closeModal }) {
  const darkmode = useSelector((state) => state.darkmode);
  return (
    <div
      className={
        darkmode.state
          ? "fixed inset-0 h-screen w-full bg-shark-950"
          : "fixed inset-0 h-screen w-full bg-white"
      }
      onClick={(e) => e.stopPropagation()}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <Header />
      </div>
      <div>
        <button
          onClick={closeModal}
          className={
            darkmode.state
              ? "text-white flex items-center justify-between px-8 rounded-md py-2 my-10 ml-10 shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)]"
              : "text-black flex items-center justify-between px-8 rounded-md py-2 my-10 ml-10 shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)]"
          }
        >
          <span>
            {darkmode.state ? (
              <img className="w-5 mr-4" src={arrowWhite} alt="arrow left" />
            ) : (
              <img className="w-5 mr-4" src={arrowBlack} alt="arrow left" />
            )}
          </span>
          Back
        </button>
      </div>
      <div className="md:flex md:w-10/12 md:justify-between">
        <div className="flex items-center justify-center  md:w-1/2">
          <img
            className="w-4/5 h-48 md:w-full md:h-96 md:ml-10"
            src={country.flags.svg}
            alt=""
          />
        </div>
        <div
          className={`${
            darkmode.state ? "text-white mt-10 ml-10" : "text-black mt-10 ml-10"
          }`}
        >
          <p className="text-xl font-bold md:text-2xl">{country.name}</p>
          <div className="md:flex md:items-start md:mt-10">
            <div className="text-sm mt-5 md:mt-0 md:text-base">
              <p className="font-thin">
                <span className="font-medium">Native Name: </span>
                {country.nativeName}
              </p>
              <p className="font-thin">
                <span className="font-medium">Population: </span>
                {new Intl.NumberFormat("fr-FR").format(country.population)}
              </p>
              <p className="font-thin">
                <span className="font-medium">Region: </span>
                {country.region}
              </p>
              <p className="font-thin">
                <span className="font-medium">Sub Region: </span>
                {country.subregion}
              </p>
              <p className="font-thin">
                <span className="font-medium">Capital: </span>
                {country.capital}
              </p>
            </div>

            <div className="text-sm mt-8 md:mt-0 md:ml-32 md:text-base">
              <p className="font-thin">
                <span className="font-medium">Top Level Domain: </span>
                {country.topLevelDomain[0]}
              </p>
              <p className="font-thin">
                <span className="font-medium">Currencies: </span>
                {country.currencies &&
                  country.currencies.length > 0 &&
                  country.currencies.map((currency) => (
                    <span key={nanoid(4)}>{currency.name}, </span>
                  ))}
              </p>
              <p className="font-thin">
                <span className="font-medium">Languages: </span>
                {country.languages.length > 0 &&
                  country.languages.map((lang) => (
                    <span key={nanoid()}>{lang.name}, </span>
                  ))}
              </p>
            </div>
          </div>

          <div className="mt-5 md:flex md:items-start">
            <p className="text-xl md:w-48 md:mt-4 md:mr-4">Border Countries</p>
            <div className="flex flex-wrap pb-10">
              {country.borders &&
                country.borders.length > 0 &&
                country.borders.map((border) => (
                  <span
                    key={nanoid()}
                    className={
                      darkmode.state
                        ? "px-8 py-2 rounded mr-3 mt-3 text-white shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)]"
                        : "px-8 py-2 rounded mr-3 mt-3 text-black shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)]"
                    }
                  >
                    {border}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
