function solve(text,word){
    let wordToString = String(word)
    let censored = text.replace(wordToString, repeat(word))
    while(censored.includes(wordToString)){
         censored = censored.replace(wordToString, repeat(word))
    }
   console.log(censored)
}

function repeat(word){
    const wordString = String(word)
    let array = []
    for(i=0;i<wordString.length-1;i++){
        array.push('*')
    }
    return array.join('')
}

solve('Find the hidden word', 'hidden')
