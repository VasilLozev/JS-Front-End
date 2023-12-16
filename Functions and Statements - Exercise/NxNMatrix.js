function Matrix(number) {

    function printRow(num) {

     return (num.toString() + ' ').repeat(num);
   }
   for (let currentRow = 1; currentRow <= number; currentRow++) {
        console.log(printRow(number));
    }
}
Matrix(3)