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
              ? "text-white flex items-center justify-between px-4 py-2 my-10 ml-10 shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)]"
              : "text-black flex items-center justify-between px-4 py-2 my-10 ml-10 shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)]"
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
      <div>
        <div className="flex items-center justify-center">
          <img className="w-4/5 h-48" src={country.flags.svg} alt="" />
        </div>
        <div
          className={`${
            darkmode.state ? "text-white mt-10 ml-10" : "text-black mt-10 ml-10"
          }`}
        >
          <p className="text-xl font-bold">{country.name}</p>

          <div className="text-sm mt-5">
            <p>
              <span>Native Name: </span>
              {country.nativeName}
            </p>
            <p>
              <span>Population: </span>
              {new Intl.NumberFormat("fr-FR").format(country.population)}
            </p>
            <p>
              <span>Region: </span>
              {country.region}
            </p>
            <p>
              <span>Sub Region: </span>
              {country.subregion}
            </p>
            <p>
              <span>Capital: </span>
              {country.capital}
            </p>
          </div>

          <div className="text-sm mt-8">
            <p>
              <span>Top Level Domain: </span>
              {country.topLevelDomain[0]}
            </p>
            <p>
              <span>Currencies: </span>
              {country.currencies.length > 0 &&
                country.currencies.map((currency) => (
                  <span key={nanoid(4)}>{currency.name}, </span>
                ))}
            </p>
            <p>
              <span>Languages: </span>
              {country.languages.length > 0 &&
                country.languages.map((lang) => (
                  <span key={nanoid()}>{lang.name}, </span>
                ))}
            </p>
          </div>

          <div className="mt-5">
            <p className="text-xl">Border Countries</p>
            <div className="flex flex-wrap">
              {country.borders.length > 0 &&
                country.borders.map((border) => (
                  <span
                    key={nanoid()}
                    className="px-3 py-2 mr-3 mt-3 text-white shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)]"
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
