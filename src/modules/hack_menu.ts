// @ts-nocheck
import ws from './interfaces/ws';

function menu_init() {
/** HTML (Hyper-text markup language stuff) **/
  const client_menu = document.createElement("div");
  client_menu.style = [
    "position: fixed",
    "color: rgba(0, 0, 0, 0.5)",
    "width: 450px",
    "height: 300px",
    "background: rgba(40, 40, 40)",
    "color: rgb(120, 120, 120)",
    "border-radius: 20px",
    "z-index: 100",
    "top: 10%",
    "left: 0%",
    "font-weight: bold"
    ].join(";");
    client_menu.innerHTML = `
       <header style = "text-align: center; font-family: Arial; font-size: 20px; width: 100%; background-color: rgb(50, 50, 50); border-top-right-radius: 20px; border-top-left-radius: 20px; z-index: 999; height: 50px; ">
           <img src = "https://cdn.discordapp.com/attachments/1120791600243683438/1129853049624608890/IMG_20230716_000650.jpg" style = "width: 50px; height: 50px; border-radius: 50px; position: absolute; top: 0%; left: 5%; filter: contrast(0.5)"> Emerald Client - KoGaMa
           <button onclick = "this.parentElement.parentElement.style.display = 'none'" style = "width: 10%; height: 50px; position: absolute; pointer-events: all; right: 0; border-top-right-radius: 20px; border: 0; font-size: 30px; background-color: rgb(75, 75, 75);"> × </button>
       </header>
       <style>
       @keyframes bgsmooth {
         0% {
           background-color: rgb(70, 70, 70);
           border-bottom: 2px solid rgb(60, 60, 60);
         },
         100% {
           background-color: rgb(60, 60, 60);
           border-bottom: 2px solid rgb(30, 30, 30);
         }
       }
       @keyframes bgsmoothout {
         100% {
           background-color: rgb(70, 70, 70);
           border-bottom: 2px solid rgb(60, 60, 60);
         },
         0% {
           background-color: rgb(60, 60, 60);
           border-bottom: 2px solid rgb(30, 30, 30);
         }
       }
       .block_ {
         background-color: rgb(70, 70, 70);
         width: 100%;
         height: 25%;
         text-align: center;
         border-bottom: 2px solid rgb(60, 60, 60);
         animation: bgsmoothout 0.5s;
       }
       .block_:hover {
         background-color: rgb(60, 60, 60);
         border-bottom: 2px solid rgb(30, 30, 30);
         animation: bgsmooth 0.5s;
       }
       span:hover {
         animation: bgsmooth 0.5s;
       }
       input[type=range] {
           height: 17px;
           -webkit-appearance: none;
           margin: 10px 0;
           width: 100%;
           border-radius: 0;
           background-color: #000000;
           color: white;
           outline: none;
        }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          background-color: rgb(50, 50, 50);
          width: 17px;
          height: 17px;
        }
        input[type=button] {
          filter: invert(1);
          color: rgb(200, 200, 200);
          border: 0;
        }
        input[type=button]:hover {
          color: rgb(20, 20, 20);
        }
       </style>
       <section style = "display: flex; width: 30%; height: 83.5%; pointer-events: all; position: absolute; top: 50px; bottom: 0; background-color: rgb(60, 60, 60); border-bottom-left-radius: 20px; font-size: 20px; text-align: center; flex-direction: column;">
          <block class = "block_" id = "about">
             About
          </block>
          <block class = "block_" id = "physic">
             Physics
          </block>
          <block class = "block_" id = "gunpicker">
             Guns
          </block>
          <block class = "block_" style = "border-bottom-left-radius: 20px" id = "server">
             Server
          </block>
       </section>
       <div id = "text" style = "height: 83.5%; width: 68%; background-color: rgb(40, 40, 40); position: absolute; right: 0; pointer-events: all; touch-events: all;">
       Select any tab to see information or hacks! Good luck and thanks for using my console <3
       </div>
    `;
    client_menu.id = "console_";
    top.document.documentElement.append(client_menu);
    /** Automatisation **/
    const about_hack = top.document.getElementById("about");
    const physic_hack = top.document.getElementById("physic");
    const guns_hack = top.document.getElementById("gunpicker");
    const server_hack = top.document.getElementById("server");
    const hacks_text = top.document.getElementById("text");
    const hacks_body = {
      "about": `
      <h2> ~ Emerald Console ~ </h2>
      Hack made by 0xfffabc.<br><br>
      WebSocket Uint8Array's stolen from MCC5 By Masterix.<br><br>
      Indeed as non-official continution of MCC.
      `,
      "physic": `
         <h3> Physics Changer </h3>
         Player Speed <input type = "range" min = "5" max = "150" id = "pspeed" value = "5"> <br>
         BunnyHop: <input type = "checkbox" id = "bhop" style = "outline: 0; accent-color: white; filter: invert(1)"><br>
         Gravity: <input type = "range" min = "5" max = "150" id = "grav" value = "5"> <br>
         Player Scale: <input type = "range" min = "1" max = "900" id = "pscal" value = "1" style = "width: 50px"> <br>
         <button style = "width: 30%; height: 35px; filter: invert(1); position: absolute; right: 10%; border-radius: 0; border: 0; bottom: 2.5%">
             APPLY
         </button>
      `,
      "gunpicker": `
      <h2> Guns Picker </h2>
      <span> Bazooka </span> <br>
      <span> Dual Revolers </span> <br>
      <span> Flamethrower </span> <br>
      <span> Impulse Gun </span> <br>
      <span> Machine Gun </span> <br>
      <span> Mouse Gun </span> <br>
      <span> Shotgun </span>
      <button style = "width: 30%; height: 35px; filter: invert(1); position: absolute; right: 10%; border-radius: 0; border: 0; bottom: 2.5%;">
             APPLY
         </button>
         <div style = "position: absolute; right: 10%; top: 30%;">
         Rapid Fire: <input type = "checkbox" id = "rfire" style = "outline: 0; accent-color: white; filter: invert(1)"> <br>
         Infinity Gun: <input type = "checkbox" id = "infg" style = "outline: 0; accent-color: white; filter: invert(1)">
         </div>
      `,
      "server": `
      Kick player: <input type = "number" style = "filter: invert(1); outline: 0" id = "kick"> <br>
      Kill player: <input type = "number" style = "filter: invert(1); outline: 0" id = "killp"> <br>
      ~ Effects ~ <br>
      <input type = "button" value = "Immortality"> <input type = "button" value = "Ring"> <input type = "button" value = "Big"> <input type = "button" value = "Small"> <input type = "button" value = "Dead"> <input type = "button" value = "Stand"> <input type = "button" value = "Swim"><br>
      <button style = "width: 30%; height: 35px; filter: invert(1); position: absolute; right: 10%; border-radius: 0; border: 0; bottom: 2.5%;">
             APPLY
         </button>
      `
    };
    about_hack.onclick = function() {
      hacks_text.innerHTML = hacks_body[this.id];
    };
    physic_hack.onclick = function() {
      hacks_text.innerHTML = hacks_body[this.id];
    };
    guns_hack.onclick = function() {
      hacks_text.innerHTML = hacks_body[this.id];
    };
    server_hack.onclick = function() {
      hacks_text.innerHTML = hacks_body[this.id];
    };
    return client_menu;
}

export default menu_init;