//slider funksjon
let slider = document.getElementById("myRange")
let output = document.getElementById("demo")
output.innerHTML = slider.value 

slider.oninput = function() {
    console.log("vbuobe")
    output.innerHTML = this.value
}



//

function showCar() {
    const car = cars
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
