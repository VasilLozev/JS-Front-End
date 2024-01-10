function solve() {

  let resultTextArea = document.getElementsByTagName('textarea')[1]
  let buy = document.getElementsByTagName('button')[1]
  let generate = document.getElementsByTagName('button')[0]
  let tbody = document.getElementsByTagName('tbody')[0]

  generate.addEventListener('click', generateClick)
  buy.addEventListener('click', buyClick)


  function generateClick() {
    let inputTextArea = document.getElementsByTagName('textarea')[0]
    let parsedArray = JSON.parse(inputTextArea.value)

    for (const furniture of parsedArray) {
      let tableRow = tbody.insertRow(-1);

      let tdImage = document.createElement('td')
      let tdName = document.createElement('td')
      let tdPrice = document.createElement('td')
      let tdFactor = document.createElement('td')
      let tdMark = document.createElement('td')

      tableRow.appendChild(tdImage)
      tableRow.appendChild(tdName)
      tableRow.appendChild(tdPrice)
      tableRow.appendChild(tdFactor)
      tableRow.appendChild(tdMark)

      let image = document.createElement('img');
      image.src = furniture.img;
      tdImage.appendChild(image)

      tdName.innerText = furniture.name;
      tdPrice.innerText = furniture.price;
      tdFactor.innerText = furniture.decFactor;

      let checkBox = document.createElement('input');
      checkBox.type = 'checkbox';

      tdMark.appendChild(checkBox);
    }
  }

  function buyClick() {
    let boughtItems = [];
    let totalPrice = 0;
    let avgDecFactor = 0;
    let result = [];

    let tableRows = tbody.children;
    for (let i = 0; i < tableRows.length; i++) {

      let name = tableRows[i].children[1].textContent;
      let price = Number(tableRows[i].children[2].textContent);
      let decFac = Number(tableRows[i].children[3].textContent);
      let mark = tableRows[i].children[4].children[0];

      if (mark.checked) {
        totalPrice += price;
        avgDecFactor += decFac;
        boughtItems.push(name);
      }
    }

    if(totalPrice && avgDecFactor && boughtItems.length){
      result.push(`Bought furniture: ${boughtItems.join(', ')}`);
      result.push(`Total price: ${totalPrice.toFixed(2)}`);
      result.push(`Average decoration factor: ${avgDecFactor / boughtItems.length}`);

      resultTextArea.textContent = result.join('\n');
    }

  }

}