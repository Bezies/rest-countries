import React from "react";
import Header from "./Components/Header";
import SearchCountry from "./Components/SearchCountry";

export default function App() {
  return (
    <div className="bg-shark-950 h-screen">
      <Header />
      <div>
        <div className="flex items-center justify-center mt-5 w-full">
          <SearchCountry />
        </div>
      </div>
    </div>
  );
}
