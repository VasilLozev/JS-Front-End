function solve() {
    let option1 = new Option('Hexadecimal', 'hexadecimal')
    let option2 = new Option('Binary', 'binary')
    document.querySelector("#selectMenuTo").options.add(option1)
    document.querySelector("#selectMenuTo").options.add(option2)
        const btn = document.querySelector('button')
    btn.onclick = (e) => {
        const selectedValues = [].filter
            .call(document.querySelector(" #selectMenuTo").options, option => option.selected)
            .map(option => option.text);
            if(selectedValues == 'Binary'){
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
                
                document.querySelector("#result").value = binary
        } else if (selectedValues == 'Hexadecimal'){
            const decimal = (Number(document.querySelector("#input").value)).toString(16)
            document.querySelector("#result").value = decimal.toUpperCase()
        }
    };
}
