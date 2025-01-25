import "./styles.css";
import { divContent, homeContent } from "./home.js";
import  { menuContent } from "./menu.js";
import { aboutContent } from "./about.js";
import html from "./template.html";

console.log(divContent);
menuContent();

const body = document.querySelector("body");
const btnHome = document.querySelector("#btn-home");
const btnMenu = document.querySelector("#btn-menu");
const btnAbout = document.querySelector("#btn-about");


btnHome.addEventListener('click', homeContent);
btnMenu.addEventListener('click', menuContent);
btnAbout.addEventListener('click', aboutContent)

// Footer
const footer = document.createElement("footer");
body.appendChild(footer);

footer.style.cssText = "display: flex; align-items: center; margin: 0; border: 0;"

const p = document.createElement("p");
p.textContent = "Copyright © Luis Octávio";
p.style.cssText = "font-family: 'Franklin Gothic Medium', sans-serif;"

footer.appendChild(p);
