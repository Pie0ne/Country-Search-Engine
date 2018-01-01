
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var capitalsList = $('#capitals');
var populationList = $('#population');
var languageList = $('#language');
var landAreaList = $('#land-area');


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
	   	$('<li>').text(item.capital).appendTo(capitalsList);
	   	$('<li>').text(item.population).appendTo(populationList);
	   	$('<li>').text(item.languages).appendTo(languageList);
	   	$('<li>').text(item.area).appendTo(landAreaList);
	});
}



