export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number; 
  sparkline_in_7d: {
    price: number[]; 
  };
}

const filterData = (data: any): Coin => {
  return {
    id: data.id,
    symbol: data.symbol,
    name: data.name,
    image: data.image,
    current_price: data.current_price,
    price_change_percentage_24h: data.price_change_percentage_24h,
    sparkline_in_7d: {
      price: data.sparkline_in_7d?.price || [],
    }
  };
};

export const requestCoin = async () => {
  try {
    const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true");
    
    if (!response.ok) throw new Error("Erro na requisição");

    const data: any[] = await response.json();
    
    const dataFilter = data.map(coin => filterData(coin));
    
    console.info(dataFilter); 
   return dataFilter
  } catch (error) {
    console.error("Não foi possível efetuar a requisição:", error);
  }
};