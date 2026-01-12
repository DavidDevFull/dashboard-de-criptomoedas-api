export const card = (container:HTMLDivElement, data:any) => {
   const {name, symbol, image, current_price, price_change_percentage_24h , ...restData} = data

   container.insertAdjacentHTML("beforeend", `
         <div class="card-cryptocurrency-data ">
            <img src="${image}" alt="${name}">
            <div class="preview-of-information flex-col-around catch-all-total-space">
               <h4>${name}(${symbol})</h4>
               <span>${current_price} | ${price_change_percentage_24h}</span>
            </div>
         </div>
   `);

}