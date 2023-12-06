function same(num){
    let string = String(num)
    let check = true
    let sum = 0
    for(i=0;i<string.length;i++){
        if(string[i] != string[0]){
            check=false
        }
        sum += Number(string[i])
    }
    console.log(check)
    console.log(sum)
}