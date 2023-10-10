const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
let i = 1
readline.question('Täringute arv: ', taringud => {
	while (i <= taringud) {
		let tulemus = Math.round(Math.random() * 10)
		if (tulemus < 7 && tulemus > 0) { 
			console.log(tulemus);
			i++;
		}
	}
	readline.close()
});