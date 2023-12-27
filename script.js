const menu = document.querySelector('.menu');
const mobile_bar = document.querySelector('.menu__bar');

mobile_bar.addEventListener('click', ()=>{
    mobile_bar.classList.toggle('is-active');
    menu.classList.toggle('active');
})