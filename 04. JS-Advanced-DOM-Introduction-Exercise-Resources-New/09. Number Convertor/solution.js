function solve() {

    const newOption = document.createElement('option');
    const newOption1 = document.createElement('option');
    const optionText = document.createTextNode('Hexadecimal');
    const optionText1 = document.createTextNode('Binary');
    // set option text
    newOption.appendChild(optionText);
    newOption1.appendChild(optionText1);
    // and option value
    newOption.setAttribute('value','hexadecimal');
    newOption1.setAttribute('value','binary');

    const select = document.querySelector("#selectMenuTo "); 
    const select1 = document.querySelector("#selectMenuTo "); 
    select.appendChild(newOption);
    select1.appendChild(newOption1);

    const btn = document.querySelector('button')
    btn.onclick = (e) => {
        const selectedValues = [].filter
            .call(document.querySelector("#selectMenuTo").options, option => option.selected)
            .map(option => option.value);
            if(selectedValues[0] === 'binary'){
                let decimal = document.querySelector("#input").value
                let binary = 0
                while (decimal > 0) {
                    if (decimal & 1) {
                       binary = "1" + binary;
                    } else {
                       binary = "0" + binary;
                    }
                    decimal = decimal >> 1;
                 }
                
                 document.querySelector("#result").value = binary.split('').slice(0,binary.split('').length-1).join('').toString()
        }  if(selectedValues[0] === 'hexadecimal'){
            const decimal = (Number(document.querySelector("#input").value)).toString(16).toUpperCase()
            document.querySelector("#result").value = decimal
        }
    };
}

