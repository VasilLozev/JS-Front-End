function makeADictionary(arr){
    let dictionary = []

    for (const entry of arr) {
       let data = JSON.parse(entry);
       dictionary.push(data)
    }
    let array = []
    for (const data of dictionary) {
        
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                const element = data[key];
                let entry = {key,element}
               array.push(entry)
            }
        }
    }
    array.sort((a,b) => a.key.localeCompare(b.key))
    for (const entry of array) {
        console.log(`Term: ${entry.key} => Definition: ${entry.element}`)
    }
} 
    makeADictionary([

'{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',

'{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."}',

'{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',

'{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',

'{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '

])
    