var login = document.querySelector('body');
var closeBtn = document.querySelector('.close-btn');
var loginForm = document.querySelector('.login-form');
var userNavigationBtn = document.querySelector('.user-navigation-btn');


document.querySelector('body').onclick = function(){
	login.classList.add('login-form.bg');
}
document.querySelector('.close-btn').onclick = function(){
	loginForm.classList.remove('show');
}
document.querySelector('.user-navigation-btn').onclick = function(){
	loginForm.classList.add('show');
}
