function printMonth(month){
    if(month > 12 || month <1){
        console.log("Error!")
    } else {
        const formatter = new Intl.DateTimeFormat('eng', { month: 'long' });
        const month1 = formatter.format(new Date(2003, `${month-1}`, 12));
        console.log(`${month1}`);
    }
}

printMonth(2)