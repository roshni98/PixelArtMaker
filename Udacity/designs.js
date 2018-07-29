$( document ).ready(function() {
    console.log( "ready!" );
		var submitQuery;

	submitQuery = $('input[type="submit"]')

	submitQuery.click(function(event) {
	  event.preventDefault();
	  makeGrid();
	});
});

function makeGrid() {
		console.log("Hello")


		var canvas = $('#pixelCanvas');
		//clear items that are already there
		canvas.children().remove()
		var heights = $('#inputHeight').val();
		var widths= $('#inputWeight').val();
		console.log(heights);
		console.log(widths);
    const color= document.querySelector('#colorPicker'); // get color
  //   $(this).css('background-color', colorChoice);
 //make grid based off user input of height & width
  // be able to click in each box to input the color selected-addeventListener
 	var tables = document.getElementById('pixelCanvas');

//creating table- nested for loop
  for(var i=0;i<heights;i++){

		var newRow = document.createElement('tr');
    for(var j=0; j<widths; j++){
    	var newCol = document.createElement('td');
			newRow.appendChild(newCol);
    }
    tables.appendChild(newRow);
  }//outer for loop
 //on.click('#colorPicker');
 $('#pixelCanvas').on('click','td',function(){
   const colorPicks= $('#colorPicker').val()
   $(this).css('background-color',colorPicks);
  //changes cell color
  });


}//function
