const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
}); 

readline.question('Sisetage mitu korda äratada: ', arata => {
	for (arata; arata > 0; arata--) {
		console.log('Tõuse ja sära!')
	}
	readline.close()
});