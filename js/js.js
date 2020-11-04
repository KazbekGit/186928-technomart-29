let modalUserData = document.getElementById('modal-userData');
let sendUserMessage = document.getElementById('send-user-message');
let sendUserMessageClose = document.getElementById('modal-userData-close');
let mapReference = document.getElementById('map-reference');

let smallMap = document.getElementById('small-map');
let modalBigMap = document.getElementById('big-map');
let modalBigMapClose = document.getElementById('modal-map-close');

let leftArrowOfSlider = document.getElementById('left-arrow');
let rightArrowOfSlider = document.getElementById('right-arrow');

let sliderTrack = document.getElementById('slider-track');
let sliderTrackTemp;

let buttonItems = document.getElementsByClassName('button-item');

let serviceListButtons = document.getElementsByClassName('service-list');
let caruselItem = document.getElementById('carusel-item-id');

let cartAddedModal = document.getElementById('cart-added-modal');
let cartAddedCatalog = document.getElementById('cart-added-catalog');
let checkout = document.getElementById('mcheckout');
let continueShopping = document.getElementById('continue-shopping');
let cartAddedClose = document.getElementById('added-cart-close');
let buyBtn = document.getElementsByClassName('buy-btn-link');
let buyBtnCatalog = document.getElementsByClassName('buy-btn-catalog');

sendUserMessage.onclick = function (event) {
    event.preventDefault();
    modalUserData.classList.toggle('visually-hidden');
}

sendUserMessageClose.onclick = function () {
    modalUserData.classList.toggle('visually-hidden');
}

smallMap.onclick = function (event) {
    event.preventDefault();
    modalBigMap.classList.toggle('visually-hidden');
}
modalBigMapClose.onclick = function () {
    modalBigMap.classList.toggle('visually-hidden');
}

leftArrowOfSlider.onclick = function (event) {
    event.preventDefault();
    sliderTrack.style.transform = "translateX(0px)";
    buttonItems[0].classList.add('button-current');
    buttonItems[1].classList.remove('button-current');
}

rightArrowOfSlider.onclick = function (event) {
    event.preventDefault();
    sliderTrack.style.transform = "translateX(-620px)";
    buttonItems[0].classList.remove('button-current');
    buttonItems[1].classList.add('button-current');
}

buttonItems[0].onclick = function (event) {
    sliderTrack.style.transform = "translateX(0px)";
    buttonItems[0].classList.add('button-current');
    buttonItems[1].classList.remove('button-current');
}

buttonItems[1].onclick = function (event) {
    sliderTrack.style.transform = "translateX(-620px)";
    buttonItems[0].classList.remove('button-current');
    buttonItems[1].classList.add('button-current');
}

buttonItems.onclick = function () {
    console.log(this);
} 

for (let i = 0; i < serviceListButtons.length; i++) {
    serviceListButtons[i].onclick = function () {
        let shiftY = 0;
        switch (i) {
            case 0: shiftY = caruselItem.offsetHeight / serviceListButtons.length * i;
                caruselItem.style.transform = 'translateY(' + -shiftY + 'px)';
                break;
            case 1: shiftY = caruselItem.offsetHeight / serviceListButtons.length * i;
                caruselItem.style.transform = 'translateY(' + -shiftY + 'px)';
                break;
            case 2: shiftY = caruselItem.offsetHeight / serviceListButtons.length * i;
                caruselItem.style.transform = 'translateY(' + -shiftY + 'px)';
                break;
        }
        for (let i = 0; i < serviceListButtons.length; i++) {
            if (serviceListButtons[i] === this) {
                this.classList.add('active-list-button');
                continue;
            }
            serviceListButtons[i].classList.remove('active-list-button');
        }

    }

}

for (let i = 0; i < buyBtn.length; i++) {
    buyBtn[i].onclick = function (event) {
        event.preventDefault();
        cartAddedModal.classList.remove('visually-hidden');
    }

}

for (let i = 0; i < buyBtnCatalog.length; i++) {
    buyBtnCatalog[i].onclick = function (event) {
        event.preventDefault();
        cartAddedCatalog.classList.remove('visually-hidden');
    }

}

continueShopping.onclick = function (event) {
    event.preventDefault();
    cartAddedModal.classList.add('visually-hidden');
}

cartAddedClose.onclick = function (event) {
    cartAddedModal.classList.add('visually-hidden');
}

continueShopping.onclick = function (event) {
    event.preventDefault();
    cartAddedCatalog.classList.add('visually-hidden');
}

cartAddedClose.onclick = function (event) {
    cartAddedCatalog.classList.add('visually-hidden');
}
