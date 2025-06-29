/*==================== MOBILE MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const header = document.querySelector('.header')
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== NEWSLETTER FORM ====================*/
const newsletterForm = document.querySelector('.newsletter__form')
if(newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const email = newsletterForm.querySelector('input[type="email"]').value
        
        // Here you would typically send this to your backend
        console.log('Newsletter signup:', email)
        
        // Show success message
        alert('Thank you for subscribing to our newsletter!')
        newsletterForm.reset()
    })
}

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.hero__content, .about-hero__content, .features-hero__content`)
sr.reveal(`.feature-card, .technology__card, .tool-card`, {interval: 100})
sr.reveal(`.workflow__steps, .timeline__item`, {interval: 200})
sr.reveal(`.statistics__item`, {interval: 100})
sr.reveal(`.bim-card, .standards-card, .tool-item`, {interval: 100})
sr.reveal(`.workflow-step`, {interval: 200}) 