function reverse(n,numbers){
    let array = []
    for(i=0;i<n;i++){
        let number = numbers[i]
        array.push(number)
    }
    console.log(array.reverse().join(' '))
}
reverse(2, [66, 43, 75, 89, 47])