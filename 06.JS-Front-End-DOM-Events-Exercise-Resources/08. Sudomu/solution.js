function solve() {
    let quickCheck = document.getElementsByTagName('button')[0];
    let clear = document.getElementsByTagName('button')[1];
    let table = document.getElementsByTagName('table')[0]
    let inputArray = Array.from(document.getElementsByTagName('input'));
    let result = document.getElementById("check").children[0];

    const requiredSum = 6;
    const checker = (x1, x2, x3, noMismatchFound) => x1 + x2 + x3 ===
        requiredSum && noMismatchFound;

    quickCheck.addEventListener('click', () => {
        let nums = inputArray.map(x => Number(x.value));
        let noMismatchFound = true;

        noMismatchFound = checker(nums[0], nums[1], nums[2], noMismatchFound);
        noMismatchFound = checker(nums[3], nums[4], nums[5], noMismatchFound);
        noMismatchFound = checker(nums[6], nums[7], nums[8], noMismatchFound);
        noMismatchFound = checker(nums[0], nums[3], nums[6], noMismatchFound);
        noMismatchFound = checker(nums[1], nums[4], nums[7], noMismatchFound);
        noMismatchFound = checker(nums[2], nums[5], nums[8], noMismatchFound);

        if (noMismatchFound) {
            table.style.border = "2px solid green";
            result.style.color = "green";
            result.textContent = "You solve it! Congratulations!";
        } else {
            table.style.border = "2px solid red";
            result.style.color = "red";
            result.textContent = "NOP! You are not done yet...";
        }
    })

    clear.addEventListener('click', () => {
        table.style.border = "none"
        result.textContent = ''
        for (const cell of inputArray) {
           cell.value = '';
        }
    })
}