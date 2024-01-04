function addItem() {

    let items = document.getElementById('items')

    let itemToAdd = document.getElementById('newItemText').value;
    console.log(itemToAdd)
    let newLi = document.createElement('li')

    items.appendChild(newLi)
    newLi.textContent = itemToAdd
    console.log(newLi.textContent)

    let a = document.createElement('a');
    a.textContent ='[Delete]';
    newLi.appendChild(a)
    document.getElementsByTagName('a')[0]; 
    a.href = "#"
    a.addEventListener('click', ()=>{
        a.parentElement.remove(this)
    })
}