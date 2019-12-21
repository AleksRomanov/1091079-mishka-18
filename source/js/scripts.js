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

var navMain = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('page-header--nojs');

navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('page-header--closed')) {
        navMain.classList.remove('page-header--closed');
        navMain.classList.add('page-header--opened');
    } else {
        navMain.classList.add('page-header--closed');
        navMain.classList.remove('page-header--opened');
    }
});
