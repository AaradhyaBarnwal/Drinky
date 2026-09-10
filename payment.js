

let item1 = document.querySelector('.item1');
let item2 = document.querySelector('.item2');
let item3 = document.querySelector('.item3');
let snackPrice = document.querySelector('.sna');
let btn = document.getElementsByTagName(button);


function pricesAll() {
   const snackOrder = localStorage.getItem('currentSnack');
   if (snackOrder) {
      item1.innerText = snackOrder;
   } else {
      item1.innerText = 'No order selected';
   }

   const topOrder = localStorage.getItem('currentTop')
   if (topOrder) {
      item2.innerText = topOrder;
   } else {
      item2.innerText = 'No order selected';
   }

   const drinkOrder = localStorage.getItem('currentDrink')
   if (drinkOrder) {
      item3.innerText = drinkOrder;
   } else {
      item3.innerText = 'No order selected';
   }
}

function timer() {
   const priceTop = localStorage.getItem('prices');
   console.log(priceTop);

}

pricesAll();
btn.addEventLi