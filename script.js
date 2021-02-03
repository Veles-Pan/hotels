let page = document.querySelector('.root')

let button = document.querySelector('.header__popup-menu')

let popupMenu = document.querySelector('.menu')

let buttonFilter = document.querySelector('.show-filters__button')

let filter = document.querySelector('.filters')

function showPopup () {
    popupMenu.classList.toggle('menu_active')
}

function showFilters () {
    filter.classList.toggle('filters_active')
}

button.addEventListener('click', showPopup); 

buttonFilter.addEventListener('click', showFilters); 