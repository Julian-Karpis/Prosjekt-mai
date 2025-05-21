//slider funksjon
let slider = document.getElementById("myRange")
let output = document.getElementById("demo")
output.innerHTML = slider.value 

slider.oninput = function() {
    console.log("vbuobe")
    output.innerHTML = this.value
}



//

fetch('f1cars.json')
    .then((response) => response.json() )
    .then(data => {
        carsData = data
        console.log("show--")
        showCar(data)
    })



function showCar(f1cars) {
    const container = document.getElementById('img-container')
    const randomIndex = Math.floor(Math.random() * f1cars.length)
    const randomCar = f1cars[randomIndex]

  
    const img = document.createElement('img')
    img.src = randomCar.car
    img.style.borderTopLeftRadius = "25px"
    img.style.borderTopRightRadius = "25px"
   

    container.appendChild(img)
   
}





document.getElementById('guessButton').addEventListener('click', () =>{
    const carInput = document.getElementById('carGuess').value.trim().toLowerCase()
    const yearInput = Number(document.getElementById('myRange').value.trim())

    
    const currentCar = carsData


    if (carInput === correctCar && yearInput === correctYear) {
        document.getElementById('result').textContent = "correct"
    }
})
const guessTeam = teamInput
