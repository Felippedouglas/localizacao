function renderizarMapa(latitude, longitude) {
  var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([longitude, latitude]),
    zoom: 15
  })
  });
  }

  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
          document.querySelector('p').innerHTML = "latitude = " + position.coords.latitude + "<br>" + " longitude = " + position.coords.longitude;
          renderizarMapa(position.coords.latitude, position.coords.longitude)
   })
}
