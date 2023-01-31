import { searchForWorkspaceRoot } from "vite";
import "./style.css";

document.querySelector(".main").innerHTML = `
<img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Amiibo_logo.png" alt="amiibo" id = "cover">
<h1 id="title">Find Your Figure!</h1>
<form id="form"> 
<input type="text" id="inpt" placeholder="Search...">
<button id="sb">Search</button>
</form>`;

const input = document.getElementById("inpt")
const URL = "https://www.amiiboapi.com/api/amiibo/?name=";
let amiibo = [];
let imgs = [];

const mii = async () => {
  try {
    const response = await fetch(URL);
    console.log(amiibo)
    amiibo = imgs.message;
    imgs = await response.json();
    input.addEventListener('keyup', (e) => {
      const string = e.target.value.toLowerCase();
      present(miifilter)
      const miifilter = amiibo.filter((miibo) => {
        return (miibo.toLowerCase().includes(string))
      })
    })
    const present = (amiibo) => {
      const strg = amiibo
      .map((miibo) => {
        return `<img class="img" src="${miibo}"/>`
      })
      document.getElementById("display").innerHTML = strg;
    }
    present(amiibo)

    if (response.status < 200 || response.status > 299) {
      throw new Error(await response);

    } else {
      console.log("yay!");
    }
  } 
  
  catch (error) {
    console.log(error);
    console.log("uhm actually... you did something wrong 🤓");
  }
}

mii();