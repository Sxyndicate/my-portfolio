/* --- Menu Show Y Hidden     ---*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* --- Menu Show    ---*/
/* validatte if constant exists    ---*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* --- Menu hidden    ---*/
/* Validate if constant exists   ---*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* --- Remove menu moboile    ---*/


/* --- Acordion Skills    ---*/


/* --- Qualifications tab    ---*/


/* --- Services Modal    ---*/
