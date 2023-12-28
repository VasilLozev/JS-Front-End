function subtract() {
   let number1 = document.querySelector('#firstNumber').value
   let number2 =  document.querySelector('#secondNumber').value

   let divResult = document.querySelector("#result")

   divResult.textContent = Number(number1) - Number(number2)
}