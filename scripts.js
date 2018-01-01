
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var urlCapitalCity = 'https://restcountries.eu/rest/v2/capital/';
var capitalsList = $('#capitals');

$('#search').click(searchCountries);


function searchCountries() {
	var countryName= $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
  countriesList.empty();
	  resp.forEach(function(item){
	   	$('<li>').text(item.name).appendTo(countriesList);
	});
}

function searchCapitals() {
	$.ajax({
		url: urlCapitalCity,
		method: 'GET',
		success: showCapitalsList
	});
}

function showCapitalsList(resp) {
	capitalsList.empty();
		resp.forEach(function(item){
	   		$('<li>').text(item.name).appendTo(capitalsList);
		});
	}



