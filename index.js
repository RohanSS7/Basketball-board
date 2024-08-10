let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let count = 0
let count2 = 0

function increment1() {
    count = count + 1
    homeEl.textContent = count
}

function increment2() {
    count = count + 2
    homeEl.textContent = count
}

function increment3() {
    count = count + 3
    homeEl.textContent = count
}


function increment4() {
    count2 = count2 + 1
    guestEl.textContent = count2
}

function increment5() {
    count2 = count2 + 2
    guestEl.textContent = count2
}

function increment6() {
    count2 = count2 + 3
    guestEl.textContent = count2
}