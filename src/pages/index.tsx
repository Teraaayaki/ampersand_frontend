import type { NextPage } from "next";
import React from "react";

import SearchBar from "../components/molecules/SearchBar";

const Home: NextPage = () => {
  return (
    <div className="h-full bg-[#F9F8FB] p-10">
      <h1>AMPERSAND</h1>
      <SearchBar />
    </div>
  );
};

export default Home;
