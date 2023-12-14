function Nth(array, num){
    let stringArray = []
    for(i=0;i<String(array).length;i+=num){
        if(array[i] != undefined)
        {
        stringArray.push(array[i])
    }
}
return stringArray
}

console.log(Nth(['5',

'20',

'31',

'4',

'20'],

2))