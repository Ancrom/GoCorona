let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu__list');

burger.onclick = function() {
	menu.classList.toggle('--is-active');
}