let bas = document.querySelector('.btn');

let bases = document.querySelectorAll('.base');

let drink1 = document.querySelector('#drink1');
let drink2 = document.querySelector('#drink2');
let drink3 = document.querySelector('#drink3');
let drink4 = document.querySelector('#drink4');
let drink5 = document.querySelector('#drink5');

let price = document.querySelector('.price');

const sound = new Audio('assets/beep.mp3');


bas.addEventListener('click',()=>{
    window.location.href = 'top.html';
    sound.play();
    console.log('f');
})

drink1.addEventListener('click',()=>{
    sound.play();
    price.innerHTML = `<p>1 sun</p>`
})

drink2.addEventListener('click',()=>{
    sound.play();
    price.innerHTML = `<p>2 sun</p>`
})

drink3.addEventListener('click',()=>{
    sound.play();
    price.innerHTML = `<p>2 sun</p>`
})

drink4.addEventListener('click',()=>{
    sound.play();
    price.innerHTML = `<p>3 sun</p>`
})

drink5.addEventListener('click',()=>{
    price.innerHTML = `<p>4 sun</p>`
})

bases.forEach(base => {
    base.addEventListener('click',function(){
        const p = this.querySelector('p').innerText;
        const n = this.querySelector('h4').innerText;
        const s = this.querySelector('span').innerText;
        

        localStorage.setItem(`price3`,`${s}`)
        localStorage.setItem(`currentDrink`, ` ${n} - ${p}`)
    })
});
