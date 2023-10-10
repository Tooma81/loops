const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question('Mitu pöialpoissi tahab õunu: ', soovijad => {
	let andamKokku = 0
	for (let i = 1; i <= soovijad; i++) {
		let andam = Math.round(Math.random() + 1)
		andamKokku += andam
		console.log(andam)
	}
	console.log('Lumivagekesele jäi ' + (14 - andamKokku))
	readline.close()
});