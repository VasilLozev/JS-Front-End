function vacation (group, type, day){
    let price = 0;
    if (day ==="Friday" ){
        if(type === "Students"){
            price = 8.45
        }
         if( type ==="Business"){
        price = 10.90
        }
         if( type === "Regular"){
        price = 15.00
        }
    } 
    if (day ==="Saturday"){
        if(type === "Students"){
            price = 9.80
        }
         if( type === "Business"){
            price = 15.60
        } if( type === "Regular"){
            price = 20.00
        } 
    }
    if (day ==="Sunday"){
        if(type === "Students")
        {
        price = 10.46
        } if(type === "Business"){
        price = 16.00
    } if( type === "Regular"){
        price = 22.50
    } 
}
let pricefor10 = 10*price
price *= group
    if(type==="Students" && group >=30){
        price -= 0.15*price
    }
     if(type==="Business" && group >=100){
        price -= pricefor10
    }  
     if(type==="Regular" && group >=10 && group <= 20){
        price -= 0.05*price
    }
   
return `Total price: ${price.toFixed(2)}` 
}