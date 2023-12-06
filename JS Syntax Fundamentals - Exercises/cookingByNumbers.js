function cooking(num,param1,param2,param3,param4,param5){
    let list = Array(Number.parseInt(num),param1,param2,param3,param4,param5);
    let number = list[0]
    for(i=1;i<=5;i++){
        let operation = list[i]
        if(operation==='chop'){
            number /= 2
            console.log(number)
            continue
        }  if(operation==="dice"){
            number = Math.sqrt(number) 
            console.log(number)
            continue
        }  if(operation==="spice"){
            number ++
            console.log(number)
                continue
        }  if(operation==='bake'){
            number *= 3
            console.log(number)
                continue
        }  if(operation==='fillet'){
            number -= 0.2*number
            console.log(number)
                continue
        }
    }
}
cooking('9', 'dice', 'spice', 'chop', 'bake',

'fillet')