import ApexCharts from "apexcharts";
import { formatCurrency } from "../util/formatCoin.js";
import type { Coin } from "../util/requestCoin.js";

const chartsCache: Record<string, ApexCharts> = {};

const getRandomColor = () => {
  return `hsl(${Math.floor(Math.random() * 360)}, 60%, 70%)`
};

export const containerGraphical = async (container: HTMLDivElement, coins: Array<Coin>) => {
  const color = getRandomColor();
  const coin = coins[0];
  const chartId = `chart-${coin?.id}`; 

  if (chartsCache[chartId]) {
      chartsCache[chartId].updateSeries([{ 
        name: coin?.name ?? "Desconhecido",
        data: coin?.sparkline_in_7d?.price ?? [] 
      }]);
      return;
  }
  
  const seriesData = coins.map((coin) => ({
    name: coin.name,
    data: coin.sparkline_in_7d.price,
  }));

  const options = {
    chart: {
      type: "area",
      height: "100%",
      width: "100%",
      foreColor: color,
      sparkline: { enabled: false },
      toolbar: { show: false },
    },
    colors: [color],
    dataLabels: { enabled: false },
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
    type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100]
      }
  };

  container.innerHTML = `<div id="${chartId}"></div>`;
    const el = document.getElementById(chartId);
    
    if (el) {
      const chart = new ApexCharts(el, options);
      await chart.render();
      chartsCache[chartId] = chart; 
    }
};
