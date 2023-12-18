function numbering(arr){
    for (const person of arr) {
        let employeeName = String(person)
        let personalNum = String(person).length
        let employee = {employeeName,personalNum}
        console.log(`Name: ${employee.employeeName} -- Personal Number: ${employee.personalNum}`)
    }
}

numbering([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])