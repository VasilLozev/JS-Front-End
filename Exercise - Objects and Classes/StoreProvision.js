function productQuantity(currArr, orderArr){
    let product = {}
    let products = []
    let name 
    let quantity
    for (i=0;i<String(currArr).split(',').length;i++) {
        if(i % 2 == 0){
            name = currArr[i]
        }
        else {quantity = currArr[i]
        product = {name,quantity}
        products.push(product)
        }
    }
    for (i=0;i<String(orderArr).split(',').length;i++) {
        if(i % 2 == 0){
            name = orderArr[i]
        }
        else {quantity = orderArr[i]
        product = {name,quantity}
        let count = true
        for (const productQuan of products) {
                if(productQuan.name == name){
                    productQuan.quantity =  Number(productQuan.quantity) + Number(quantity)
                    count = false
                }  
            }
            if(count == true){
                products.push(product) 
            }
        }
    }

    for (const product of products) {
        console.log((`${product.name} -> ${product.quantity}`))
    }
}
productQuantity([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ], [

        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        
        'Tomatoes', '70', 'Bananas', '30'
        
        ])