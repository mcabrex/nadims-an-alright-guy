const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken = "pk.eyJ1IjoibWNhYnJleCIsImEiOiJjajhicjJpa3IwMHYxMndwNTgxNnExcXV4In0.Y4uLeXFkwIE4sJroLZTpeg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", [-74.009, 40.705]);
marker.addTo(map);


// let addToList = function(){
//   let choices = document.getElementById(`${type}-choices`);
//   let list = document.getElementById(`${type}-list`);
//   let selectedId = choices.value;
//   let lister = document.createElement("li");
//   lister.textContent = selectedId;
//   list.appendChild(lister);
// }

let hotelButton = document.getElementById("hotels-add")
let activityButton = document.getElementById("activities-add")
let restaurantButton = document.getElementById("restaurants-add")

// hotelButton.addEventListener("click",addToList("hotels"));
// activityButton.addEventListener("click",addToList("activities"));
// restaurantButton.addEventListener("click",addToList("restaurants"));

hotelButton.addEventListener("click",function(){
  let choices = document.getElementById("hotels-choices");
  let list = document.getElementById("hotels-list");
  let selectedId = choices.value;
  let lister = document.createElement("li");
  lister.textContent = selectedId;
  const button = document.createElement("button");
  lister.appendChild(button)
  list.appendChild(lister);
  button.textContent = "X"
  button.onclick = function(){
    console.log(list.textContent)
    list.removeChild(lister)
  }
});
activityButton.addEventListener("click",function(){
  let choices = document.getElementById("activities-choices");
  let list = document.getElementById("activities-list");
  let selectedId = choices.value;
  let lister = document.createElement("li");
  lister.textContent = selectedId;
  const button = document.createElement("button");
  lister.appendChild(button)
  list.appendChild(lister);
  button.textContent = "X"
  button.onclick = function(){
    console.log(list.textContent)
    list.removeChild(lister)
  }
});
restaurantButton.addEventListener("click",function(){
  let choices = document.getElementById("restaurants-choices");
  let list = document.getElementById("restaurants-list");
  let selectedId = choices.value;
  let lister = document.createElement("li");
  lister.textContent = selectedId;
  const button = document.createElement("button");
  lister.appendChild(button)
  list.appendChild(lister);
  button.textContent = "X"
  button.onclick = function(){
    console.log(list.textContent)
    list.removeChild(lister)
  }
  console.log()
});

let global = []

window.fetch('/api')
.then(result => result.json())
.then(data => {
	let keys = Object.keys(data);
	keys.forEach(val => {
		data[val].forEach(value => {
			let option = document.getElementById(`${val}-choices`);
			let newNode = document.createElement("option");
			newNode.text = value.name;
			option.add(newNode);
		})
	})
})
