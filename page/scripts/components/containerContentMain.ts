import {dashboardGraphics} from "./dashboardGraphics.js"

export const containerContentMain = (container: HTMLDivElement) => {

   container.insertAdjacentHTML("beforeend", `
      <section class="container-content-main flex-center"></section> 
   `);

   const mainSection = container.querySelector(".container-content-main") as HTMLDivElement;

   if (mainSection) {
      mainSection.innerHTML = "";
      console.count("Execução do componente mainSection");
      dashboardGraphics(mainSection);
   }
}