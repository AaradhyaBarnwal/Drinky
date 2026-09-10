

let item1 = document.querySelector('.item1');
let item2 = document.querySelector('.item2');
let item3 = document.querySelector('.item3');
let snackPrice = document.querySelector('.sna');
let btn = document.querySelector('.button');
let img = document.querySelector('.img');
let text = document.querySelector('.ready');
let stop = document.querySelector('.stop');
let resume = document.querySelector('.resume');


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

const sound = new Audio('assets/beep.mp3');

function timer() {
   sound.play();
   const priceSnack = localStorage.getItem('price2');
   const priceTop = localStorage.getItem('prices');
   const priceDrink = localStorage.getItem('price3');
   const num = Number(priceDrink);
   const num2 = Number(priceTop);
   const num3 = Number(priceSnack);

   let sum = ((num + num2 + num3)*10)*60000;
   console.log(sum);

   text.innerText = "Now you have to pay , You can pay till the order is ready";
   stop.innerText = "Get the order now?";

   setTimeout(() => {
      img.src = "assets/box.png";
      text.innerText = "And it's ready!!";
   }, sum);
   
   
}

stop.addEventListener('click',()=>{
   sound.play();
   clearTimeout();
   img.src = "assets/box.png";
   text.innerText = "And it's ready!!";
})

pricesAll();
btn.addEventListener('click',timer)