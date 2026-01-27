import { card } from "./card.js";
import { containerGraphical } from "./containerGraphical.js";
import { requestCoin, type Coin } from "../util/requestCoin.js";

export const dashboardGraphics = async (container: HTMLDivElement) => {
   container.insertAdjacentHTML("beforeend", `
      <h1 ><img src="images/coin.png" alt="Icon coin" width="32px">Dashboard criptomoedas</h1>               
      <section class="dashboard-graphics">
         <div class="container-top10-current"></div>
         <div class="container-graph-of-value-variation flex-center"></div>
      </section>
`);

const containerTop10Current = document.querySelector(".container-top10-current") as HTMLDivElement;
const containerGraphOfValueVariation = document.querySelector(".container-graph-of-value-variation") as HTMLDivElement;
   if (containerTop10Current && containerGraphOfValueVariation) {
      const data: Coin[] | undefined = await requestCoin(); 
      if (data) {
      data.forEach((dataCoin) => card(containerTop10Current, dataCoin));
      containerGraphical(containerGraphOfValueVariation, data);
      }
      return;
   }
console.error(`Elemento HTML não encontrado no DOM`);
}
