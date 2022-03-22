/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */

function setup () {
    createCanvas(600, 200)
    frameRate(1)
  }
  
  function draw () {
    ww = genereerww()
    let goedww = true
    background(230)
    textSize(20)
    fill(0)
    text(ww, 400, 50)
    if (minstens8Lang(ww)) {
      fill('green')
    } else {
      fill('red')
      goedww = false
    }
    text('Minstens 8 karakters', 50, 50)
    if (bevatCijfer(ww)) {
      fill('green')
    } else {
      fill('red')
      goedww = false
    }
    text('Bevat minstens Ã©Ã©n cijfer', 50, 80)
    if (bevatHoofletter(ww)) {
      fill('green')
    } else {
      fill('red')
      goedww = false
    }
    text('Bevat minstens Ã©Ã©n hoofdletter', 50, 110)
    if (bevatKleineletter(ww)) {
      fill('green')
    } else {
      fill('red')
      goedww = false
    }
    text('Bevat minstens Ã©Ã©n kleine letter', 50, 140)
    if (goedww) {
      fill('green')
      text('=> ' + ww + ' is een goed wachtwoord!', 50, 170)
    } else {
      fill('red')
      text('=> ' + ww + ' is geen goed wachtwoord!', 50, 170)
    }
  }
  
  function minstens8Lang (w) {
    return w.length >= 8
  }
  
  function bevatHoofletter (w) {
    for (let i = 0; i < w.length; i++) {
      if (w.charAt(i) >= 'A' && w.charAt(i) <= 'Z') {
        return true
      }
    }
    return false
  }
  
  function bevatKleineletter (w) {
    for (let i = 0; i < w.length; i++) {
      if (w.charAt(i) >= 'a' && w.charAt(i) <= 'z') {
        return true
      }
    }
    return false
  }
  
  function bevatCijfer (w) {
    for (let i = 0; i < w.length; i++) {
      if (w.charAt(i) >= '0' && w.charAt(i) <= '9') {
        return true
      }
    }
    return false
  }
  
  function genereerww () {
    let wachtwoord = ''
    let lengte = Math.floor(random(2, 11))
    const mogelijke = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < lengte; i++) {
      wachtwoord += mogelijke.charAt(Math.floor(random(0, mogelijke.length)))
    }
    return wachtwoord
  }