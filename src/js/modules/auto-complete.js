import autoComplete from "@tarekraafat/autocomplete.js";
import countryList from "./../helpers/countryList";

function autoCountryComplete () {
	const autoCompleteJS = new autoComplete({
		selector: "#autoCompleteCountry",
		placeHolder: "e.g Bali, Indonesia",
		data: {
			src: countryList
		},
		resultItem: {
			highlight: true,
		},
		events: {
			input: {
				selection: (event) => {
					const selection = event.detail.selection.value;
					autoCompleteJS.input.value = selection;
				}
			}
		},
		resultsList: {
			maxResults: 10
		},
		searchEngine: 'strict', //буквы из запроса должны идти строго подряд в результате
	});
}

export default autoCountryComplete;