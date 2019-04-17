Dropzone.autoDiscover = false;
$(document).ready(function() {
	var myDropzone = new Dropzone("div#uploadArea", {
		url: 'https://rihal.herokuapp.com/alpha/ocr/file',
		success: function(status, res) {
			//console.log(res)
			process(res)
		},
		acceptedFiles: ".jpeg,.jpg,.png",
	});
});

//var data = "28/12/2012 year is the date of birth of my cat, the cat's name is Clowy it is 7 years old now. We got the cat from Muscat, and it had a collar with a serial number of 100-222-222-111 The other cat's name is Sharen it is 5 years old, we found her from Bahla, We had a lot of cats come by this is a list of all serial numbers of the cat's we found 123-557-546-111 225-546-748-565 645-485-597-597 595-428-458-526 125-544-545-662 With the ages of 8 years old. 6 years old. 9 years old 2.5 years old 4 Years old 9 years old Will get a new cat from Chicago on 2/02/2019";
//process(data);

function process(data) {
	// find dates
	var solution = $('<div> </div>');
	$('#solve').append(solution);

	var date_regex = /\d{1,2}[\/\\-]\d{1,2}[\/\\-]\d{2,4}/g;
	var dates = data.match(date_regex);
	// convert dates using array map
	// usage of moment.js here is to introduce moment.js, however
	// simpler array swap would have fulfilled requirements.
	dates = dates.map(function(date) {
		return moment(date, 'DD/MM/YYYY').format('MM/DD/YYYY');
	})
	data = data.replace(date_regex, '');
	draw(solution, dates, 'Found dates: ')
	console.log(dates);

	// serials
	var serials_regex = /\d{3,}-\d{3,}-\d{3,}-\d{3,}/g;
	var serials = data.match(serials_regex);
	serials = serials.map(function(val) {
		return '('+val.split('-').join(', ')+')';
	})
	data = data.replace(serials_regex, '');
	draw(solution, serials, 'Found serials: ')
	console.log(serials);

	// ages
	var age_regex = /[0-9]*[.0-9]+ [yY]ears? old/g;
	var ages = data.match(age_regex);
	data = data.replace(age_regex, '');
	draw(solution, ages, 'Found ages: ')
	console.log(ages);

	// cat names
	var cat_regex = /cat'?s? name is [A-Za-z]*/g;
	var cats = data.match(cat_regex);
	data = data.replace(cat_regex, '');
	draw(solution, cats, 'Found cat names: ')
	console.log(cats);

	// city names, start with capital (assumption),
	// we can look for non capital words also;
	var city_regex = /[A-Z][a-z]*/g;

	var cities = data.match(city_regex);
	var cities_api = [];
	var container = draw(solution, cities_api, 'Found cities')
	cities.map(function(val) {
		$.get(`https://rihal.herokuapp.com/isCity?name=${val}`, function(data) {
			if (data) {
				cities_api.push(val);
				container.append(`<div> ${val} </div>`)
			}
		});
	})
	data = data.replace(city_regex, '');
	console.log(cities);
	solution.append('<div style="clear:both;"> </div>')
}

function draw(parelem, data, title) {
	var container = $('<div class="column"> </div>');
	container.html(title + '<br> <br>' + data.join('<br>'))
	parelem.append(container);
	return container;
}