function editElement(h1Element, match, replacer) {
    const content = h1Element.textContent;
    const editedText = content.replace(new RegExp(match, 'g'),
    replacer);

    h1Element.textContent = editedText
}