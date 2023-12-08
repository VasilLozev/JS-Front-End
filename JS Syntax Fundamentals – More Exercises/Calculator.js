function calculator(num, opr, num2){
   let number = Number(num)
   let number2 = Number(num2)
   let operator = String(opr)
   let sum=0
    switch(operator){
        case '+':  sum = number + number2;break
        case '-': sum = number - number2 ;break
        case '/':  sum = number / number2 ;break
        case '*': sum = number * number2 ;break
        default: 0
        
    }
    console.log(`${sum.toFixed(2)}`) 
}

calculator(25.5,

    '-',
    
    3)