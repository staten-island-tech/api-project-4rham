import "./style.css";

const URL = "https://www.amiiboapi.com/api/amiibo/?name=";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new Error(await response);
    } else {
      const data = await response.json();
      document.getElementById("api-response").textContent = data.content;
      console.log("yay!");
    }
  } catch (error) {
    console.log(error);
    console.log("no!");
  }
}

document.querySelector(".main").innerHTML = `
<img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Amiibo_logo.png" alt="amiibo" id = "cover">
<h1 id="title">Find Your Figure!</h1>
<form id="form"> 
<input type="search" id="query" name="q" placeholder="Search...">
<button id="sb">Search</button>
</form>`;

getData(URL);
