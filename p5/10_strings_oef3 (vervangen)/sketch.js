/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
let movingMindsDNA = 'Een professionele bachelor is gericht op gedrevenheid als authentieke beroepsbeoefenaar. Authenticiteit komt voort uit het eigen ik, uit wie iemand (op dat moment) is en waar hij voor staat. Van daaruit kan en wil hij zijn eigen professionele persoonlijkheid ontplooien en ontwikkelen. Hij kan autonoom functioneren en verantwoordelijkheid opnemen voor een gemeenschappelijk doel. Hij toont veerkracht in een maatschappij die continu in ontwikkeling is en zal blijven. Hij realiseert zich dan ook dat leren nooit eindigt en kan zich in kritische en reflectieve dialoog met anderen verder professioneel ontwikkelen. Een professionele bachelor is gericht op degelijkheid en kwaliteit omdat hij op de hoogte is van the state of the art van zijn vakdomein en deze gericht kan inzetten in zijn professioneel handelen. Daarbij kan hij vanuit een onderzoekend vermogen en een degelijke digitale geletterdheid steeds op zoek gaan naar nieuwe kennis om zijn expertise te optimaliseren. Hij is er zich van bewust dat kennis steeds in ontwikkeling is en dat altijd opnieuw vragen stellen belangrijk is om degelijk en kwaliteitsvol te blijven functioneren. Met deze houding inspireert hij ook anderen tot degelijk en kwaliteitsvol professioneel handelen. Een professionele bachelor is gericht op vernieuwing, verbetering en/of ontwikkeling samen met het brede professionele netwerk waarin hij zich bevindt. Hij is er zich van bewust dat situaties en organisaties steeds in ontwikkeling zijn en vindt daarin zijn weg. Hij neemt initiatieven om het eigen handelen bij te sturen. In samenwerking met anderen neemt hij verantwoordelijkheid op voor een verbeterend functioneren van de beroepspraktijk door creatief en probleemoplossend tewerk te gaan. Een professionele bachelor is gericht op glokale betrokkenheid en engagement vanuit open mindedness en cultuursensitiviteit. Hij profileert zich als een internationaal en intercultureel gerichte wereldburger.'

const origineel = ['professionele', 'hij', 'kennis', 'ontwikkeling', 'wereldburger', 'netwerk','bewust', 'authentieke', 'nooit']
const aanpassing = ['amateuristische', 'hij/zij', 'moppen', 'revolutie', 'hamburger', 'spinnenweb', 'onbewust', 'geschifte', 'altijd'] 
let toonBewerking = false

function setup () {
  createCanvas(600, 600)
  frameRate(1)
}

function draw () {
  background(230)
  textSize(16)
  fill(0)
  let woorden = movingMindsDNA.split(' ')
  for (let i = 0; i < woorden.length; i++) {
    for (let j = 0; j < origineel.length; j++) {
      if (woorden[i] === origineel[j]) {
        woorden[i] = aanpassing[j]
      }
    }
  }
  let nieuweTekst = woorden.join(' ')
  if (toonBewerking) {
    text(nieuweTekst, 20, 20, 580, 580)
  } else {
    text(movingMindsDNA, 20, 20, 580, 580)
  }
  toonBewerking = !toonBewerking
}