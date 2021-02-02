let button = document.querySelector('.header__popup-menu')

let popupMenu = document.querySelector('.menu')

function showPopup () {
    popupMenu.classList.toggle('menu_active')
}

button.addEventListener('click', showPopup); 