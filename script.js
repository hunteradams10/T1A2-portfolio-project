
// Variable assignments to get two elements from the HTML

const toggleButton = document.getElementsByClassName('toggle-button') [0]
const navbarLinks = document.getElementsByClassName('navbar-links') [0]

// a function to say that when the hamburger menu is clicked, the "active" CSS condition is met.

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})