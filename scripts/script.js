$(document).ready(function() {
	$(".container").append('<table class="table"></table>');
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
	createGrid(16);
	$('.size').on('click', function() {
		var gridSize = parseInt(prompt("What size box do you want?", "16"));
		if(gridSize === parseInt(gridSize, 10)) {
			createGrid(gridSize);
		} else {
			alert("That is not an acceptable value!");
		}
	});
	$('.clear').on('click', function() {
		$('td').css("background-color", "rgb(255, 255, 255)");
	});
	function activateHover() {
		$('td').on('mouseover', function() {
			var r = Math.floor(Math.random() * 256);
			var g = Math.floor(Math.random() * 256);
			var b = Math.floor(Math.random() * 256);
			$(this).css("background-color", "rgb(" + r + "," + g + "," + b + ")");
		});
	}
});
