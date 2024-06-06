let homeScore = 0
let awayScore = 0
let homeEl = document.getElementById("home-el")
let awayEl = document.getElementById("away-el")

function homeplus1() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function homeplus2() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function homeplus3() {
    homeScore += 3
    homeEl.textContent = homeScore
}

function awayplus1() {
    awayScore += 1
    awayEl.textContent = awayScore
}

function awayplus2() {
    awayScore += 2
    awayEl.textContent = awayScore
}

function awayplus3() {
    awayScore += 3
    awayEl.textContent = awayScore
}

function reset() {
    homeScore = 0
    awayScore = 0
    homeEl.textContent = homeScore
    awayEl.textContent = awayScore
}


