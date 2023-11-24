import React from "react";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { useState } from "react";
import CountryModal from "./CountryModal";

export default function CountryCard({ country }) {
  const darkmode = useSelector((state) => state.darkmode);
  const [showModal, setShowModal] = useState(false);

  return (
    <li
      onClick={() => setShowModal(!showModal)}
      className={
        darkmode.state
          ? "mt-8 pb-8 md:mt-10 md:ml-8 w-full md:w-72 rounded bg-oxford-blue-900 cursor-pointer"
          : "mt-8 pb-8 md:mt-10 md:ml-8 w-full md:w-72 rounded bg-white cursor-pointer"
      }
    >
      <div className="overflow-hidden  rounded-t">
        <img
          className="w-full h-48 md:h-48 object-cover"
          src={country.flags.svg}
          alt={`flag of ${country.name}`}
        />
      </div>
      <div
        className={
          darkmode.state
            ? " text-white mt-5 ml-5 pb-5"
            : " text-black mt-5 ml-5 pb-5"
        }
      >
        <p className="font-semibold">{country.name}</p>

        <div className="mt-2 text-sm">
          <p className="text-xs font-thin text-slate-200">
            <span className="font-semibold text-sm">Population: </span>
            {new Intl.NumberFormat("fr-FR").format(country.population)}
          </p>
          <p className="text-xs font-thin text-slate-200">
            <span className="font-semibold text-sm">Regions: </span>
            {country.region}
          </p>
          <p className="text-xs font-thin text-slate-200">
            <span className="font-semibold text-sm">Capital: </span>
            {country.capital}
          </p>
        </div>
      </div>
      {showModal &&
        createPortal(
          <CountryModal
            country={country}
            closeModal={() => setShowModal(!showModal)}
          />,
          document.body
        )}
    </li>
  );
}
