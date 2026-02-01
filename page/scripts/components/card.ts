import { formatCurrency, formatPercent } from "../util/formatCoin.js";
import type { Coin } from "../util/requestCoin.js";
import { containerGraphical } from "./containerGraphical.js";

export const card = async (container: HTMLDivElement, data: Coin) => {
   const { name, symbol, image, current_price, price_change_percentage_24h } = data;
   const colorClass = price_change_percentage_24h >= 0 ? 'var(--accent-emerald)' : 'var(--accent-ruby)';
   
   const eachIdcard = `card-${symbol}`;
   const graphContainerId = `graph-${symbol}`;

   container.insertAdjacentHTML("beforeend", `
      <section class="card-cryptocurrency-data" id="${eachIdcard}">
          <section class="card">
             <img src="${image}" alt="${name}">
             <div class="preview-of-information flex-center">                   
                <h4>${name} (${symbol.toUpperCase()})</h4>
                <div>
                    <span class="coin-price">${formatCurrency(current_price)}</span> 
                    | 
                    <span class="coin-percent" style="color: ${colorClass}; font-weight: bold;"> 
                        ${formatPercent(price_change_percentage_24h)}
                    </span>
                </div>
             </div>
          </section>

          <section class="graphic" id="${graphContainerId}"></section>
      </section>
   `);

   const graphElement = document.getElementById(graphContainerId) as HTMLDivElement;

   if (graphElement) 
       await containerGraphical(graphElement, [data]); 
}

export const updateCardValues = (data: Coin) => {
    const card = document.querySelector(`#card-${data.symbol}`);
    
    const priceEl = card?.querySelector('.coin-price');
    const percentEl = card?.querySelector('.coin-percent') as HTMLElement;

    if (priceEl) priceEl.textContent = formatCurrency(data.current_price);
    if (percentEl) {
        percentEl.textContent = formatPercent(data.price_change_percentage_24h);
        percentEl.style.color = data.price_change_percentage_24h >= 0 
            ? 'var(--accent-emerald)' 
            : 'var(--accent-ruby)';
    }
}