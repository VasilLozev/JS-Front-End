function checker(x1str, y1str, x2str, y2str){
    let x1 = Number(x1str)
    let x2 = Number(x2str)
    let y1 = Number(y1str)
    let y2 = Number(y2str)
    
    let parsedToInt1 = parseInt(Math.sqrt(Math.pow((0 - x1),2) + Math.pow((y1 - 0),2)));
    let original1 = Math.sqrt(Math.pow((0 - x1),2) + Math.pow((y1 - 0),2));
    if(parsedToInt1 === original1)
    {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`)
    } else{console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`)}

    let parsedToInt2 = parseInt(Math.sqrt(Math.pow((x2- 0),2) + Math.pow((y2 - 0),2)));
    let original2 = Math.sqrt(Math.pow((x2- 0),2) + Math.pow((y2 - 0),2));
    if(parsedToInt2 === original2)
    {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`)
    } else{console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`)}

    let parsedToInt = parseInt(Math.sqrt(Math.pow((x2- x1),2) + Math.pow((y2 - y1),2)));
    let original = Math.sqrt(Math.pow((x2- x1),2) + Math.pow((y2 - y1),2));
    if(parsedToInt === original)
    {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else{console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)}

}

checker(3, 0, 0, 4)