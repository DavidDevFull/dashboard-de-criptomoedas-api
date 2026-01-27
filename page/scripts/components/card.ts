import { formatCurrency, formatPercent } from "../util/formatCoin.js";
import type { Coin } from "../util/requestCoin.js";

export const card = (container: HTMLDivElement, data: Coin) => {
   const { name, symbol, image, current_price, price_change_percentage_24h } = data;

   const colorClass = price_change_percentage_24h >= 0 ? 'var(--accent-emerald)' : 'var(--accent-ruby)';

   container.insertAdjacentHTML("beforeend", `
      <div class="card-cryptocurrency-data">
         <img src="${image}" alt="${name}">
         <div class="preview-of-information flex-center catch-all-total-space">                  
         <h4>${name}(${symbol})</h4>
            <span>${formatCurrency(current_price)} | 
               <span style="color: ${colorClass}; font-weight: bold;"> ${formatPercent(price_change_percentage_24h)}</span>
             </span>
         </div>
      </div>
   `);
}