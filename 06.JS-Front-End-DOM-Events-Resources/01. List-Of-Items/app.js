function addItem() {
    let items = document.getElementById('items')
    let newLi = document.createElement('li')
    items.appendChild(newLi)
    console.log(newLi.textContent)
    newLi.textContent = document.getElementById('newItemText').value
}