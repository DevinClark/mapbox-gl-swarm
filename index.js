window.mapboxgl = require('mapbox-gl');
mapboxgl.accessToken = "pk.eyJ1IjoiZGNsYXJrIiwiYSI6IkNYd01vRzgifQ.EBgXM0JReblZJXJkgcgiEA";

var map = new mapboxgl.Map({
  container: 'js-map',
  style: 'mapbox://styles/mapbox/dark-v8',
  center: [-97, 35],
  zoom: 2
});

map.on('load', function() {
  map.addSource('swarm', {
    "type": "raster",
    "url": "./tileswarm.json",
    "tileSize": 256,
  });

  map.addLayer({
    "id": "swarm",
    "type": "raster",
    "source": "swarm",
    "minzoom": 1,
    "maxzoom": 3,
    "layout": {

    },
    "paint": {
      "raster-opacity": 1
    }
  });
});
