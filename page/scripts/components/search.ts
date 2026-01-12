export const search = (container: HTMLDivElement) => {
   container.insertAdjacentHTML("beforeend", `
         <section class="container-title-search flex-line-around">
            <h1><img src="images/coin.png" alt="Icon coin" width="32px">Dashboard criptomoedas</h1>               
            <div class="container-search flex-line-around">
               <input type="text" placeholder="Pesquise uma criptomoedas" id="ipn-search"> 
               <button></button>
            </div>
         </section>   
      `);
}


