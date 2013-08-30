$(function() {

	  mapKoeln = new google.maps.Map(document.getElementById('map-koeln'), {
		  zoom: 16,
	    center: new google.maps.LatLng(50.92220965993466, 6.96285226387031),
	    mapTypeId: google.maps.MapTypeId.ROADMAP,
	    disableDefaultUI: true,
	    draggable: false,
	   	scrollwheel: false
	  });

    var marker_koeln = new google.maps.Marker({
      position: new google.maps.LatLng(50.92220965993466, 6.96285226387031),
      map: mapKoeln,
      title: 'Wahllokal'
    });

	  mapGermany = new google.maps.Map(document.getElementById('map-germany'), {
		  zoom: 10,
	    center: new google.maps.LatLng(50.92220965993466, 6.96285226387031),
	    mapTypeId: google.maps.MapTypeId.ROADMAP,
	    disableDefaultUI: true,
	    draggable: false,
	   	scrollwheel: false
	  });

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(50.92220965993466, 6.96285226387031),
      map: mapGermany,
      title: 'Wahllokal'
    });

});


