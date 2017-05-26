var closeIcon = document.getElementById('close-icon');
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
	setTimeout(closePopup, 2000);
}

function closePopup() {
	popupContainer.classList.add("-hidden");
}