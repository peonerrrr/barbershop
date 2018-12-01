var map = document.querySelector('.map');
var bgcolor = document.querySelector('.bg-color');
var closeBtn = document.querySelector('.close-btn');
var loginForm = document.querySelector('.login-form');
var userNavigationBtn = document.querySelector('.user-navigation-btn');


document.querySelector('html').onclick = function(){
	login.classList.add('login-form.bg');
}
document.querySelector('.close-btn').onclick = function(){
	loginForm.classList.remove('show');
	bgcolor.classList.add('visually-hidden');
}
document.querySelector('.user-navigation-btn').onclick = function(){
	loginForm.classList.add('show');
	bgcolor.classList.remove('visually-hidden');
}
document.querySelector('.bg-color').onclick = function(){
	loginForm.classList.remove('show');
	bgcolor.classList.add('visually-hidden');
}
