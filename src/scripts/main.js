import '../styles/style.scss'

const button = document.querySelector('#hamburger')
const nav = document.querySelector('nav')

button.addEventListener('click', function() {
    button.classList.toggle('open')
    nav.classList.toggle('opened')
})