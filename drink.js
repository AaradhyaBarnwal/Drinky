let base = document.querySelector('.btn');

let drink1 = document.querySelector('#drink1');
let drink2 = document.querySelector('#drink2');
let drink3 = document.querySelector('#drink3');
let drink4 = document.querySelector('#drink4');
let drink5 = document.querySelector('#drink5');

let price = document.querySelector('.price');

base.addEventListener('click',()=>{
    window.location.href = 'top.html';
    console.log('f');
})

drink1.addEventListener('click',()=>{
    price.innerHTML = `<p>1 sun</p>`
})

drink2.addEventListener('click',()=>{
    price.innerHTML = `<p>2 sun</p>`
})

drink3.addEventListener('click',()=>{
    price.innerHTML = `<p>2 sun</p>`
})

drink4.addEventListener('click',()=>{
    price.innerHTML = `<p>3 sun</p>`
})

drink5.addEventListener('click',()=>{
    price.innerHTML = `<p>4 sun</p>`
})