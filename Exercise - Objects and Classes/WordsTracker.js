function tracker(arr){
    let wordsToSearch = arr[0].split(' ')
    let wordToSearch = {}
    let arrWordsToSearch = []

    for (const word of wordsToSearch) {
        wordToSearch = {word, count:0}
        arrWordsToSearch.push(wordToSearch)
    }
    for (let i = 1; i < arr.length; i++) {
        for (const word of arrWordsToSearch) {
            if(word.word == arr[i]){
                word.count++
            }
        }
    }
    arrWordsToSearch.sort((a,b) => b.count - a.count)
    for (const word of arrWordsToSearch) {
       console.log(`${word.word} - ${word.count}`)
    }
}
tracker([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence'])