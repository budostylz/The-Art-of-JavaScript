function betterPerformance(){

	//set multidemsional array
	var grid = [[2,4,6,8],[1,3,5]];

	//iterate through grid
	for( var i = 0, count = grid.length; i < count; i++ ){//the addition of the count variable prevents javascript from checking the length property of the array per iteration

		console.log('Array ' + grid[i]);

		for (var j = 0, count2 = grid[i].length; j < count2; j++ ){

			console.log('Element:' + grid[i][j]);

		}//end for (var j = 0; count2 = grid[i].length; j < count2; j++ )

	}//for(var i = 0; count = grid.length; i < count; i++)*/

}//end etterPerformance()

//load function when browser opens
window.onload = betterPerformance;