function initMap() {
    var o = {
        lat: 59.93945,
        lng: 30.3295
    }
        , e = {
        lat: 59.93877,
        lng: 30.32318
    }
        , t = new google.maps.Map(document.getElementById("map"),{
        zoom: 16,
        center: o,
        disableDefaultUI: !0
    });
    new google.maps.Marker({
        position: e,
        map: t,
        icon: {
            url: "img/icon/pin.svg",
            scaledSize: new google.maps.Size(80,140)
        }
    })
}
