var mymap = L.map('mapid').setView([48.866667, 2.333333], 12);
var layerGroup = L.layerGroup().addTo(mymap);





var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(mymap);

var OpenRailwayMap = L.tileLayer('https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(mymap);



var marker = L.marker([48.866667, 2.333333], {
  markerUrl: 'http://leafletjs.com/docs/images/leaf-green.png',
  shadowUrl: 'leaf-shadow.png',
})


var circle = L.circle([48.84527837954024, 2.2616395023845515], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 500
})

var polygon = L.polygon([
    [48.866667, 2.333333],
    [48.84527837954024, 2.2616395023845515],
    [48.86564638918743, 2.3212051391601562]
])

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");



async function getData(query) {
  if(query==undefined){
    query = " ";
  }

    let url =
      "https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=" + query + "&facet=category&facet=tags&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type";
    let response = await fetch(url);
  
    let data = await response.json();

    layerGroup.clearLayers();

    data.records.forEach(function(event) {
      // le titre de l'événement
      let title = event.fields.title;
      //l'adresse de l'évènement
      let rue = event.fields.address_street;
      let ville = event.fields.address_city;
      let code_postale = event.fields.address_zipcode;
      let date = event.fields.date_start;
      let contact = event.fields.contact_name;
      let image = event.fields.cover_url;

      
      // on vérifie que l'événement a bien le champs 'lat_lon'
      if(event.fields.lat_lon) {
  
        // si oui, on ajoute le marqueur
        
        // julien : ce code est bien, tu ajoute le marqueur à la carte
     
        // si oui, on ajoute le marqueur
        marker = L.marker(event.fields.lat_lon)
        marker.bindPopup( "<div class='evenTitle'>" + title + "</div> "+ "<br> "+  ville  +"<br> "+ code_postale +"<br> "+ rue +"<br> "+ contact +"<br> "+ date +"<br> "+ image)
        .addTo(layerGroup);


        // la latitude
        let latitude = event.fields.lat_lon[0];
        // la longitude
        let longitude = event.fields.lat_lon[1];
    
            // pour tester, on les affiche dans la console
            console.log(title + " " + latitude + " " + longitude)
                 
      }
  
    });
  }
  getData();

  function onFormSubmit(event){
    event.preventDefault();
    console.log(searchInput.value);
    let query = searchInput.value;

    getData(searchInput.value)
   // if(query == searchInput.value)
    //"https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&facet=category&facet=tags&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type" + query;
    //alert('coucou');

    //getData(searchInput.value);
    //si get data(query) n'est pas vide, insérer la valeur dans le texte (url)
    //console.log(category);
  }


  

  document.getElementById('change').addEventListener('click', function() {
    // Fly to a random location by offsetting the point -74.50, 40
    // by up to 5 degrees.
 
    var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(mymap);
    var OpenRailwayMap = L.tileLayer('https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(mymap);
  });


    document.getElementById('change2').addEventListener('click', function() {
      // Fly to a random location by offsetting the point -74.50, 40
      // by up to 5 degrees.
      var Stadia_Outdoors = L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      }).addTo(mymap);
      var OpenRailwayMap = L.tileLayer('https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(mymap);
    });

    //changer la classe css bottom mode sombre/clair