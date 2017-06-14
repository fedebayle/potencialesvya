window.onload = function() {
  /*
  var bsAsButton = document.getElementById("bsasButton"),
      rosarioButton = document.getElementById("rosarioButton"),
      cordobaButton = document.getElementById("cordobaButton"),
      corrientesButton = document.getElementById("corrientesButton"),
      tucumanButton = document.getElementById("tucumanButton");
  */
  var capaSatelite = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmFjdW5kb2JheWxlIiwiYSI6ImNqMnpkNzR4ODAwNDIyd3BybHVxbXk3emEifQ.sVR0_Ckb1UjZ1OUTCaFPnw", {
      attribution: 'Imágenes de <a href="http://www.mapbox.com/">Mapbox</a>. Desarrollado por <a href="https://ar.linkedin.com/in/facundo-baylé-879076134" target="new">Facundo Baylé</a>',
  });

  var map = L.map('map', {
    center: [-34.614948, -58.439854], zoom: 11,
    layers: [capaSatelite]
  });


  var paletteColors = {
    'FIRST_COLOR': '#fef0d9',
    'SECOND_COLOR': '#fdcc8a',
    'THIRD_COLOR': '#fc8d59',
    'FOUR_COLOR': '#e34a33',
    'FIVE_COLOR': '#b30000'
  };

  /*
  function _registerEvents() {
    bsAsButton.addEventListener("click", centerLocalizationBuenosAires, false);
    rosarioButton.addEventListener("click", centerLocalizationRosario, false);
    cordobaButton.addEventListener("click", centerLocalizationCordoba, false);
    corrientesButton.addEventListener("click", centerLocalizationCorrientes, false);
    tucumanButton.addEventListener("click", centerLocalizationTucuman, false);
  }
  */

  var geoJsonLayer = new L.GeoJSON.AJAX("data.geojson", {
      style: function(feature) {
          if (feature.properties.prob >= 0 && feature.properties.prob <= 0.20) {
              return {color: paletteColors.FIRST_COLOR};
          } else if (feature.properties.prob >= 0.20 && feature.properties.prob <= 0.40) {
            return {color: paletteColors.SECOND_COLOR};
          } else if (feature.properties.prob >= 0.40 && feature.properties.prob <= 0.60) {
            return {color: paletteColors.THIRD_COLOR};
          } else if (feature.properties.prob >= 0.60 && feature.properties.prob <= 0.80) {
            return {color: paletteColors.FOUR_COLOR}; 
          } else if (feature.properties.prob >= 0.80 && feature.properties.prob <= 1) {
            return {color: paletteColors.FIVE_COLOR};
          }
      }
  }).addTo(map);

  var GooglePlacesSearchBox = L.Control.extend({
    onAdd: function() {
      var element = document.getElementById("searchBox");
      return element;
    }
  });

  (new GooglePlacesSearchBox).addTo(map);

  var input = document.getElementById("searchBox");
  input.setAttribute('placeholder', 'Buscar en el mapa');

  var searchBox = new google.maps.places.SearchBox(input);

  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    places.forEach(function(place) {

      var lat = place.geometry.location.lat(),
          lang = place.geometry.location.lng();

      map.setView(new L.LatLng(lat, lang), 11);
    });

  });

  /*
  (function (){
     _registerEvents();
  }());

  function centerLocalizationBuenosAires() {
    map.setView(new L.LatLng(-34.614948, -58.439854), 11);
  }

  function centerLocalizationRosario() {
    map.setView(new L.LatLng(-32.956605, -60.655932), 11);
  }

  function centerLocalizationCordoba() {
    map.setView(new L.LatLng(-31.407402, -64.189548), 11);
  }

  function centerLocalizationCorrientes() {
    map.setView(new L.LatLng(-27.480935, -58.876759), 11);
  }

  function centerLocalizationTucuman() {
    map.setView(new L.LatLng(-26.824953, -65.223455), 11);
  }
  */

}


