function information(name, age, averageGrade){
    let studentName = String(name)
    let studentAge = Number(age)
    let studentGrade = Number(averageGrade)
    console.log(`Name: ${ studentName}, Age: ${ studentAge}, Grade: ${ studentGrade.toFixed(2)}`)
}

information('John', 15, 5.54678)