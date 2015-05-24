

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.

function drawChart () {

    var arr_labels = game.arr_labels;
    var arr_data = game.arr_results;

    var data = {
    // A labels array that can contain any sort of values
    labels: arr_labels,
    // Our series array that contains series objects or in this case series data arrays
    series: [
      arr_data
    ]
    };


    new Chartist.Line('.ct-chart', data);
}

$("#draw-chart").click(function(){

  drawChart();

});