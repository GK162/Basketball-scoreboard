let count = 0

function plusOne() {
    count += 1
    document.getElementById("home-count").textContent = count
}

function plusTwo() {
    count += 2
    document.getElementById("home-count").textContent = count
}

function plusThree() {
    count += 3
    document.getElementById("home-count").textContent = count
}

countGuest = 0
function plusOneGuest() {
    countGuest += 1
    document.getElementById("guest-count").textContent = countGuest
}

function plusTwoGuest() {
    countGuest += 2
    document.getElementById("guest-count").textContent = countGuest
}

function plusThreeGuest() {
    countGuest += 3
    document.getElementById("guest-count").textContent = countGuest
}