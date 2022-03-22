/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
let zin = 'Man inser dÃ¥ i hvilken grefvens stund ofvanberÃ¶rde fÃ¶rlÃ¤ggare uppenbarade sig. De smÃ¥ betÃ¤nkligheter, som Ã¤nnu qvarstodo Ã¥ min sida, fÃ¶rsvunno helt och hÃ¥llet vid den solida vÃ¤ltaligheten Ã¥ hans, en vÃ¤ltalighet, som blef oemotstÃ¥ndlig, dÃ¥ den i perspektiv visade mig min stora nyck tillfredsstÃ¤lld. Jag tyckte Ã¤fven att jag pÃ¥ sÃ¤tt och vis vore fÃ¶rpligtad att en gÃ¥ng skrifva i detta manÃ©r, pÃ¥ det att samvetsfrid mÃ¥tte fÃ¶rlÃ¤nas Ã¥t dem af mina gode recensenter, som fÃ¶rut pÃ¥stÃ¥tt att jag fÃ¶r honorariets skull fÃ¶rfattar efter bestÃ¤llning och tumstock, och hvilka sjelfva naturligtvis aldrig skrifva fÃ¶r pengar.'

function setup () {
  createCanvas(600, 400)
  noLoop()
}

function draw () {
  background(230)
  textSize(20)
  fill(0)
  text(zin, 50, 50, 520, 270)
  let woorden = zin.split(' ')
  let nummerLangste = 0
  let aantalLetters = verwijderLeesteken(woorden[0]).length
  for (let i = 1; i < woorden.length; i++) {
    woorden[i] = verwijderLeesteken(woorden[i])
    if (woorden[i].length > aantalLetters) {
      nummerLangste = i
      aantalLetters = woorden[i].length
    }
  }
  fill('blue')
  text('langste woord = â€œ' + woorden[nummerLangste] + 'â€ (' + aantalLetters + ' letters)', 50, 350)
}

function verwijderLeesteken (w) {
  let laatste = w.charAt(w.length - 1)
  if (laatste === ',' || laatste === '.' || laatste === ';' || laatste === ':' ||
	 laatste === '?' || laatste === '!') {
    return w.substring(0, w.length - 1)
  } else {
    return w
  }
}