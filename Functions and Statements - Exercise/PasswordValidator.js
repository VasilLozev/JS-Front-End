function password(string){
    let stringPassword = String(string)
    let regExpMatch = stringPassword.match(/[a-zA-Z][0-9]/gm)
    let regExpMatch1 = stringPassword.match(/\d{2}/gm)
    let count = 0
    if(stringPassword.length < 6 || stringPassword.length > 10){
        console.log("Password must be between 6 and 10 characters")
        count++
    }
    for (let i = 0; i < stringPassword.length; i++) {
        const element = stringPassword[i];
        if(!String(element).match(/[a-zA-Z0-9]/gm)){
            console.log("Password must consist only of letters and digits")
            count++
            break;
        }
    }
    if(!stringPassword.match(/\d{2}/gm)){
        console.log("Password must have at least 2 digits")
        count++
    } 
    if(count == 0){
        console.log("Password is valid")
    }
}

password('MyPass123')