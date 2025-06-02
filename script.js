//slider funksjon
let slider = document.getElementById("myRange")
let output = document.getElementById("demo")
output.innerHTML = slider.value 

slider.oninput = function() {
    output.innerHTML = this.value
}

//fetch

fetch('f1cars.json')
    .then((response) => response.json() )
    .then(data => {
        carsData = data
        
        startRound()
    })

//vise bilde funksjon
function startRound() {
    const container = document.getElementById('img-container')
    container.innerHTML =''

    const randomIndex = Math.floor(Math.random() * carsData.length)
    

    const randomCar = carsData[randomIndex]
    currentCar = randomCar

    const img = document.createElement('img')
    img.src = randomCar.car
    img.style.borderTopLeftRadius = "25px"
    img.style.borderTopRightRadius = "25px"
    img.style.height = "auto"
    img.style.minwidth = "60%"
    img.style.maxWidth = "80%"
    img.style.objectFit = "contain"
    container.appendChild(img)
}

let totalScore = 0
let currentRound = 1

document.getElementById('guessButton').addEventListener('click', click)

function click() {

   
    const yearInput = Number(document.getElementById('myRange').value.trim())

    console.log(yearInput)
    const correctYear = currentCar.year
    const maxPoints = 5000
    const differance = Math.abs(yearInput - correctYear)
    const difficulty = 0.15
    console.log(correctYear)    

    const score = Math.round(maxPoints * Math.exp(-difficulty * differance))
    totalScore += score

    console.log(score)
    const scoreEl = document.getElementById('score')
    scoreEl.innerHTML = totalScore

    currentRound++
    document.querySelector('.progressBarText2').textContent = `${currentRound}/5`
  

    if (currentRound >= 6) {

        endGame()
        return
    }

    startRound()
}

//endgame
function endGame() {
    localStorage.setItem("finalScore", totalScore)
    window.location.href ="end.html"
}


