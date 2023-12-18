function phoneBook(arr){
    const phoneBook = {};

    for (const element of arr) {
        const [name,phone] = element.split(" ");
        phoneBook[name] = phone;
        
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`)
    }
}

phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344'])