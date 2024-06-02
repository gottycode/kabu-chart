import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React, { useEffect, useState, useRef } from "react";
import { fetchFinanceChart } from "../helper/fetch";

const TestChart = () => {
  const [hoverData, setHoverData] = useState("not yet");
  const chartOptionsdefo = {
    rangeSelector: {
      selected: 1,
    },

    title: {
      text: "AAPL Stock Price",
    },

    series: [
      {
        name: "AAPL",
        data: [[]],
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  };
  const [chartOptions, setChartOptions] = useState(chartOptionsdefo);
  const chartComponent = useRef(null);

  // const setHoverData = (e) => {
  //   // The chart is not updated because `chartOptions` has not changed.
  //   setChartOptions({ hoverData: "e.target.category" });
  // };
  useEffect(() => {
    const chart = chartComponent.current.chart;
    //参照のみ
    console.log(chart);
    console.log(chart.title.textStr);
  }, []);
  const updateSeries = async () => {
    const data = await fetchFinanceChart(7203);

    console.log("取得データ");
    console.log(data);
    val = data.indicators.quote[0].close;

    const giita = data.timestamp.reduce((accumulator, currentValue, index) => {
      accumulator[index] = [currentValue, val[index]];
      return accumulator;
    }, {});

    // The chart is updated only with new options.
    setChartOptions({
      series: [{ data: data.indicators.quote[0].close }],
    });
  };

  const callBackHandler = () => {
    console.log("準備できたよ");
  };

  return (
    <div className="App">
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        callback={callBackHandler}
        ref={chartComponent}
      />
      <h3>Hovering over {hoverData}</h3>
      <button onClick={updateSeries}>Update Series</button>
    </div>
  );
};

export default TestChart;
