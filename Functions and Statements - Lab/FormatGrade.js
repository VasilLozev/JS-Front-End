function format(grade){
    let score
    if(grade < 3.00){
        score = 'Fail'
        console.log(score, `(2)`)
    }
    if(grade >= 3.00 && grade < 3.50){
        score = 'Poor'
        console.log(score, `(${Number(grade).toFixed(2)})`)
    }
    if(grade >= 3.50 && grade < 4.50){
        score = 'Good'
        console.log(score, `(${Number(grade).toFixed(2)})`)
    }
    if(grade >= 4.50 && grade < 5.50){
        score = 'Very good'
        console.log(score, `(${Number(grade).toFixed(2)})`)
    }
    if(grade >= 5.50 && grade < 6.00){
        score = 'Excellent'
        console.log(score, `(${Number(grade).toFixed(2)})`)
    }
}
format(2.99)