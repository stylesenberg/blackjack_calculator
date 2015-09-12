// start simulation
$("#start-simulation").click(function(){

  assignNumberOfDecks();
  assignPositionOfCutcard();
  assignSimulationCount();
  createStrategyObject();

  simulateTheGame();
});

// global variables
var global = {};
global.numberOfDecks = null;
global.positionOfCutcard = null;

var simulation = {};
simulation.count = null;

var strategy = {};


function assignNumberOfDecks () {
	var nod = $("#number-of-decks option:selected");

	if (nod != null) {
		global.numberOfDecks = Number(nod.val());
	} else {
		alert("Please select the number of decks in the dealing box.");
	}
};

function assignPositionOfCutcard () {
	var poc = $("#position-of-cutcard option:selected");

	if (poc != null) {
		global.positionOfCutcard = Number(poc.val());
	} else {
		alert("Please select the position of the cutcard in the dealing box.");
	};
};

function assignSimulationCount () {
	var sic = $("#simulation-count option:selected");

	if (sic != null) {
		simulation.count = Number(sic.val());
	} else {
		alert("Please select the total number of simulations.");
	};
};

function createStrategyObject () {

	// HARD Object
	strategy.hard_5_2 = $("#hard_5_2").text();
	strategy.hard_5_3 = $("#hard_5_3").text();
	strategy.hard_5_4 = $("#hard_5_4").text();
	strategy.hard_5_5 = $("#hard_5_5").text();
	strategy.hard_5_6 = $("#hard_5_6").text();
	strategy.hard_5_7 = $("#hard_5_7").text();
	strategy.hard_5_8 = $("#hard_5_8").text();
	strategy.hard_5_9 = $("#hard_5_9").text();
	strategy.hard_5_T = $("#hard_5_T").text();
	strategy.hard_5_A = $("#hard_5_A").text();

	strategy.hard_6_2 = $("#hard_6_2").text();
	strategy.hard_6_3 = $("#hard_6_3").text();
	strategy.hard_6_4 = $("#hard_6_4").text();
	strategy.hard_6_5 = $("#hard_6_5").text();
	strategy.hard_6_6 = $("#hard_6_6").text();
	strategy.hard_6_7 = $("#hard_6_7").text();
	strategy.hard_6_8 = $("#hard_6_8").text();
	strategy.hard_6_9 = $("#hard_6_9").text();
	strategy.hard_6_T = $("#hard_6_T").text();
	strategy.hard_6_A = $("#hard_6_A").text();

	strategy.hard_7_2 = $("#hard_7_2").text();
	strategy.hard_7_3 = $("#hard_7_3").text();
	strategy.hard_7_4 = $("#hard_7_4").text();
	strategy.hard_7_5 = $("#hard_7_5").text();
	strategy.hard_7_6 = $("#hard_7_6").text();
	strategy.hard_7_7 = $("#hard_7_7").text();
	strategy.hard_7_8 = $("#hard_7_8").text();
	strategy.hard_7_9 = $("#hard_7_9").text();
	strategy.hard_7_T = $("#hard_7_T").text();
	strategy.hard_7_A = $("#hard_7_A").text();

	strategy.hard_8_2 = $("#hard_8_2").text();
	strategy.hard_8_3 = $("#hard_8_3").text();
	strategy.hard_8_4 = $("#hard_8_4").text();
	strategy.hard_8_5 = $("#hard_8_5").text();
	strategy.hard_8_6 = $("#hard_8_6").text();
	strategy.hard_8_7 = $("#hard_8_7").text();
	strategy.hard_8_8 = $("#hard_8_8").text();
	strategy.hard_8_9 = $("#hard_8_9").text();
	strategy.hard_8_T = $("#hard_8_T").text();
	strategy.hard_8_A = $("#hard_8_A").text();

	strategy.hard_9_2 = $("#hard_9_2").text();
	strategy.hard_9_3 = $("#hard_9_3").text();
	strategy.hard_9_4 = $("#hard_9_4").text();
	strategy.hard_9_5 = $("#hard_9_5").text();
	strategy.hard_9_6 = $("#hard_9_6").text();
	strategy.hard_9_7 = $("#hard_9_7").text();
	strategy.hard_9_8 = $("#hard_9_8").text();
	strategy.hard_9_9 = $("#hard_9_9").text();
	strategy.hard_9_T = $("#hard_9_T").text();
	strategy.hard_9_A = $("#hard_9_A").text();

	strategy.hard_10_2 = $("#hard_10_2").text();
	strategy.hard_10_3 = $("#hard_10_3").text();
	strategy.hard_10_4 = $("#hard_10_4").text();
	strategy.hard_10_5 = $("#hard_10_5").text();
	strategy.hard_10_6 = $("#hard_10_6").text();
	strategy.hard_10_7 = $("#hard_10_7").text();
	strategy.hard_10_8 = $("#hard_10_8").text();
	strategy.hard_10_9 = $("#hard_10_9").text();
	strategy.hard_10_T = $("#hard_10_T").text();
	strategy.hard_10_A = $("#hard_10_A").text();

	strategy.hard_11_2 = $("#hard_11_2").text();
	strategy.hard_11_3 = $("#hard_11_3").text();
	strategy.hard_11_4 = $("#hard_11_4").text();
	strategy.hard_11_5 = $("#hard_11_5").text();
	strategy.hard_11_6 = $("#hard_11_6").text();
	strategy.hard_11_7 = $("#hard_11_7").text();
	strategy.hard_11_8 = $("#hard_11_8").text();
	strategy.hard_11_9 = $("#hard_11_9").text();
	strategy.hard_11_T = $("#hard_11_T").text();
	strategy.hard_11_A = $("#hard_11_A").text();

	strategy.hard_12_2 = $("#hard_12_2").text();
	strategy.hard_12_3 = $("#hard_12_3").text();
	strategy.hard_12_4 = $("#hard_12_4").text();
	strategy.hard_12_5 = $("#hard_12_5").text();
	strategy.hard_12_6 = $("#hard_12_6").text();
	strategy.hard_12_7 = $("#hard_12_7").text();
	strategy.hard_12_8 = $("#hard_12_8").text();
	strategy.hard_12_9 = $("#hard_12_9").text();
	strategy.hard_12_T = $("#hard_12_T").text();
	strategy.hard_12_A = $("#hard_12_A").text();

	strategy.hard_13_2 = $("#hard_13_2").text();
	strategy.hard_13_3 = $("#hard_13_3").text();
	strategy.hard_13_4 = $("#hard_13_4").text();
	strategy.hard_13_5 = $("#hard_13_5").text();
	strategy.hard_13_6 = $("#hard_13_6").text();
	strategy.hard_13_7 = $("#hard_13_7").text();
	strategy.hard_13_8 = $("#hard_13_8").text();
	strategy.hard_13_9 = $("#hard_13_9").text();
	strategy.hard_13_T = $("#hard_13_T").text();
	strategy.hard_13_A = $("#hard_13_A").text();

	strategy.hard_14_2 = $("#hard_14_2").text();
	strategy.hard_14_3 = $("#hard_14_3").text();
	strategy.hard_14_4 = $("#hard_14_4").text();
	strategy.hard_14_5 = $("#hard_14_5").text();
	strategy.hard_14_6 = $("#hard_14_6").text();
	strategy.hard_14_7 = $("#hard_14_7").text();
	strategy.hard_14_8 = $("#hard_14_8").text();
	strategy.hard_14_9 = $("#hard_14_9").text();
	strategy.hard_14_T = $("#hard_14_T").text();
	strategy.hard_14_A = $("#hard_14_A").text();

	strategy.hard_15_2 = $("#hard_15_2").text();
	strategy.hard_15_3 = $("#hard_15_3").text();
	strategy.hard_15_4 = $("#hard_15_4").text();
	strategy.hard_15_5 = $("#hard_15_5").text();
	strategy.hard_15_6 = $("#hard_15_6").text();
	strategy.hard_15_7 = $("#hard_15_7").text();
	strategy.hard_15_8 = $("#hard_15_8").text();
	strategy.hard_15_9 = $("#hard_15_9").text();
	strategy.hard_15_T = $("#hard_15_T").text();
	strategy.hard_15_A = $("#hard_15_A").text();

	strategy.hard_16_2 = $("#hard_16_2").text();
	strategy.hard_16_3 = $("#hard_16_3").text();
	strategy.hard_16_4 = $("#hard_16_4").text();
	strategy.hard_16_5 = $("#hard_16_5").text();
	strategy.hard_16_6 = $("#hard_16_6").text();
	strategy.hard_16_7 = $("#hard_16_7").text();
	strategy.hard_16_8 = $("#hard_16_8").text();
	strategy.hard_16_9 = $("#hard_16_9").text();
	strategy.hard_16_T = $("#hard_16_T").text();
	strategy.hard_16_A = $("#hard_16_A").text();

	strategy.hard_17_2 = $("#hard_17_2").text();
	strategy.hard_17_3 = $("#hard_17_3").text();
	strategy.hard_17_4 = $("#hard_17_4").text();
	strategy.hard_17_5 = $("#hard_17_5").text();
	strategy.hard_17_6 = $("#hard_17_6").text();
	strategy.hard_17_7 = $("#hard_17_7").text();
	strategy.hard_17_8 = $("#hard_17_8").text();
	strategy.hard_17_9 = $("#hard_17_9").text();
	strategy.hard_17_T = $("#hard_17_T").text();
	strategy.hard_17_A = $("#hard_17_A").text();

	strategy.hard_18_2 = $("#hard_18_2").text();
	strategy.hard_18_3 = $("#hard_18_3").text();
	strategy.hard_18_4 = $("#hard_18_4").text();
	strategy.hard_18_5 = $("#hard_18_5").text();
	strategy.hard_18_6 = $("#hard_18_6").text();
	strategy.hard_18_7 = $("#hard_18_7").text();
	strategy.hard_18_8 = $("#hard_18_8").text();
	strategy.hard_18_9 = $("#hard_18_9").text();
	strategy.hard_18_T = $("#hard_18_T").text();
	strategy.hard_18_A = $("#hard_18_A").text();

	strategy.hard_19_2 = $("#hard_19_2").text();
	strategy.hard_19_3 = $("#hard_19_3").text();
	strategy.hard_19_4 = $("#hard_19_4").text();
	strategy.hard_19_5 = $("#hard_19_5").text();
	strategy.hard_19_6 = $("#hard_19_6").text();
	strategy.hard_19_7 = $("#hard_19_7").text();
	strategy.hard_19_8 = $("#hard_19_8").text();
	strategy.hard_19_9 = $("#hard_19_9").text();
	strategy.hard_19_T = $("#hard_19_T").text();
	strategy.hard_19_A = $("#hard_19_A").text();

	strategy.hard_20_2 = $("#hard_20_2").text();
	strategy.hard_20_3 = $("#hard_20_3").text();
	strategy.hard_20_4 = $("#hard_20_4").text();
	strategy.hard_20_5 = $("#hard_20_5").text();
	strategy.hard_20_6 = $("#hard_20_6").text();
	strategy.hard_20_7 = $("#hard_20_7").text();
	strategy.hard_20_8 = $("#hard_20_8").text();
	strategy.hard_20_9 = $("#hard_20_9").text();
	strategy.hard_20_T = $("#hard_20_T").text();
	strategy.hard_20_A = $("#hard_20_A").text();

	strategy.hard_21_2 = $("#hard_21_2").text();
	strategy.hard_21_3 = $("#hard_21_3").text();
	strategy.hard_21_4 = $("#hard_21_4").text();
	strategy.hard_21_5 = $("#hard_21_5").text();
	strategy.hard_21_6 = $("#hard_21_6").text();
	strategy.hard_21_7 = $("#hard_21_7").text();
	strategy.hard_21_8 = $("#hard_21_8").text();
	strategy.hard_21_9 = $("#hard_21_9").text();
	strategy.hard_21_T = $("#hard_21_T").text();
	strategy.hard_21_A = $("#hard_21_A").text();


	// SOFT Object
	strategy.soft_13_2 = $("#soft_13_2").text();
	strategy.soft_13_3 = $("#soft_13_3").text();
	strategy.soft_13_4 = $("#soft_13_4").text();
	strategy.soft_13_5 = $("#soft_13_5").text();
	strategy.soft_13_6 = $("#soft_13_6").text();
	strategy.soft_13_7 = $("#soft_13_7").text();
	strategy.soft_13_8 = $("#soft_13_8").text();
	strategy.soft_13_9 = $("#soft_13_9").text();
	strategy.soft_13_T = $("#soft_13_T").text();
	strategy.soft_13_A = $("#soft_13_A").text();

	strategy.soft_14_2 = $("#soft_14_2").text();
	strategy.soft_14_3 = $("#soft_14_3").text();
	strategy.soft_14_4 = $("#soft_14_4").text();
	strategy.soft_14_5 = $("#soft_14_5").text();
	strategy.soft_14_6 = $("#soft_14_6").text();
	strategy.soft_14_7 = $("#soft_14_7").text();
	strategy.soft_14_8 = $("#soft_14_8").text();
	strategy.soft_14_9 = $("#soft_14_9").text();
	strategy.soft_14_T = $("#soft_14_T").text();
	strategy.soft_14_A = $("#soft_14_A").text();

	strategy.soft_15_2 = $("#soft_15_2").text();
	strategy.soft_15_3 = $("#soft_15_3").text();
	strategy.soft_15_4 = $("#soft_15_4").text();
	strategy.soft_15_5 = $("#soft_15_5").text();
	strategy.soft_15_6 = $("#soft_15_6").text();
	strategy.soft_15_7 = $("#soft_15_7").text();
	strategy.soft_15_8 = $("#soft_15_8").text();
	strategy.soft_15_9 = $("#soft_15_9").text();
	strategy.soft_15_T = $("#soft_15_T").text();
	strategy.soft_15_A = $("#soft_15_A").text();

	strategy.soft_16_2 = $("#soft_16_2").text();
	strategy.soft_16_3 = $("#soft_16_3").text();
	strategy.soft_16_4 = $("#soft_16_4").text();
	strategy.soft_16_5 = $("#soft_16_5").text();
	strategy.soft_16_6 = $("#soft_16_6").text();
	strategy.soft_16_7 = $("#soft_16_7").text();
	strategy.soft_16_8 = $("#soft_16_8").text();
	strategy.soft_16_9 = $("#soft_16_9").text();
	strategy.soft_16_T = $("#soft_16_T").text();
	strategy.soft_16_A = $("#soft_16_A").text();

	strategy.soft_17_2 = $("#soft_17_2").text();
	strategy.soft_17_3 = $("#soft_17_3").text();
	strategy.soft_17_4 = $("#soft_17_4").text();
	strategy.soft_17_5 = $("#soft_17_5").text();
	strategy.soft_17_6 = $("#soft_17_6").text();
	strategy.soft_17_7 = $("#soft_17_7").text();
	strategy.soft_17_8 = $("#soft_17_8").text();
	strategy.soft_17_9 = $("#soft_17_9").text();
	strategy.soft_17_T = $("#soft_17_T").text();
	strategy.soft_17_A = $("#soft_17_A").text();

	strategy.soft_18_2 = $("#soft_18_2").text();
	strategy.soft_18_3 = $("#soft_18_3").text();
	strategy.soft_18_4 = $("#soft_18_4").text();
	strategy.soft_18_5 = $("#soft_18_5").text();
	strategy.soft_18_6 = $("#soft_18_6").text();
	strategy.soft_18_7 = $("#soft_18_7").text();
	strategy.soft_18_8 = $("#soft_18_8").text();
	strategy.soft_18_9 = $("#soft_18_9").text();
	strategy.soft_18_T = $("#soft_18_T").text();
	strategy.soft_18_A = $("#soft_18_A").text();

	strategy.soft_19_2 = $("#soft_19_2").text();
	strategy.soft_19_3 = $("#soft_19_3").text();
	strategy.soft_19_4 = $("#soft_19_4").text();
	strategy.soft_19_5 = $("#soft_19_5").text();
	strategy.soft_19_6 = $("#soft_19_6").text();
	strategy.soft_19_7 = $("#soft_19_7").text();
	strategy.soft_19_8 = $("#soft_19_8").text();
	strategy.soft_19_9 = $("#soft_19_9").text();
	strategy.soft_19_T = $("#soft_19_T").text();
	strategy.soft_19_A = $("#soft_19_A").text();

	strategy.soft_20_2 = $("#soft_20_2").text();
	strategy.soft_20_3 = $("#soft_20_3").text();
	strategy.soft_20_4 = $("#soft_20_4").text();
	strategy.soft_20_5 = $("#soft_20_5").text();
	strategy.soft_20_6 = $("#soft_20_6").text();
	strategy.soft_20_7 = $("#soft_20_7").text();
	strategy.soft_20_8 = $("#soft_20_8").text();
	strategy.soft_20_9 = $("#soft_20_9").text();
	strategy.soft_20_T = $("#soft_20_T").text();
	strategy.soft_20_A = $("#soft_20_A").text();

	strategy.soft_21_2 = $("#soft_21_2").text();
	strategy.soft_21_3 = $("#soft_21_3").text();
	strategy.soft_21_4 = $("#soft_21_4").text();
	strategy.soft_21_5 = $("#soft_21_5").text();
	strategy.soft_21_6 = $("#soft_21_6").text();
	strategy.soft_21_7 = $("#soft_21_7").text();
	strategy.soft_21_8 = $("#soft_21_8").text();
	strategy.soft_21_9 = $("#soft_21_9").text();
	strategy.soft_21_T = $("#soft_21_T").text();
	strategy.soft_21_A = $("#soft_21_A").text();
};

// info boxes show & hide

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


// frontend methods

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
	},
	randomizeStrategySelection: function() {
		console.log("randomizeStrategySelection()");

		// HARD strategy
		$("#hard_5_2").text("H");
		$("#hard_5_3").text("H");
		$("#hard_5_4").text("H");
		$("#hard_5_5").text("H");
		$("#hard_5_6").text("H");
		$("#hard_5_7").text("H");
		$("#hard_5_8").text("H");
		$("#hard_5_9").text("H");
		$("#hard_5_T").text("H");
		$("#hard_5_A").text("H");

		$("#hard_6_2").text("H");
		$("#hard_6_3").text("H");
		$("#hard_6_4").text("H");
		$("#hard_6_5").text("H");
		$("#hard_6_6").text("H");
		$("#hard_6_7").text("H");
		$("#hard_6_8").text("H");
		$("#hard_6_9").text("H");
		$("#hard_6_T").text("H");
		$("#hard_6_A").text("H");

		$("#hard_7_2").text("H");
		$("#hard_7_3").text("H");
		$("#hard_7_4").text("H");
		$("#hard_7_5").text("H");
		$("#hard_7_6").text("H");
		$("#hard_7_7").text("H");
		$("#hard_7_8").text("H");
		$("#hard_7_9").text("H");
		$("#hard_7_T").text("H");
		$("#hard_7_A").text("H");

		$("#hard_8_2").text("H");
		$("#hard_8_3").text("H");
		$("#hard_8_4").text("H");
		$("#hard_8_5").text("H");
		$("#hard_8_6").text("H");
		$("#hard_8_7").text("H");
		$("#hard_8_8").text("H");
		$("#hard_8_9").text("H");
		$("#hard_8_T").text("H");
		$("#hard_8_A").text("H");

		$("#hard_9_2").text("H");
		$("#hard_9_3").text("H");
		$("#hard_9_4").text("H");
		$("#hard_9_5").text("H");
		$("#hard_9_6").text("H");
		$("#hard_9_7").text("H");
		$("#hard_9_8").text("H");
		$("#hard_9_9").text("H");
		$("#hard_9_T").text("H");
		$("#hard_9_A").text("H");

		$("#hard_10_2").text("H");
		$("#hard_10_3").text("H");
		$("#hard_10_4").text("H");
		$("#hard_10_5").text("H");
		$("#hard_10_6").text("H");
		$("#hard_10_7").text("H");
		$("#hard_10_8").text("H");
		$("#hard_10_9").text("H");
		$("#hard_10_T").text("H");
		$("#hard_10_A").text("H");

		$("#hard_11_2").text("H");
		$("#hard_11_3").text("H");
		$("#hard_11_4").text("H");
		$("#hard_11_5").text("H");
		$("#hard_11_6").text("H");
		$("#hard_11_7").text("H");
		$("#hard_11_8").text("H");
		$("#hard_11_9").text("H");
		$("#hard_11_T").text("H");
		$("#hard_11_A").text("H");

		$("#hard_12_2").text("H");
		$("#hard_12_3").text("H");
		$("#hard_12_4").text("S");
		$("#hard_12_5").text("S");
		$("#hard_12_6").text("S");
		$("#hard_12_7").text("H");
		$("#hard_12_8").text("H");
		$("#hard_12_9").text("H");
		$("#hard_12_T").text("H");
		$("#hard_12_A").text("H");

		$("#hard_13_2").text("S");
		$("#hard_13_3").text("S");
		$("#hard_13_4").text("S");
		$("#hard_13_5").text("S");
		$("#hard_13_6").text("S");
		$("#hard_13_7").text("H");
		$("#hard_13_8").text("H");
		$("#hard_13_9").text("H");
		$("#hard_13_T").text("H");
		$("#hard_13_A").text("H");

		$("#hard_14_2").text("S");
		$("#hard_14_3").text("S");
		$("#hard_14_4").text("S");
		$("#hard_14_5").text("S");
		$("#hard_14_6").text("S");
		$("#hard_14_7").text("H");
		$("#hard_14_8").text("H");
		$("#hard_14_9").text("H");
		$("#hard_14_T").text("H");
		$("#hard_14_A").text("H");

		$("#hard_15_2").text("S");
		$("#hard_15_3").text("S");
		$("#hard_15_4").text("S");
		$("#hard_15_5").text("S");
		$("#hard_15_6").text("S");
		$("#hard_15_7").text("H");
		$("#hard_15_8").text("H");
		$("#hard_15_9").text("H");
		$("#hard_15_T").text("H");
		$("#hard_15_A").text("H");

		$("#hard_16_2").text("S");
		$("#hard_16_3").text("S");
		$("#hard_16_4").text("S");
		$("#hard_16_5").text("S");
		$("#hard_16_6").text("S");
		$("#hard_16_7").text("H");
		$("#hard_16_8").text("H");
		$("#hard_16_9").text("H");
		$("#hard_16_T").text("H");
		$("#hard_16_A").text("H");

		$("#hard_17_2").text("S");
		$("#hard_17_3").text("S");
		$("#hard_17_4").text("S");
		$("#hard_17_5").text("S");
		$("#hard_17_6").text("S");
		$("#hard_17_7").text("S");
		$("#hard_17_8").text("S");
		$("#hard_17_9").text("S");
		$("#hard_17_T").text("S");
		$("#hard_17_A").text("S");

		$("#hard_18_2").text("S");
		$("#hard_18_3").text("S");
		$("#hard_18_4").text("S");
		$("#hard_18_5").text("S");
		$("#hard_18_6").text("S");
		$("#hard_18_7").text("S");
		$("#hard_18_8").text("S");
		$("#hard_18_9").text("S");
		$("#hard_18_T").text("S");
		$("#hard_18_A").text("S");

		$("#hard_19_2").text("S");
		$("#hard_19_3").text("S");
		$("#hard_19_4").text("S");
		$("#hard_19_5").text("S");
		$("#hard_19_6").text("S");
		$("#hard_19_7").text("S");
		$("#hard_19_8").text("S");
		$("#hard_19_9").text("S");
		$("#hard_19_T").text("S");
		$("#hard_19_A").text("S");

		$("#hard_20_2").text("S");
		$("#hard_20_3").text("S");
		$("#hard_20_4").text("S");
		$("#hard_20_5").text("S");
		$("#hard_20_6").text("S");
		$("#hard_20_7").text("S");
		$("#hard_20_8").text("S");
		$("#hard_20_9").text("S");
		$("#hard_20_T").text("S");
		$("#hard_20_A").text("S");

		$("#hard_21_2").text("S");
		$("#hard_21_3").text("S");
		$("#hard_21_4").text("S");
		$("#hard_21_5").text("S");
		$("#hard_21_6").text("S");
		$("#hard_21_7").text("S");
		$("#hard_21_8").text("S");
		$("#hard_21_9").text("S");
		$("#hard_21_T").text("S");
		$("#hard_21_A").text("S");


		// SOFT strategy
		$("#soft_13_2").text("H");
		$("#soft_13_3").text("H");
		$("#soft_13_4").text("H");
		$("#soft_13_5").text("H");
		$("#soft_13_6").text("H");
		$("#soft_13_7").text("H");
		$("#soft_13_8").text("H");
		$("#soft_13_9").text("H");
		$("#soft_13_T").text("H");
		$("#soft_13_A").text("H");

		$("#soft_14_2").text("H");
		$("#soft_14_3").text("H");
		$("#soft_14_4").text("H");
		$("#soft_14_5").text("H");
		$("#soft_14_6").text("H");
		$("#soft_14_7").text("H");
		$("#soft_14_8").text("H");
		$("#soft_14_9").text("H");
		$("#soft_14_T").text("H");
		$("#soft_14_A").text("H");

		$("#soft_15_2").text("H");
		$("#soft_15_3").text("H");
		$("#soft_15_4").text("H");
		$("#soft_15_5").text("H");
		$("#soft_15_6").text("H");
		$("#soft_15_7").text("H");
		$("#soft_15_8").text("H");
		$("#soft_15_9").text("H");
		$("#soft_15_T").text("H");
		$("#soft_15_A").text("H");

		$("#soft_16_2").text("H");
		$("#soft_16_3").text("H");
		$("#soft_16_4").text("H");
		$("#soft_16_5").text("H");
		$("#soft_16_6").text("H");
		$("#soft_16_7").text("H");
		$("#soft_16_8").text("H");
		$("#soft_16_9").text("H");
		$("#soft_16_T").text("H");
		$("#soft_16_A").text("H");

		$("#soft_17_2").text("H");
		$("#soft_17_3").text("H");
		$("#soft_17_4").text("H");
		$("#soft_17_5").text("H");
		$("#soft_17_6").text("H");
		$("#soft_17_7").text("H");
		$("#soft_17_8").text("H");
		$("#soft_17_9").text("H");
		$("#soft_17_T").text("H");
		$("#soft_17_A").text("H");

		$("#soft_18_2").text("S");
		$("#soft_18_3").text("S");
		$("#soft_18_4").text("S");
		$("#soft_18_5").text("S");
		$("#soft_18_6").text("S");
		$("#soft_18_7").text("S");
		$("#soft_18_8").text("S");
		$("#soft_18_9").text("H");
		$("#soft_18_T").text("H");
		$("#soft_18_A").text("H");

		$("#soft_19_2").text("S");
		$("#soft_19_3").text("S");
		$("#soft_19_4").text("S");
		$("#soft_19_5").text("S");
		$("#soft_19_6").text("S");
		$("#soft_19_7").text("S");
		$("#soft_19_8").text("S");
		$("#soft_19_9").text("S");
		$("#soft_19_T").text("S");
		$("#soft_19_A").text("S");

		$("#soft_20_2").text("S");
		$("#soft_20_3").text("S");
		$("#soft_20_4").text("S");
		$("#soft_20_5").text("S");
		$("#soft_20_6").text("S");
		$("#soft_20_7").text("S");
		$("#soft_20_8").text("S");
		$("#soft_20_9").text("S");
		$("#soft_20_T").text("S");
		$("#soft_20_A").text("S");

		$("#soft_21_2").text("S");
		$("#soft_21_3").text("S");
		$("#soft_21_4").text("S");
		$("#soft_21_5").text("S");
		$("#soft_21_6").text("S");
		$("#soft_21_7").text("S");
		$("#soft_21_8").text("S");
		$("#soft_21_9").text("S");
		$("#soft_21_T").text("S");
		$("#soft_21_A").text("S");
	}
}
