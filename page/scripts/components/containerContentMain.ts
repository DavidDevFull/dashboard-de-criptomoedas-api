import {search} from "./search.js"
import {dashboardGraphics} from "./dashboardGraphics.js"

export const containerContentMain = (container: HTMLDivElement) => {

   container.insertAdjacentHTML("beforeend", `
      <section class="container-content-main flex-line-around"></section> 
   `);

   const mainSection = container.querySelector(".container-content-main") as HTMLDivElement;

   if (mainSection) {
      mainSection.innerHTML = "";
      console.count("Execução do componente mainSection");
      search(mainSection);
      dashboardGraphics(mainSection);
   }
}