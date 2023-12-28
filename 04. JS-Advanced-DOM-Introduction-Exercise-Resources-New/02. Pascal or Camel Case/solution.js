function solve() {

    let text = document.getElementById('text').value.toLowerCase();
    let convention = document.getElementById("naming-convention").value;
    let result = document.getElementById("result");
    if (convention === "Camel Case") {

        let sentence = [];

        text = text.split(' ');

        sentence.push(text[0])

        for (let i = 1; i < text.length; i++) {
            sentence.push(text[i].charAt(0).toUpperCase() + text[i].slice(1));
        }

        result.textContent = sentence.join('');
    } else if (convention === "Pascal Case") {

        let sentence = [];

        text = text.split(' ');

        for (let i = 0; i < text.length; i++) {
            sentence.push(text[i].charAt(0).toUpperCase() + text[i].slice(1));
        }

        result.textContent = sentence.join('');
    } else {
        result.textContent = "Error!"
    }
}