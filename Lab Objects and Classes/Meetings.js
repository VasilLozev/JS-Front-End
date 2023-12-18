function meetings(arr){
    let schedules = {};
    let newArray = []
    for (const element of arr) {
        let count = true
        let [weekday,name] = element.split(" ");
        for (i=0;i<newArray.length;i++) {
            if(newArray[i] == weekday){
                count = false
                console.log(`Conflict on ${weekday}!`)
            }
        }
        if(count == true){
            schedules[weekday] = name;
            newArray.push(weekday)
            console.log(`Scheduled for ${weekday}`)
        }
    }

    for (let key in schedules) {
        console.log(`${key} -> ${schedules[key]}`)
    }
}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'])