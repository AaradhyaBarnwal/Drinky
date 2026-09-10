let to = document.querySelector('#top1');
let to1 = document.querySelector('#top2');
let to2 = document.querySelector('#top3');
let to3 = document.querySelector('#top4');
let to4 = document.querySelector('#top5');

let toAll = document.querySelectorAll('.top')

let btn = document.querySelector('.btn');

let price3 = document.querySelector('.price3');

btn.addEventListener('click',()=>{
    window.location.href = 'snack.html';
    console.log('f');
})

to.addEventListener('click',()=>{
    price3.innerHTML = `<p>2 sun</p>`
})

to1.addEventListener('click',()=>{
    price3.innerHTML = `<p>2.5 sun</p>`
})

to2.addEventListener('click',()=>{
    price3.innerHTML = `<p>2 sun</p>`
})

to3.addEventListener('click',()=>{
    price3.innerHTML = `<p>5 sun</p>`
})

to4.addEventListener('click',()=>{
    price3.innerHTML = `<p>3 sun</p>`
})

toAll.forEach(top => {
    top.addEventListener('click',function(){
        const p = this.querySelector('p').innerText;
        const n = this.querySelector('h4').innerText;
        localStorage.setItem(`prices` , `${p}`);
        localStorage.setItem(`currentTop`, ` ${n} - ${p}`);
    })
});
