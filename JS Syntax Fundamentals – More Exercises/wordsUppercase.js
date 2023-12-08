function uppercase(string){
    let stringToString = String(string).replace(/\W/g, ' ').replace(/\  /g, ' ').toUpperCase().trim().split(' ')
    let finalString = stringToString.toString()
    console.log(finalString.replace(/\,/g, ', '))
}
uppercase('Hi, how are you?')