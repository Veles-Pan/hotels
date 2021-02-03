
let button = document.querySelector('.header__popup-button');

let popupMenu = document.querySelector('.header__popup-menu');

let buttonFilter = document.querySelector('.filters__show-button');

let filter = document.querySelector('.filters');

let guestsField = document.querySelector('.intro__guest-number');

let Field = document.querySelector('.popup__selector')

function showPopup () {
    popupMenu.classList.toggle('header__popup-menu_active')
}

function showFilters () {
    filter.classList.toggle('filters_active')
}

function showField () {
    Field.classList.toggle('popup__selector_active')
}

button.addEventListener('click', showPopup); 

buttonFilter.addEventListener('click', showFilters); 

guestsField.addEventListener('focus', showField);