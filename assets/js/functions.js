var closeIcon = document.getElementById('close-icon'),
 	loaderMapa = document.getElementById('loader-mapa'),
 	loaderBotones = document.getElementById('loader-botones'),
 	verEnMapa = document.getElementById('verEnMapa'),
 	volver = document.getElementById('volver'),
 	popupContainer = document.getElementById('container-overlay'),
 	rosarioButton = document.getElementById('rosarioButton'),
 	cordobaButton = document.getElementById('cordobaButton'),
 	coresButton = document.getElementById('corrientesButton'),
 	tucumanButton = document.getElementById('tucumanButton'),
 	LOADER_ROSARIO_INSTANCE = null,
 	LOADER_CORDOBA_INSTANCE = null,
 	LOADER_CORES_INSTANCE = null,
 	LOADER_TUCUMAN_INSTANCE = null,
	LOADER_MAPA_INSTANCE = null;

(function (){
   _registerEvents();
}());

function _registerEvents() {
	closeIcon.addEventListener("click", closePopup, false);
	verEnMapa.addEventListener("click", verMapa, false);
	volver.addEventListener("click", volverInicio, false);
	/*
	rosarioButton.addEventListener("click", showLoaderButtonRosario, false);
	cordobaButton.addEventListener("click", showLoaderButtonCordoba, false);
	coresButton.addEventListener("click", showLoaderButtonCores, false);
	tucumanButton.addEventListener("click", showLoaderButtonTucuman, false);
	*/
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
/*
function showLoaderButtonRosario() {
	if (!LOADER_ROSARIO_INSTANCE) {
		showLoaderButton();
		LOADER_ROSARIO_INSTANCE = true;
		setTimeout(removeLoaderButton, 1000);
	}
}


function showLoaderButtonCordoba() {
	if (!LOADER_CORDOBA_INSTANCE) {
		showLoaderButton();
		LOADER_CORDOBA_INSTANCE = true;
		setTimeout(removeLoaderButton, 1000);
	}
}


function showLoaderButtonCores() {
	if (!LOADER_CORES_INSTANCE) {
		showLoaderButton();
		LOADER_CORES_INSTANCE = true;
		setTimeout(removeLoaderButton, 1000);
	}	
}


function showLoaderButtonTucuman() {
	if (!LOADER_TUCUMAN_INSTANCE) {
		showLoaderButton();
		LOADER_TUCUMAN_INSTANCE = true;
		setTimeout(removeLoaderButton, 1000);
	}	
}
*/
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