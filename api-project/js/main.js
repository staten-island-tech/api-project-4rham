const URL = `https://www.amiiboapi.com/api/amiibo/${amiibo}`

import "../css/style.css";
import { DOM } from "../js/dom.js"

DOM.form.addEventListener("submit", function () {
  event.preventDefault();
  let amiibo = DOM.name.value.toLowerCase()
  getData(URL)
  clear()
})

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new error(response);
    } else {
      const data = await response.json();
    }
    DOM.container.insertAdjacentHTML(
      "afterbegin",
      `<div class="result">
      <h2 class="name">${
        data.name.charAt(0).toUpperCase() + data.name.slice(1)
      }</h2>
      <img src="${data.image}" alt="Front of ${data.name}" class="image">
      <h3 class = "sheader">Series</h3>
      <h4 class = "series"></h4>
      <h3 class = "sheader"></h3>
      <ul class = "release"></ul>
    </div>`
    );
    data.release.forEach((a) => 
    document
    .querySelector(".release")
    .insertAdjacentHTML(
      "afterbegin",
      `<li class = "list">${a.release.charAt(0).toUpperCase() + a.release.slice(1)}`
    )
    )
    data.amiiboSeries.forEach((t) =>
    document
    .querySelector(".amiiboSeries")
    )
  
  } catch (error) {
    console.log(error);
    DOM.container.insertAdjacentHTML(
      "afterbegin",
      `<h1 class="err" uhm actually... you did something wrong 🤓</h1>`
    );
  }
}

function clear() {
  DOM.name.value = "";
  DOM.container.innerHTML ="";
}





















//const input = document.getElementById("inpt")
//const URL = "https://www.amiiboapi.com/api/amiibo/";
//let amiibo = [];
//let imgs = [];
//
//const mii = async () => {
//  try {
//    const response = await fetch(URL);
//    console.log(amiibo)
//    amiibo = imgs.message;
//    imgs = await response.json();
//    input.addEventListener('keyup', (e) => {
//      const string = e.target.value.toLowerCase();
//      const miifilter = amiibo.filter((miibo) => {
//        return (miibo.toLowerCase().includes(string))
//      })
//      present(miifilter)
//    })
//    const present = (amiibo) => {
//      const strg = amiibo
//      .map((miibo) => {
//        return `<img class="img" src="${miibo}"/>`;
//      })
//      document.getElementById("display").innerHTML = strg;
//    }
//    present(amiibo);
//
//    if (response.status < 200 || response.status > 299) {
//      throw new Error(await response);
//
//    } else {
//      console.log("yay!");
//    }
//  } 
//  
//  catch (error) {
//    console.log(error);
//    console.log("uhm actually... you did something wrong 🤓");
//  }
//}
//
//mii();