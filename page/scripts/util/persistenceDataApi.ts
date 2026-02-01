import { updateCardValues } from "../components/card.js";
import { requestCoin, type Coin } from "./requestCoin.js"

const CACHE_KEY = 'crypto_data';
const CACHE_TIME = 1 * 60 * 1000;

export const top10Coin = async () => {
   const cached = localStorage.getItem(CACHE_KEY);
   const now = Date.now();
   if(cached){
      const {data, timestamp} = JSON.parse(cached);
      if(now - timestamp < CACHE_TIME){
         console.info("Dados carregados do cache (LocalStorage)");

         data.forEach((dataCoin: Coin) => updateCardValues(dataCoin)); 
         return data;
      }
   }

    try {
        const data = await requestCoin();

        if (data) {
            localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: now }));
            data.forEach((dataCoin: Coin) => updateCardValues(dataCoin));
            return data;
        }

        return [];
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
}

const updateData = async () => {
    await top10Coin();
    setTimeout(updateData, 30000);
}
updateData();