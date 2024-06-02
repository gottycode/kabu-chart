export const fetchFinanceChart = async (code) => {
  // https://query1.finance.yahoo.com/v8/finance/chart/7203.T?interval=1d&range=60d
  // const url = `https://query1.finance.yahoo.com/v8/finance/chart/${code}.T?interval=1d&range=60d`;
  const url = `/finance/v8/finance/chart/${code}.T?interval=1d&range=60d`;
  const res = await fetch(url, { mode: "cors" });
  // console.log(res.ok);
  // console.log(res.status);
  // console.log(res.statusTexts);

  const json = await res.json();
  // console.log("json");
  const data = json.chart.result[0];
  // console.log(data);
  return data;
};
