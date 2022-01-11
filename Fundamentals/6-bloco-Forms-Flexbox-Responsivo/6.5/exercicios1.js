const button = document.querySelector('#btn')

button.addEventListener('click', function(){
    const nav = document.querySelector('#nav')
    nav.classList.toggle('active');
})