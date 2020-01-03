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

var navMain = document.querySelector('.page-header__nav-wrapper');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('page-header__nav-wrapper--nojs');

navToggle.addEventListener('click', function () {
    if (navToggle.classList.contains('page-header__toggle--closed')) {
        navToggle.classList.remove('page-header__toggle--closed');
        // navToggle.classList.add('page-header__nav-wrapper--opened');
    } else {
        navToggle.classList.add('page-header__toggle--closed');
        // navToggle.classList.remove('page-header__nav-wrapper--opened');
    }
});

// navToggle.addEventListener('click', function () {
//     if (navMain.classList.contains('page-header__nav-wrapper--closed')) {
//         navMain.classList.remove('page-header__nav-wrapper--closed');
//         navMain.classList.add('page-header__nav-wrapper--opened');
//     } else {
//         navMain.classList.add('page-header__nav-wrapper--closed');
//         navMain.classList.remove('page-header__nav-wrapper--opened');
//     }
// });

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
