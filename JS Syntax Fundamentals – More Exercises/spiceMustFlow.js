function spiceExtraction(yield){
    let yieldToExtract = Number(yield)
    let total = 0
    let days = 0
    while(yieldToExtract >= 100){
         days ++
         total += yieldToExtract
         yieldToExtract -= 10
         if(total >= 26){
         total -= 26
         }
         else {total = 0}
    }
    if(total >= 26){
        total -= 26
    } else {total = 0}
    console.log(days)
    console.log(total)
}

spiceExtraction(450)