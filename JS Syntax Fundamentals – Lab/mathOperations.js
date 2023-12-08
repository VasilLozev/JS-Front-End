function mathOperation(num1,num2,operator){
    let opr = String(operator)
    let result = 0
    switch(opr){
    case '+': result = num1 + num2;break
    case '-': result = num1 - num2;break
    case '*': result = num1 * num2;break
    case '/': result = num1 / num2;break
    case '%': result = num1 % num2;break
    case '**': result = num1 ** num2;break
    }
    console.log(result)
}

mathOperation(3, 5.5, '**')