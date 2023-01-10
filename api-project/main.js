import "./style.css";

const URL =
  "https://api.nasa.gov/planetary/apod?api_key=9Ix96xs5QBJhrej9Zcvx5IBNY8J9Xuv3QiDychbw";

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

document.querySelector("#search").innerHTML = `<form id="form"> 
<input type="search" id="query" name="q" placeholder="Search...">
<button>Search</button>
</form>`;

getData(URL);
