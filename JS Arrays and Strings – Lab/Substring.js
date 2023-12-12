function substring(string, startIndex, count){
   
    let result = string.substring(startIndex,Number(count+startIndex))
    console.log(String(result))
}

substring('SkipWord', 4, 7)
