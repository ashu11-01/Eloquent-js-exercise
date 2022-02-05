//Eloquent JavaScript
//Chapter 2
//Exercise3
// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline
// characters to separate lines. At each position of the grid there is either a space
// or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size
// = 8 and change the program so that it works for any size, outputting a grid
// of the given width and height.
let size = 7
let board =''
for(let i=1;i<=size;i++){
	for(let j=1;j<=size;j++){
		if(i%2 !==0) { //row no. is odd
			if(j%2 !==0 )  // column no. is odd
				board +=' ';
			else
				board += '#'
		}
		if(i%2 ===0) { //row no. is even
			if(j%2 ===0 )  // column no. is even
				board +=' ';
			else
				board += '#'
		}
	}
	if(i<size) board += '\n'
}
process.stdout.write(board)