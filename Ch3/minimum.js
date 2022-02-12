//Eloquent JavaScript
//Chapter 3
//Exercise1
// The previous chapter introduced the standard function Math.min that returns
// its smallest argument. We can build something like that now. Write a function
// min that takes two arguments and returns their minimum.

process.stdin.resume();
process.stdin.setEncoding('utf-8');
var stdin_input = "";
process.stdin.on("data",(input)=>{
    stdin_input += input;
});
process.stdin.on("end",()=>{
    main(stdin_input);
});
const print = (val) => {console.log(val) }
const main=(input)=>{
    var data = input.split('\r\n');
    print(minimum(data[0],data[1]))
}

function minimum(a,b){
	return (a < b ? a : b)
}