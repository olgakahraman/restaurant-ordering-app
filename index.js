import { menuArray } from "./data.js";

const menuHtml = menuArray
  .map((item) => {
    const { name, ingredients, id, price, emoji } = item;

    return `
    <section class = "card">
    <div class = "card-start">${emoji}</div>
    <div class="card-middle">
    <h2>${name}</h2>
    <p>${ingredients}</p>
    <h3>$${price}</h3></div>
    <div class="card-end"><button id="${id}">+</button></div>
    
    </div>
    </section>
<hr />
    `;
  })
  .join(" ");

document.getElementById("main").innerHTML = menuHtml;
