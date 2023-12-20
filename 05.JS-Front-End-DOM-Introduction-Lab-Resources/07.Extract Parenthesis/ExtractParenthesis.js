function extract(content) {
    let textToExtractFrom = document.getElementById(content).textContent;
    let text = Array.from(textToExtractFrom.matchAll(/\([A-Za-z\ ]+\)/gm));
   return text.join(';')
    
}
