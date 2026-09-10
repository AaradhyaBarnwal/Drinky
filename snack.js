let snack = document.querySelector('.snack');
let btn = document.querySelector('.btn');
let input = document.querySelector('.sna');
let snack1 = document.querySelector('#a');
let snack2 = document.querySelector('#b');
let snack3 = document.querySelector('#c');
let snack4 = document.querySelector('#d');
let snack5 = document.querySelector('#e');
let snack6 = document.querySelector('#f');
let snack7 = document.querySelector('#g');
let snack8 = document.querySelector('#h');
let snack9 = document.querySelector('#i');
let snack10 = document.querySelector('#j');
let price1 = document.querySelector('.st');
let snacksi = document.querySelectorAll('.snack');

const sound = new Audio('assets/alert_sound.mp3');

btn.addEventListener('click',()=>{
    window.location.href = 'payment.html';
})

snack1.addEventListener('click',()=>{
    input.innerHTML = `<p>3 suns</p>`;
    sound.play();

})

snack2.addEventListener('click',()=>{
    input.innerHTML = `<p>2 suns</p>`;
    sound.play();

})

snack3.addEventListener('click',()=>{
    sound.play();
    input.innerHTML = `<p>4 suns</p>`;
})
snack4.addEventListener('click',()=>{
    sound.play();
    input.innerHTML = `<p>5 suns</p>`;
})
snack5.addEventListener('click',()=>{
    sound.play();
    input.innerHTML = `<p>4 suns</p>`;
})
snack6.addEventListener('click',()=>{
    sound.play();
    input.innerHTML = `<p>3 suns</p>`;
})
snack7.addEventListener('click',()=>{
    sound.play();
    input.innerHTML = `<p>4 suns</p>`;
})
snack8.addEventListener('click',()=>{
    sound.play();
    input.innerHTML = `<p>2 suns</p>`;
})
snack9.addEventListener('click',()=>{
    sound.play();
    input.innerHTML = `<p>1 suns</p>`;
})

snack10.addEventListener('click',()=>{
    sound.play();
    input.innerHTML = `<p>3 suns</p>`; 
})

snacksi.forEach(snack => {
    snack.addEventListener('click',function(){
        const p = this.querySelector('p').innerText;
        const n = this.querySelector('h4').innerText;
        const s = this.querySelector('span').innerText;
        

        localStorage.setItem(`currentSnack`, ` ${n} - ${p}`)
        localStorage.setItem(`price2`, `${s}`)
    })
});
