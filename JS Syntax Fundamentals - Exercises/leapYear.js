function leap(year){
    let i
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
    {
        i = "yes"
    }
    else{
        i="no"
    }
    return i
}