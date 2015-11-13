(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1hcGJveGdsLmFjY2Vzc1Rva2VuID0gXCJway5leUoxSWpvaVpHTnNZWEpySWl3aVlTSTZJa05ZZDAxdlJ6Z2lmUS5FQmdYTTBKUmVibFpKWEprZ2NnaUVBXCI7XG5cbnZhciBtYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgY29udGFpbmVyOiAnanMtbWFwJyxcbiAgc3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvbWFwYm94L2RhcmstdjgnLFxuICBjZW50ZXI6IFstOTcsIDM1XSxcbiAgem9vbTogMlxufSk7XG5cbm1hcC5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICBtYXAuYWRkU291cmNlKCdzd2FybScsIHtcbiAgICBcInR5cGVcIjogXCJyYXN0ZXJcIixcbiAgICBcInVybFwiOiBcIi4vdGlsZXN3YXJtLmpzb25cIixcbiAgICBcInRpbGVTaXplXCI6IDI1NixcbiAgfSk7XG5cbiAgbWFwLmFkZExheWVyKHtcbiAgICBcImlkXCI6IFwic3dhcm1cIixcbiAgICBcInR5cGVcIjogXCJyYXN0ZXJcIixcbiAgICBcInNvdXJjZVwiOiBcInN3YXJtXCIsXG4gICAgXCJtaW56b29tXCI6IDEsXG4gICAgXCJtYXh6b29tXCI6IDMsXG4gICAgXCJsYXlvdXRcIjoge1xuXG4gICAgfSxcbiAgICBcInBhaW50XCI6IHtcbiAgICAgIFwicmFzdGVyLW9wYWNpdHlcIjogMVxuICAgIH1cbiAgfSk7XG59KTtcbiJdfQ==
