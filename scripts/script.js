$(document).ready(function() {

	// Adds the initial Table to the Container
	$(".container").append('<table class="table"></table>');

	// Creates a Function that can be called to create a Grid of size X by X
	function createGrid(x) {

		$(".container").find('.table').remove();
		$(".container").prepend('<table class="table"></table>');

		for(var i = 0; i < x; i++) {
			$(".table").append('<tr></tr>');
		}

		for(var j = 0; j < x; j++) {
			$("tr").append('<td></td>');
		}
		
		activateHover();
	}

	// Creates the Default Grid Size of 16 x 16
	createGrid(16);

	
	
	// Prompts for a new size Grid
	$('.size').on('click', function() {

		var gridSize = parseInt(prompt("What size box do you want?", "16"));

		if(gridSize === parseInt(gridSize, 10)) {
			createGrid(gridSize);
		} else {
			alert("That is not an acceptable value!");
		}

	});

	// Clears the current Grid
	$('.clear').on('click', function() {

		$('td').css("background-color", "rgb(255, 255, 255)");

	});


	// Creates a random RGB value and paints each pixel a different color
	function activateHover() {
		$('td').on('mouseover', function() {

			var r = Math.floor(Math.random() * 256);
			var g = Math.floor(Math.random() * 256);
			var b = Math.floor(Math.random() * 256);
			$(this).css("background-color", "rgb(" + r + "," + g + "," + b + ")");
		});
	}
	

});