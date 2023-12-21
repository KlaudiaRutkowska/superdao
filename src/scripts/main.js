import '../styles/style.scss'

const button = document.querySelector('#hamburger')
const nav = document.querySelector('nav')

button.addEventListener('click', function() {
    button.classList.toggle('open')
    nav.classList.toggle('opened')
})


//intersection observer
const hiddenElements = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
})

window.addEventListener('load', () => {
    hiddenElements.forEach((element) => {
        observer.observe(element)
    })
})
