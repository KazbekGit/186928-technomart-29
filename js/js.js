// Спасибо за рекомендацию использовать data- это очень крутой механизм )) Я впечатлен!
let btns = document.querySelectorAll("[data-modal]");

btns.forEach(element => {
    element.onclick = function (event) {
        event.preventDefault();
        event.stopPropagation();

        const type = event.target.dataset.modal;
        const modalTypes = document.querySelectorAll("[data-modal-type='" + type + "']");

        modalTypes.forEach(element => {
            element.classList.toggle("visually-hidden");
        });

    };

});

// На главной странице есть элементы, которых нет на внутренней странице 
// (например, модальные окна Карта и форма связи), // поэтому, когда JS исполняется на внутренней, 
// то не находит соответствующих выдает ошибки. Я не нашел иного выхода, как обернуть весь код в условие. 
if (document.querySelector('index-page')) {
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
}
