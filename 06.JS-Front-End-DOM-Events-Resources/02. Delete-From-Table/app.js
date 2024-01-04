function deleteByEmail() {

    let result = document.getElementById('result')

    let tableCells = document.querySelectorAll('tbody tr td')

    let emailToDelete = document.querySelector('input[name="email"]').value;
    console.log(emailToDelete)
    for (const cell of tableCells) {

        if( cell.textContent == emailToDelete)
           {
            document.querySelector('tbody').removeChild(cell.parentNode)
            result.textContent = 'Deleted.'
           }
    }
    if(result !== 'Deleted.'){
        result.textContent = "Not found."
    }
}