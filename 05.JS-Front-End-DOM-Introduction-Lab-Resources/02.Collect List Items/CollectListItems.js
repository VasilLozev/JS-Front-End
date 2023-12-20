function extractText() {
    const items = document.getElementById('items').children;
    const result = [];

    for (const item of Array.from(items)) {
        result.push(item.textContent)
    }

    const textAreaElement = document.getElementById('result');
    textAreaElement.textContent = result.join('\n');

}