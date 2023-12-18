function getAddresses(input) {
    const addressList = {};
    
    for (const person of input) {
        const [name, address] = person.split(":");
        addressList[name] = address;
    }

    const peopleNames = Object.entries(addressList);
    const sortedPeople = peopleNames.sort();
    for (const key of sortedPeople) {
        console.log(`${key[0]} -> ${key[1]}`)
    }
}

getAddresses(['Bob:Huxley Rd',

'John:Milwaukee Crossing',

'Peter:Fordem Ave',

'Bob:Redwing Ave',

'George:Mesta Crossing',

'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd'])