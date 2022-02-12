//Eloquent JavaScript
//Chapter 3
//Exercise2

// Write a function countBs that takes a string as its only argument and returns
// a number that indicates how many uppercase “B” characters there are in the
// string.
// Next, write a function called countChar that behaves like countBs, except
// it takes a second argument that indicates the character that is to be counted
// (rather than counting only uppercase “B” characters). Rewrite countBs to
// make use of this new function.

process.stdin.resume();
process.stdin.setEncoding('utf8');
var stdin_input = "";
process.stdin.on("data",(input)=>{
    stdin_input += input;
});
process.stdin.on("end",()=>{
    main(stdin_input);
});
const print = (val) => {console.log(val) }
const main=(input)=>{
	var data = input.split('\r\n')
	print(countChar(data[0],data[1]))
	print(countB(data[0]))
}

function countChar(str,char){
	let count =0;
	str.split('').forEach(function(c){
		if(c === char)
			count++;
	})
	return count;
}

function countB(str){
	return countChar(str,'B')
}