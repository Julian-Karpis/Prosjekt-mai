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
        console.log("show--")
        showCar(data)
    })

//vise bilde funksjon
function showCar(f1cars) {
    const container = document.getElementById('img-container')

    const randomIndex = Math.floor(Math.random() * f1cars.length)
    

    const randomCar = f1cars[randomIndex]
    currentCar = randomCar

    const img = document.createElement('img')
    img.src = randomCar.car
    img.style.borderTopLeftRadius = "25px"
    img.style.borderTopRightRadius = "25px"
    img.style.width = "1000px"
    img.style.height = "500px"
    container.appendChild(img)

}


document.getElementById('guessButton').addEventListener('click', click)

function click() {
    const yearInput = Number(document.getElementById('myRange').value.trim())

    console.log(yearInput)
    const correctYear = currentCar.year
    console.log(correctYear)    


    if (yearInput == correctYear) {
         console.log("right")
    } else {
        console.log("wrong")
    }
}

    

  


