function perfect(number){
    let count = 0
           for(i=1;i <=number; i++){
            if(number % i == 0){
                count += i
            }
        }
        if(count / 2 == number){
            console.log("We have a perfect number!")
        }
        else {console.log("It's not so perfect.")}
    }

perfect(1236498)