export const search = (container: HTMLDivElement) => {
   container.insertAdjacentHTML("beforeend", `
      <div class="container-search flex-line-around">
         <input type="text" placeholder="Pesquise uma criptomoedas" id="ipn-search"> 
         <button></button>
      </div>
   `);
}


