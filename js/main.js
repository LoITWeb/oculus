'use strict'

const tabItem = document.querySelectorAll('.tabs__btn-item'); // поиск в html
const tabContent = document.querySelectorAll('.tabs__content-item'); // поиск в html

tabItem.forEach(function (element) { // события при клике
	element.addEventListener('click', open); // события при клике
});

function open(evt) {
	const tabTarget = evt.currentTarget; // логика
	const button = tabTarget.dataset.button;

	tabItem.forEach(function (item) { // пробегаемся
		item.classList.remove('tabs__btn-item--active'); // убираем
	});

	tabContent.forEach(function (item) { // пробегаемся
		item.classList.remove('tabs__content-item--active'); // убираем
	});

	tabTarget.classList.add('tabs__btn-item--active'); // добавили
	document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu--active');
});