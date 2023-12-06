function PrintandSum(start,end){
    let count = ``;
    let sum = 0;
    
    for(i=start;i<=end;i++){
        count += i + ` `;
        sum +=i;
    }
    console.log(count)
    console.log(`Sum: ${sum}`)
}
