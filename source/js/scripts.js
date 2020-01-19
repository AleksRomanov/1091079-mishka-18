function initMap() {

  var coordX = 59.938836;
  var coordY = 30.323035;
  var markerWidth = 67;
  var markerHeight = 100;
  var zoomScale = 16.0;
  var markerX = 59.938836;
  var markerY = 30.323035;


  var coordinates = {lat: coordX, lng: coordY};
  var coordinatesMarker = {lat: markerX, lng: markerY};

  var map = new google.maps.Map(
    document.getElementById('map'), {zoom: zoomScale, center: coordinates, disableDefaultUI: true});


  new google.maps.Marker({
    position: coordinatesMarker,
    map: map,
    icon: {
      url: "img/icon-map-pin.svg",
      scaledSize: new google.maps.Size(markerWidth, markerHeight)
    }
  });
}

var navMain = document.querySelector(".page-header");
var navToggle = document.querySelector(".page-header__toggle");

navMain.classList.remove("page-header--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("page-header--closed")) {
    navMain.classList.remove("page-header--closed");
    navMain.classList.add("page-header--opened");
  } else {
    navMain.classList.add("page-header--closed");
    navMain.classList.remove("page-header--opened");
  }
});

var link = document.querySelector(".best-product__button");
var popup = document.querySelector(".popup");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector(".modal-form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var letter = popup.querySelector("[name=letter]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
    }
  }
});

var isClickOutside = function (evt, cssSelector) {
  var target = evt.target;
  var element = target.closest(cssSelector);
  return !element;
};

var onSuccessWindowOutsideCLick = function (evt) {
  if (isClickOutside(evt, '.popup__cart-wrapper')) {
    popup.classList.remove("popup-show");
  }
};

popup.addEventListener('click', onSuccessWindowOutsideCLick);
