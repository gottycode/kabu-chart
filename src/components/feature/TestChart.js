import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React, { useEffect, useState, useRef } from "react";
const TestChart = () => {
  const [hoverData, setHoverData] = useState("not yet");
  const chartOptionsdefo = {
    xAxis: {
      categories: ["A", "B", "C"],
    },
    series: [{ data: [1, 2, 3] }],
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver: (evt) => {
              console.log(evt);
              setHoverData(evt.target.category);
            },
          },
        },
      },
    },
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
  const updateSeries = () => {
    // The chart is updated only with new options.
    setChartOptions({
      series: [{ data: [Math.random() * 5, 2, 1] }],
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
