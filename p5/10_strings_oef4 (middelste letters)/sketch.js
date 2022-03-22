let tekst = 'De brand in de Notre-Dame in Parijs, de beroemde en eeuwenoude kathedraal van de Franse hoofdstad, heeft zowat het hele dak van het gebouw verwoest. Ook de centrale torenspits is ingestort, maar de rest van het gebouw kon uiteindelijk gered worden van de totale ondergang. Rond 10 uur deze morgen was het vuur geblust. Het grootste deel van de kunstschatten is naar verluidt gered.'
let tekstArray = []

function setup() {
	createCanvas(600, 300)
	noLoop()
	tekstArray = tekst.split(' ')
}

function draw() {
	background(240)
	textSize(20)
	for (let w = 0; w < tekstArray.length; w++) {
		if (tekstArray[w].length > 3) {
			tekstArray[w] = verandermiddelste(tekstArray[w])
		}
	}
	let nieuwetekst = tekstArray.join(' ')
	text(nieuwetekst, 50, 50, 550, 250)
	
}

function permuteer(w) {
	let letters = w.split('')
	let l = w.length
	let res = []
	for (let i = 0; i < l; i++) {
		let randindex = Math.floor(random(0, letters.length))
		res[i] = (letters.splice(randindex, 1))[0]
	}
	return(res.join(''))

}

function verandermiddelste(w) {
	if (w.charAt(0) === 'â€˜') { //tekst begint met aanhalingsteken
		if (w.charAt(w.length - 1) === 'â€™') {// en eindigt ook met afhalingsteken
			return w.substring(0,2) + permuteer(w.substring(2, w.length - 2)) + w.substring(w.length - 2)
		} else {
			return w.substring(0,2) + permuteer(w.substring(2, w.length - 1)) + w.charAt(w.length - 1)
		}
	}
	if (isLeesteken(w.charAt(w.length - 1))) {
		return w.charAt(0) + permuteer(w.substring(1, w.length - 2)) + w.substring(w.length - 2)
	}
	return w.charAt(0) + permuteer(w.substring(1, w.length - 1)) + w.charAt(w.length - 1)
}

function isLeesteken(letter) {
	return (letter === '.' ||
		letter === ',' ||
		letter === ':' ||
		letter === ';' ||
		letter === 'â€™' ||
		letter === '!' ||
		letter === '?') 
}