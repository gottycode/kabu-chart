import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React, { useEffect, useState } from "react";
import { fetchFinanceChart } from "../helper/fetch";

const TestChart2 = () => {
  let unixtime = 1707436800;
  let dateTime = new Date(unixtime * 1000);
  console.log(dateTime);

  useEffect(() => {
    // useEffect自体ではasyncの関数を受け取れないので内部で関数を定義して呼び出す。
    const access_db = async () => {
      const data = await fetchFinanceChart(7203);
    };
    console.log("呼ぶ");
    access_db();
    console.log("呼んだ");
  }, []);

  return <div className="App">{dateTime.toLocaleDateString()}</div>;
};

export default TestChart2;
