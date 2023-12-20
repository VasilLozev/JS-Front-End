function sumTable() {
   const rows = Array.from(document.
   querySelectorAll("td:nth-child(even)"))
   let sum = document.getElementById('sum')
   let finalSum = 0
   for (const row of rows) {
    finalSum += Number(row.textContent)
   }
   sum.textContent = finalSum
}