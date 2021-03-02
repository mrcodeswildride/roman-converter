let roman = document.getElementById(`roman`)
let convertButton = document.getElementById(`convertButton`)
let decimalParagraph = document.getElementById(`decimalParagraph`)

let dict = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

convertButton.addEventListener(`click`, showDecimal)

roman.addEventListener(`keydown`, keyPressed)
roman.focus()

function showDecimal() {
  let romanValue = roman.value.trim().toUpperCase()
  let decimal = 0

  for (let i = 0; i < romanValue.length; i++) {
    let letter = romanValue[i]
    let number = dict[letter]

    if (!number) {
      decimal = 0
      break
    }

    let nextLetter = romanValue[i+1]
    let nextNumber = dict[nextLetter]

    if (!nextNumber || number >= nextNumber) {
      decimal += number
    }
    else {
      decimal += (nextNumber - number)
      i++
    }
  }

  if (decimal == 0) {
    decimalParagraph.innerHTML = `Invalid input.`
  }
  else {
    decimalParagraph.innerHTML = `${romanValue} = ${decimal}`
  }
}

function keyPressed(event) {
  if (event.keyCode == 13) {
    showDecimal()
  }
}