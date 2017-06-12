var closeIcon = document.getElementById('close-icon'),
 	loaderMapa = document.getElementById('loader-mapa'),
 	verEnMapa = document.getElementById('verEnMapa'),
 	volver = document.getElementById('volver'),
 	popupContainer = document.getElementById('container-overlay'),
 	LOADER_MAPA_INSTANCE = null;

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

	loadCloseIcon();
}

function verMapa() {
	if (!LOADER_MAPA_INSTANCE) {
		showLoaderMapa();
		LOADER_MAPA_INSTANCE = true;
		setTimeout(closePopup, 2000);
	} else {
		closePopup();
	}
}

function closePopup() {
	removeLoaderMapa()
	popupContainer.classList.add("-hidden");
}

function showLoaderMapa() {
	loaderMapa.classList.add("-show");
}

function removeLoaderMapa() {
	loaderMapa.classList.remove("-show");
}

function showLoaderButton() {
	loaderBotones.classList.add("-show-loader");
}

function removeLoaderButton() {
	loaderBotones.classList.remove("-show-loader");
}

function loadCloseIcon() {
	if(LOADER_MAPA_INSTANCE) {
		closeIcon.classList.add("-show-close-icon");
	}
}