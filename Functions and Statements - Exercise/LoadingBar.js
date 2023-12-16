function loadingBar(number){
    if(10 - number/10 != 0){
    console.log(`${number}% [${'%'.repeat(number/10)}${'.'.repeat(10 - number/10)}]`)
    console.log("Still loading...")
    } else {console.log(`${number}% Complete!`)
    console.log(`[${'%'.repeat(number/10)}]`)
    }
}

loadingBar(30)