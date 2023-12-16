function charRange(char1,char2){
    let char
    let array = []
    if(String(char1).charCodeAt(0) > String(char2).charCodeAt(0)){
        for (let index = String(char2).charCodeAt(0)+1; index < String(char1).charCodeAt(0); index++) {
            const element = String.fromCharCode(index);
            array.push(element)
        }
    } else if (String(char1).charCodeAt(0) < String(char2).charCodeAt(0)){
        for (let index = String(char1).charCodeAt(0)+1; index < String(char2).charCodeAt(0); index++) {
            const element = String.fromCharCode(index);
            array.push(element)
        }
    }
    console.log(array.join(' '))
}

charRange('C',

'#')