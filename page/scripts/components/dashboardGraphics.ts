import { card } from "./card.js";
import { containerGraphical } from "./containerGraphical.js";
import { requestCoin, type Coin } from "../util/requestCoin.js";


export const dashboardGraphics = async (container: HTMLDivElement) => {
   container.insertAdjacentHTML("beforeend", `
      <section class="dashboard-graphics catch-all-total-space">

         <div class="container-top10-current catch-all-total-space"></div>
         <div class="container-graph-of-value-variation catch-all-total-space flex-center"></div>

         <div class="container-compare-coin catch-all-total-space flex-center">
            <span>🧩 Component de comparação ainda em desenvolvimento 👨🏻‍💻</span>
         </div>
      </section>
`);

const containerTop10Current = document.querySelector(".container-top10-current") as HTMLDivElement;
const containerGraphOfValueVariation = document.querySelector(".container-graph-of-value-variation") as HTMLDivElement;
   if (containerTop10Current && containerGraphOfValueVariation) {
      const data: Coin[] | undefined = await requestCoin(); 
      if (data) {
      data.forEach((dataCoin) => card(containerTop10Current, dataCoin));
      containerGraphical(containerGraphOfValueVariation);
      }
      return;
   }
console.error(`Elemento HTML não encontrado no DOM`);
}
