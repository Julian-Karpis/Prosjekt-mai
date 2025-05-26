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
    img.style.maxWidth = "80%"
    img.style.objectFit = "contain"
    container.appendChild(img)



}


document.getElementById('guessButton').addEventListener('click', click)

function click() {
    const yearInput = Number(document.getElementById('myRange').value.trim())

    console.log(yearInput)
    const correctYear = currentCar.year
    const maxPoints = 5000
    const differance = Math.abs(yearInput - correctYear)
    const difficulty = 0.2
    console.log(correctYear)    

    const score = Math.round(maxPoints * Math.exp(-difficulty * differance))

    console.log(score)
   

    startRound()
}




    

  


