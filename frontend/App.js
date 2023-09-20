import React, { useState, useEffect } from "react";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import { useNightMode } from "./hooks/geceModuAc";
import { useAxios } from "./hooks/useAxios";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [night, changeHandler] = useNightMode(false);
  const [data, getData, loading, err] = useAxios(
    "get",
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
  );

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={night ? "dark-mode App" : "App"}>
      <Navbar night={night} changeHandler={changeHandler} />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;
