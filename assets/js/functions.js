var closeIcon = document.getElementById('close-icon');
var loader = document.getElementById('loader');
var verEnMapa = document.getElementById('verEnMapa');
var volver = document.getElementById('volver');
var popupContainer = document.getElementById('container-overlay');

(function (){
   _registerEvents();
}());

function _registerEvents() {
	closeIcon.addEventListener("click", closePopup, false);
	verEnMapa.addEventListener("click", verMapa, false);
	volver.addEventListener("click", volverInicio, false);
};

function volverInicio() {
	popupContainer.classList.remove("-hidden");
}

function verMapa() {
	showLoader();
	setTimeout(closePopup, 2000);
}

function closePopup() {
	removeLoader()
	popupContainer.classList.add("-hidden");
}

function showLoader() {
	loader.classList.add("-show");
}

function removeLoader() {
	loader.classList.remove("-show");
}