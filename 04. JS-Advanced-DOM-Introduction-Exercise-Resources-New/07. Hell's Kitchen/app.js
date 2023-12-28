function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let text = JSON.parse(document.querySelector('#inputs textarea').value)
      let restaurantObj = {}
      let restArray = []
      for (const restaurant of text) {
         let arrRes = restaurant.split(' - ')
         let resName = arrRes[0]
         let arrWork = arrRes[1].split(', ')
         let workerObj = {}
         let arrWorkers = []
         let check = true;
         for (const alreadyAdded of restArray) {
            if (alreadyAdded.resName === resName) {
               for (const worker of arrWork) {
                  let name = worker.split(' ')[0]
                  let salary = worker.split(' ')[1]
                  workerObj = { name, salary }
                  alreadyAdded.arrWorkers.push(workerObj)
               }
               check = false
            }
         }
         if (check === true) {
            for (const worker of arrWork) {
               let name = worker.split(' ')[0]
               let salary = worker.split(' ')[1]
               workerObj = { name, salary }
               arrWorkers.push(workerObj)
            }
            let avgSalary = 0
            let bestSalary = 0
            restaurantObj = { resName, arrWorkers, avgSalary, bestSalary }
            restArray.push(restaurantObj);
         }
      }
      for (let restaurant of restArray) {
         let avgSalary = 0;
         let count = 0;
         for (const worker of restaurant.arrWorkers) {
            avgSalary += Number(worker.salary);
            count++
         }

         let bestSalary = Number(restaurant.arrWorkers.sort(function(a, b){return b.salary-a.salary})[0].salary).toFixed(2)
         avgSalary = Number(avgSalary / count).toFixed(2)
         restaurant.avgSalary = avgSalary;
         restaurant.bestSalary =  bestSalary;
         console.log(restaurant.resName)
         console.log(restaurant.avgSalary)

      }
      let bestRestaurant = restArray.sort(function(a, b){return b.avgSalary-a.avgSalary})[0]
      console.log(bestRestaurant)
      document.querySelector("#outputs #bestRestaurant p").textContent = `Name: ${bestRestaurant.resName} Average Salary: ${bestRestaurant.avgSalary} Best Salary: ${bestRestaurant.bestSalary}`
      let workersResult = []
      let bestArray = bestRestaurant.arrWorkers.sort(function(a, b){return b.salary-a.salary})
      for (const worker of bestArray) {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      }
      document.querySelector("#workers p").textContent =
         workersResult.join(' ')
   }
}
