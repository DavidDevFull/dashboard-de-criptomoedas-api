import ApexCharts from "apexcharts";
import { formatCurrency } from "../util/formatCoin.js";
import type { Coin } from "../util/requestCoin.js";

export const containerGraphical = async (container: HTMLDivElement, coins: Array<Coin>) => {
  
  const seriesData = coins.map((coin) => ({
    name: coin.name,
    data: coin.sparkline_in_7d.price,
  }));

  const options = {
    chart: {
      type: "area",
      height: "100%",
      width: "100%",
      sparkline: { enabled: false },
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    title: { text: "📊 Tendência: Top 10 Criptomoedas", align: "left" },
    series: seriesData,
    xaxis: { labels: { show: false } },
    yaxis: {
      labels: {
        show: true,
        formatter: (value: number) => formatCurrency(value),
      },
    },
    tooltip: {
      theme: "dark",
      x: { show: false },
      y: { formatter: (value: number) => formatCurrency(value) },
      style: { fontSize: "12px", fontFamily: "inherit" },
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      onItemClick: { toggleDataSeries: true },
      labels: { colors: "#fff" },
    },
  };

  container.insertAdjacentHTML(
    "beforeend",
    `<section class="container-graphical catch-all-total-space"></section>`,
  );

  const chartElement = container.querySelector(".container-graphical",) as HTMLDivElement;
  if (chartElement) {
    chartElement.innerHTML = "";
    const chart = new ApexCharts(chartElement, options);
    chart.render();
  }
};
