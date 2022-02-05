//Eloquent JavaScript
//Chapter 2
//Exercise1
// Write a loop that makes seven calls to console.log to output the following
// triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
for(let i=1;i<=7;i++){
	for(let j=1;j<=i;j++){
		process.stdout.write('#')
	}
	if(i<7)
		process.stdout.write('\n')
}