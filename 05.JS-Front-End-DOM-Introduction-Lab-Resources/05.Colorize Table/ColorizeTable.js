function colorize() {
    let EvenRows = document.querySelectorAll('tr:nth-child(even)');
    for (const row of EvenRows) {
        row.style.background = 'Teal'
    }
}