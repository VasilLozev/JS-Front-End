function calculate(x,y,operator){
    let operations = {
     multiply: (x,y) => x*y,
     divide: (x,y) => x/y,
     add: (x,y) => x+y,
     substract: (x,y) => x-y
    };
    const operatorFunction = operations[operator];
    const result = operatorFunction(x,y);
    console.log(result)
    // console.log(operations[operator](x,y))
}

calculate(50,

    13,
    
    'add')