//Changes colors of the letters to white to indicate time
function changeWhite(x) {
  var i
  for (i = 0; i < x.length; i++) {
    x[i].style.color = '#ffffff'
  }
}

//Changes colors of the letters to orange to reset
function changeOrange(x) {
  var i
  for (i = 0; i < x.length; i++) {
    x[i].style.color = '#e45b00'
  }
}

//Changes colors of the letters to orange to reset
function changeDarkOrange(x) {
  var i
  for (i = 0; i < x.length; i++) {
    x[i].style.color = '#772600'
  }
}

function clear() {
  var x = document.getElementsByTagName('td')
  changeOrange(x)
}

//Running clock function
function runClock() {
  clear()
  //Retrieves current Date and Time
  var now = new Date()
  var hour = now.getHours() % 12
  var min = now.getMinutes()
  var ampm = now.getHours()
  //var min = Math.floor(Math.random() * 60)

  //Finally, determine current minute hand and change text color
  changeHour(hour, min)
  changeFive(min)
  changeMinute(min)
  //changeAP(ampm)
}

//Determines AM/PM
function changeAP(h) {
  if (h >= 12 && h <= 23) {
    changeDarkOrange(document.getElementsByClassName('pm'))
  } else {
    changeDarkOrange(document.getElementsByClassName('am'))
  }
}

//Changes text color of current minute
function changeFive(m) {
  if (m >= 0 && m < 5) {
    changeOrange(document.getElementsByClassName('five-min'))
    changeOrange(document.getElementsByClassName('to'))
    changeWhite(document.getElementsByClassName('oclock'))
  } else if (m >= 5 && m < 10) {
    changeWhite(document.getElementsByClassName('five-min'))
    changeWhite(document.getElementsByClassName('past'))
    changeOrange(document.getElementsByClassName('oclock'))
  } else if (m >= 10 && m < 15) {
    changeWhite(document.getElementsByClassName('ten-min'))
    changeWhite(document.getElementsByClassName('past'))
  } else if (m >= 15 && m < 20) {
    changeWhite(document.getElementsByClassName('a'))
    changeWhite(document.getElementsByClassName('quarter'))
    changeWhite(document.getElementsByClassName('past'))
  } else if (m >= 20 && m < 25) {
    changeWhite(document.getElementsByClassName('twenty'))
    changeWhite(document.getElementsByClassName('past'))
  } else if (m >= 25 && m < 30) {
    changeWhite(document.getElementsByClassName('twenty'))
    changeWhite(document.getElementsByClassName('five-min'))
    changeWhite(document.getElementsByClassName('past'))
  } else if (m >= 30 && m < 35) {
    changeWhite(document.getElementsByClassName('half'))
    changeWhite(document.getElementsByClassName('past'))
  } else if (m >= 35 && m < 40) {
    changeWhite(document.getElementsByClassName('twenty'))
    changeWhite(document.getElementsByClassName('five-min'))
    changeWhite(document.getElementsByClassName('to'))
  } else if (m >= 40 && m < 45) {
    changeWhite(document.getElementsByClassName('twenty'))
    changeWhite(document.getElementsByClassName('to'))
  } else if (m >= 45 && m < 50) {
    changeWhite(document.getElementsByClassName('a'))
    changeWhite(document.getElementsByClassName('quarter'))
    changeWhite(document.getElementsByClassName('to'))
  } else if (m >= 50 && m < 55) {
    changeWhite(document.getElementsByClassName('ten-min'))
    changeWhite(document.getElementsByClassName('to'))
  } else if (m >= 55 && m <= 59) {
    changeWhite(document.getElementsByClassName('five-min'))
    changeWhite(document.getElementsByClassName('to'))
  }
}

//Determines current time to change text color
function changeHour(h, m) {
  //First checks if it is past 35 minutes, correct wording for "to"
  //Resets clock back to 0 when 12 is reached
  if (m >= 35) {
    h++
    if (h == 12) {
      h = 0
    }
  }

  changeWhite(document.getElementsByClassName('it'))
  changeWhite(document.getElementsByClassName('is'))

  //Second, determine correct hour and change text color
  if (h == 0) {
    changeWhite(document.getElementsByClassName('twelve'))
  } else if (h == 1) {
    changeWhite(document.getElementsByClassName('one'))
  } else if (h == 2) {
    changeWhite(document.getElementsByClassName('two'))
  } else if (h == 3) {
    changeWhite(document.getElementsByClassName('three'))
  } else if (h == 4) {
    changeWhite(document.getElementsByClassName('four'))
  } else if (h == 5) {
    changeWhite(document.getElementsByClassName('five-hour'))
  } else if (h == 6) {
    changeWhite(document.getElementsByClassName('six'))
  } else if (h == 7) {
    changeWhite(document.getElementsByClassName('seven'))
  } else if (h == 8) {
    changeWhite(document.getElementsByClassName('eight'))
  } else if (h == 9) {
    changeWhite(document.getElementsByClassName('nine'))
  } else if (h == 10) {
    changeWhite(document.getElementsByClassName('ten-hour'))
  } else if (h == 11) {
    changeWhite(document.getElementsByClassName('eleven'))
  }
}

function changeMinute(m) {
  if (m % 5 == 1) {
    changeWhite(document.getElementsByClassName('dot1'))
  } else if (m % 5 == 2) {
    changeWhite(document.getElementsByClassName('dot1'))
    changeWhite(document.getElementsByClassName('dot2'))
  } else if (m % 5 == 3) {
    changeWhite(document.getElementsByClassName('dot1'))
    changeWhite(document.getElementsByClassName('dot2'))
    changeWhite(document.getElementsByClassName('dot3'))
  } else if (m % 5 == 4) {
    changeWhite(document.getElementsByClassName('dot1'))
    changeWhite(document.getElementsByClassName('dot2'))
    changeWhite(document.getElementsByClassName('dot3'))
    changeWhite(document.getElementsByClassName('dot4'))
  }
}

setInterval(function() {
  runClock()
}, 1000)

runClock()
