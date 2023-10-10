const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

let porgandid = 0
readline.question('Sisetage ringide koguarv: ', ringid => {
	for (let i = 1; i <= ringid; i++) {
		if (i % 2 == 0) { 
			porgandid += i
		}
	}
	console.log('Porgandite koguarv on ' + porgandid)
	readline.close()
});