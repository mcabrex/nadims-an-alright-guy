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