export const menu = (container: HTMLDivElement) => {
   container.insertAdjacentHTML("beforeend", `
      <aside id="menu">
         <nav>
            <ul>                  
               <li><button type="button" data-page="home"></button></li>
               <li><button type="button" data-page="favorites"></button></li>
               <li><button type="button" data-page="converter"></button></li>
               <li><button type="button" data-page="settings"></button></li>
            </ul>
         </nav>
      </aside>
   `);
}