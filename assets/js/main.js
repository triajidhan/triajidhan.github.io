/* =================== MENU SHOW Y HIDDEN =================== */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* ========= MENU SHOW ========= */
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* ========= MENU HIDDEN ========= */
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* =================== REMOVE COLOR MENU MOBILE =================== */
const navItemColor = document.querySelectorAll('.nav__item-color')

function linkActionColor() {
    const navMenuColor = document.getElementById('nav-menu-color')
    // When we click on each nav__link, we remove the show-menu class
    navMenuColor.classList.remove('show-menu-color')
}

navItemColor.forEach(n => n.addEventListener('click', linkActionColor))
navToggle.addEventListener('click', linkActionColor)

/* =================== REMOVE MENU MOBILE =================== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenuColor = document.getElementById('nav-menu-color')
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
    navMenuColor.classList.remove('show-menu-color')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* =================== MENU COLOR SHOW Y HIDDEN =================== */
const navMenuColor = document.getElementById('nav-menu-color'),
    navToggleColor = document.getElementById('change-color'),
    navCloseColor = document.getElementById('nav-close-color')

/* ========= MENU COLOR SHOW ========= */
/* Validate if constant exists */
if (navToggleColor) {
    navToggleColor.addEventListener('click', () => {
        navMenuColor.classList.add('show-menu-color')
    })
}

/* ========= MENU COLOR HIDDEN ========= */
/* Validate if constant exists */
if (navCloseColor) {
    navCloseColor.addEventListener('click', () => {
        navMenuColor.classList.remove('show-menu-color')
    })
}


/* =================== CHANGE COLOR =================== */
const redColor = 'red-color',
    greenColor = 'green-color',
    purpleColor = 'purple-color',
    pinkColor = 'pink-color',
    blueButton = document.getElementById('blue-button'),
    redButton = document.getElementById('red-button'),
    greenButton = document.getElementById('green-button'),
    purpleButton = document.getElementById('purple-button'),
    pinkButton = document.getElementById('pink-button')

blueButton.addEventListener('click', () => {
    document.body.classList.remove(redColor, greenColor, purpleColor, pinkColor)
})
redButton.addEventListener('click', () => {
    document.body.classList.remove(redColor, greenColor, purpleColor, pinkColor)
    // Add or remove the dark / icon theme
    document.body.classList.add(redColor)
})
greenButton.addEventListener('click', () => {
    document.body.classList.remove(redColor, greenColor, purpleColor, pinkColor)
    // Add or remove the dark / icon theme
    document.body.classList.add(greenColor)
})
purpleButton.addEventListener('click', () => {
    document.body.classList.remove(redColor, greenColor, purpleColor, pinkColor)
    // Add or remove the dark / icon theme
    document.body.classList.add(purpleColor)
})
pinkButton.addEventListener('click', () => {
    document.body.classList.remove(redColor, greenColor, purpleColor, pinkColor)
    // Add or remove the dark / icon theme
    document.body.classList.add(pinkColor)
})

/* =================== ACCORDIAN SKILLS =================== */
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/* =================== QUALIFICATIONS TABS =================== */
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/* =================== SERVICES MODAL =================== */
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/* =================== SCROLL SECTIONS ACTIVE LINK =================== */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* =================== CHANGE BACKGROUND HEADER =================== */
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* =================== SHOW SCROLL UP =================== */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* =================== DARK LIGHT THEME =================== */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* =================== CONTACT FORM =================== */
const scriptURL = 'https://script.google.com/macros/s/AKfycbxMJighnQ4-jAA8yM0SgDFuk-kMnoesQ7z35kbI3NfVNioFvvF0P139S3LNm17e8lPuRQ/exec'
const form = document.forms['submit-to-google-sheet']
const btnSend = document.querySelector('.contact__button')
const btnLoading = document.querySelector('.contact__button-loading')
const contactAlert = document.querySelector('.contact__alert')

form.addEventListener('submit', e => {
    e.preventDefault()
    // when click submit
    btnLoading.classList.add('show-button-contact-loading')
    btnSend.classList.add('hidden-button-contact')
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            btnLoading.classList.remove('show-button-contact-loading')
            btnSend.classList.remove('hidden-button-contact')
            contactAlert.classList.add('show-contact-alert')
            form.reset()
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})

/* ========= MENU HIDDEN ALERT ========= */
/* Validate if constant exists */
const alertClose = document.getElementById('contact-alert-close')

if (alertClose) {
    alertClose.addEventListener('click', () => {
        contactAlert.classList.remove('show-contact-alert')
    })
}


/* =================== SCROLL REVEAL ANIMATION =================== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    reset: true
})

/* SCROLL HOME */
sr.reveal('.home__title', {})
sr.reveal('.home__title-name', { delay: 200 })
sr.reveal('.home__data', { delay: 400 })
sr.reveal('.home__scroll', { delay: 600 })
sr.reveal('.home__img', { origin: 'right', distance: '15px', delay: 600 })
sr.reveal('.home__social-icon', { delay: 600, interval: 200 })

/* SCROLL ABOUT */
sr.reveal('.about__img', { origin: 'left', distance: '15px', delay: 500 })
sr.reveal('.about__description', { delay: 300 })
sr.reveal('.about__buttons', { delay: 400 })

/* SCROLL SKILLS */
sr.reveal('.skills__header', { delay: 100, interval: 200 })
sr.reveal('.skills__list', { delay: 200, interval: 200 })

/* SCROLL QUALIFICATION */
sr.reveal('.qualification__tabs', { delay: 100 })
sr.reveal('.qualification__section', { delay: 400 })

/* SCROLL SERVICE */
sr.reveal('.services__title', { delay: 400 })
sr.reveal('.services__icon', { delay: 200 })
sr.reveal('.services__button', { delay: 600 })

/* SCROLL PORTFOLIO */
sr.reveal('.portfolio__container', { delay: 200 })

/* SCROLL PROJECT */
sr.reveal('.project__img', { origin: 'rigth', distance: '15px', delay: 500 })
sr.reveal('.project__title', { origin: 'left', distance: '15px', delay: 200 })
sr.reveal('.project__description', { origin: 'left', distance: '15px', delay: 300 })
sr.reveal('.project__button', { origin: 'left', distance: '15px', delay: 400 })

/* SCROLL CONTACT */
sr.reveal('.contact__information', { delay: 200, interval: 100 })
sr.reveal('.contact__content', { delay: 400, interval: 100 })
sr.reveal('.contact__button', { origin: 'left', distance: '15px', delay: 400 })