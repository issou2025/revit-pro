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
    if(this.scrollY >= 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)'
        header.style.backdropFilter = 'blur(10px)'
    } else {
        header.style.backgroundColor = ''
        header.style.backdropFilter = ''
    }
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
    duration: 2000,
    delay: 400,
})

// Hero Section
sr.reveal('.hero__content', {})
sr.reveal('.hero__image', {delay: 600})

// Features Section
sr.reveal('.feature-card', {
    interval: 100,
    distance: '20px',
    origin: 'bottom'
})

// Tutorial Cards
sr.reveal('.tutorial-card', {
    interval: 200,
    distance: '30px',
    origin: 'bottom'
})

// Stats Section
sr.reveal('.stat__item', {
    interval: 100,
    distance: '20px',
    origin: 'bottom'
})

// CTA Section
sr.reveal('.cta__content', {
    distance: '40px',
    origin: 'bottom'
})

// Active Link Highlighting
function highlightCurrentSection() {
    const sections = document.querySelectorAll('section[id]')
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__link[href*=' + sectionId + ']')?.classList.add('active')
        } else {
            document.querySelector('.nav__link[href*=' + sectionId + ']')?.classList.remove('active')
        }
    })
}
window.addEventListener('scroll', highlightCurrentSection)

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute('href'))?.scrollIntoView({
            behavior: 'smooth'
        })
    })
})

// Feature Card Hover Effects
const featureCards = document.querySelectorAll('.feature-card')
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('i').style.transform = 'scale(1.2) rotate(5deg)'
    })
    card.addEventListener('mouseleave', () => {
        card.querySelector('i').style.transform = 'scale(1) rotate(0deg)'
    })
})

// Tutorial Card Video Preview
const tutorialCards = document.querySelectorAll('.tutorial-card')
tutorialCards.forEach(card => {
    const overlay = card.querySelector('.tutorial__overlay')
    const playButton = overlay?.querySelector('i')
    
    if(playButton) {
        playButton.addEventListener('click', () => {
            // Add video preview functionality here
            console.log('Play video preview')
        })
    }
})

// Stats Counter Animation
const stats = document.querySelectorAll('.stat__item h3')
const animateStats = () => {
    stats.forEach(stat => {
        const target = parseInt(stat.textContent)
        let current = 0
        const increment = target / 50
        const updateCount = () => {
            if(current < target) {
                current += increment
                stat.textContent = Math.ceil(current) + '+'
                setTimeout(updateCount, 20)
            } else {
                stat.textContent = target + '+'
            }
        }
        updateCount()
    })
}

// Trigger stats animation when section is in view
const statsSection = document.querySelector('.stats')
if(statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                animateStats()
                observer.unobserve(entry.target)
            }
        })
    }, {threshold: 0.5})

    observer.observe(statsSection)
}

// Button Hover Effects
const buttons = document.querySelectorAll('.button')
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        const icon = button.querySelector('i')
        if(icon) {
            icon.style.transform = 'translateX(5px)'
        }
    })
    button.addEventListener('mouseleave', () => {
        const icon = button.querySelector('i')
        if(icon) {
            icon.style.transform = 'translateX(0)'
        }
    })
})

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Ici, vous pouvez ajouter votre logique d'envoi d'email
        // Par exemple, en utilisant un service comme EmailJS ou en envoyant à votre backend

        // Animation de confirmation
        const button = contactForm.querySelector('button');
        const originalText = button.textContent;
        button.textContent = 'Message envoyé !';
        button.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
            contactForm.reset();
        }, 3000);
    });
}

// Enhanced ScrollReveal Animations
ScrollReveal().reveal('.contact-card', {
    delay: 200,
    distance: '20px',
    origin: 'bottom',
    interval: 100
});

ScrollReveal().reveal('.contact-form', {
    delay: 400,
    distance: '30px',
    origin: 'right'
});

ScrollReveal().reveal('.map__container', {
    delay: 600,
    distance: '40px',
    origin: 'bottom'
});

// Enhanced Hover Effects
document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Form Input Animations
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
}); 