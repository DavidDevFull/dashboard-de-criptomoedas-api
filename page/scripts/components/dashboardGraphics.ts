import { card } from "./card.js";
import { top10Coin } from "../util/persistenceDataApi.js";
import { type Coin } from "../util/requestCoin.js";

export const dashboardGraphics = async (container: HTMLDivElement) => {
   container.insertAdjacentHTML("beforeend", `
      <h1 ><img src="images/coin.png" alt="Icon coin" width="32px">Dashboard criptomoedas</h1>               
      <section class="dashboard-graphics">
         <div class="container-top10-current"></div>
      </section>
`);

const containerTop10Current = document.querySelector(".container-top10-current") as HTMLDivElement;

if (containerTop10Current) {
   const data = await top10Coin();
   if (data) {
      data.forEach((dataCoin: Coin) => card(containerTop10Current, dataCoin));
   }
   return;
}
console.error(`Elemento HTML não encontrado no DOM`);
}
