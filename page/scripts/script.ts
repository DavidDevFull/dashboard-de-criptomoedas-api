import { menu } from "./components/menu.js";
import { containerContentMain } from "./components/containerContentMain.js";
import { top10Coin } from "./util/persistenceDataApi.js";

// alert("Projeto em desenvolvimento, gráficos, opções do menu lateral e a caixa de pesquisa sem funcinoalidades");

if (!(window as any).isAppInitialized) {
    (window as any).isAppInitialized = true;
    
    const app = document.getElementById("app") as HTMLDivElement;
    if (app) {
        menu(app);
        containerContentMain(app);
        top10Coin()
    }
}



