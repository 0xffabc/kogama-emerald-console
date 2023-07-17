import ws from './interfaces/ws';

function menu_init(ws: ws): HTMLDivElement {
    const client_menu = document.createElement("div");
    // @ts-ignore
    client_menu.style = [
      "position: fixed",
      "color: rgba(0, 0, 0, 0.5)",
      "width: 450px",
      "height: 300px",
      "background: rgba(40, 40, 40)",
      "color: rgb(120, 120, 120)",
      "border-radius: 20px",
      "z-index: 100",
      "top: 25%",
      "left: 25%"
      ].join(";");
      client_menu.innerHTML = `
         <header style = "text-align: center; font-family: Arial; font-size: 20px; width: 100%; background-color: rgb(50, 50, 50); border-top-right-radius: 20px; border-top-left-radius: 20px; z-index: 999; height: 50px; ">
             Emerald Client
             <button onclick = "this.parentElement.parentElement.style.display = 'none'" style = "width: 10%; height: 50px; position: absolute; pointer-events: all; right: 0; border-top-right-radius: 20px; border: 0; font-size: 30px; background-color: rgb(75, 75, 75);"> × </button>
         </header>
         <style>
         .block_ {
           background-color: rgb(70, 70, 70);
           width: 100%;
           height: 25%;
           text-align: center;
         }
         </style>
         <section style = "display: flex; width: 30%; height: 83.5%; pointer-events: all; position: absolute; top: 50px; bottom: 0; background-color: rgb(60, 60, 60); border-bottom-left-radius: 20px; font-size: 20px; text-align: center; flex-direction: column;">
            <block class = "block_">
               About
            </block>
            <block class = "block_">
               Physics
            </block>
            <block class = "block_">
               Guns
            </block>
            <block class = "block_" style = "border-bottom-left-radius: 20px">
               Server
            </block>
         </section>
      `;
      client_menu.id = "console_";
      // @ts-ignore
      document.getElementById("main-content").append(client_menu);

      console.log("[Emerald Console] Hack is ready!", ws);

      return client_menu;
};

export default menu_init;