var btn = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var url = "https://api.funtranslations.com/translate/ferb-latin.json?text=";
btn.addEventListener("click", clickHandler);

function getTranslation(text) {
	return url + text;
}
function errorHandler(error) {
	console.log(error);
	alert("Error: " + error);
}

function clickHandler() {
	fetch(getTranslation(txtInput.value))
		.then((response) => response.json())
		.then((json) => {
			txtOutput.innerHTML = json.contents.translated;
		})
		.catch(errorHandler);
}
