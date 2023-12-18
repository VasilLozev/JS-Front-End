function parkingLot(arr){
    const parkingLot = {};
    
    for (const car of arr) {
        const [direction, carNumber] = car.split(", ");
        parkingLot[carNumber] = direction;
    }
    
    const carNumbers = Object.entries(parkingLot);
    const sortedNumbers = carNumbers.sort();
    for (const key of sortedNumbers) {
        if(key[1] == 'IN')
        console.log(key[0])
    }
}
parkingLot(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])