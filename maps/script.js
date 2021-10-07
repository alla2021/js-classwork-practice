function initMap() {
  const coordinates = {
    lat: 49.659774441117634,
    lng: 32.01388160816503
  };

  const map = new google.maps.Map(document.querySelector('#map'), {
    center: coordinates,
    zoom: 10
  })

  const marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    animation: google.maps.Animation.BOUNCE,
    icon: {
      url: 'marker.png',
      scaledSize: {
        width: 42,
        height: 42
      }
    }
  });
}
