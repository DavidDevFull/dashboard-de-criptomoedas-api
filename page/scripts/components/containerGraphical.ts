import ApexCharts from 'apexcharts'

export const containerGraphical = async (container: HTMLDivElement) => {
    var options = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'sales',
        data: [30,40,35,50,49,60,70,91,125]
      }],
      xaxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
      }
    }

   container.insertAdjacentHTML("beforeend", `
        <section class="container-graphical catch-all-total-space"></section>
  `);

    const graphical = document.querySelector(".container-graphical");
    var chart = new ApexCharts(graphical, options);
    if(graphical) chart.render();
     
}
