function subString(word,text){
    let array = String(text).split(' ')
    for(i=0;i<array.length;i++){
        if(array[i].toLowerCase() == word.toLowerCase()){
        console.log(word)
    return;
        }
    }
    console.log(`${word} not found!`)
}

subString('python', 'JavaScript is the best programming language')