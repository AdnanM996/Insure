//Animations
window.addEventListener('load', ()=> {
    let controller = new ScrollMagic.Controller();
    let timeLine = new TimelineMax();

    timeLine
    .staggerFrom(['.header--logo, .nav--links'], 0.5, {
        opacity: 0,
        x: '-10px',
        ease: Power1.ease
    },.15)

    .staggerFrom(['#heroHeading, #heroParagraph, #heroCta'], 0.5, {
        opacity: 0,
        x: '-100%',
        ease: Power2.easeInOut
    }, 0.35)


    let scene = new ScrollMagic.Scene({
        triggerHook: 0
    })

    .setTween(timeLine)
    .addTo(controller)

    //Timeline 2
    let timeLine2 = new TimelineMax();

    timeLine2
    .from('#aboutHeader', 0.5, {
        opacity: 0,
        x: '-100%',
        ease: Power2.easeInOut
    })

    .staggerFrom(['.about--icon'], 0.5, {
        opacity: 0,
        ease: Power2.easeInOut
    }, 0.20)

    .staggerFrom(['.about--header, .about--p'], 0.5, {
        opacity: 0,
        y: '-25px',
        ease: Power2.easeInOut
    }, 0.20)

    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.about-trigger',
        triggerHook: 0
    })

    .setTween(timeLine2)
    .addTo(controller)

    //Timeline 3
    let timeLine3 = new TimelineMax();
    
    timeLine3
    .staggerFrom(['#hwwHeading, #hwwCta'], 0.5, {
        opacity: 0,
        y: '50',
        ease: Power2.ease
    }, 0.20)

    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.hww-trigger',
        triggerHook: '75px'
    })

    .setTween(timeLine3)
    .addTo(controller)
})

//Navigation
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');

close.style.display = 'none';
menu.addEventListener('click', ()=> {
    nav.classList.toggle('nav--open');

    if(nav.classList.contains('nav--open')) {
        hamburger.style.display = 'none';
        close.style.display = 'block';
    } else {
        hamburger.style.display = 'block';
        close.style.display = 'none';
    }
});