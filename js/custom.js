$("#info-icon-1").mouseenter(function(){
	$("#info-box-1").css("display", "inline");
});

$("#info-icon-1").mouseleave(function(){
	$("#info-box-1").css("display", "none");
});

$("#info-icon-2").mouseenter(function(){
	$("#info-box-2").css("display", "inline");
});

$("#info-icon-2").mouseleave(function(){
	$("#info-box-2").css("display", "none");
});

var frontend = {
	changeBtnText: function(){
		/*
		 * Changes the text content of the button
		 * to the first letter of the dropdown clicked.
		 */
		var myText = $(".dropdown-menu li:hover").text();
		var myLetter = myText.substring(0,1)

		$(".btn-group.open > button").text(myLetter);

		frontend.changeBtnClass(myLetter);
	},
	changeBtnClass: function (letter) {
		/*
		 * Changes the bootstrap class of the button
		 * according to the selected letter.
		 */
		var btn = $(".btn-group.open > button");
		
		// removes the old bootstrap class from the button
		btn.removeClass("btn-default");
		btn.removeClass("btn-warning");
		btn.removeClass("btn-primary");
		btn.removeClass("btn-success");
		btn.removeClass("btn-danger");

		// adds the new bootstrap class to the button
		if (letter == "H"){
			btn.addClass("btn-danger");
		} else if (letter == "S") {
			btn.addClass("btn-warning");
		} else if (letter == "D") {
			btn.addClass("btn-primary");
		} else if (letter == "P") {
			btn.addClass("btn-success");
		}
	}
}