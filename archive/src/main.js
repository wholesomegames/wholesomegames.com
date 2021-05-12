import "/style.scss";

import { phrases } from "/data/test";
// import { phrases } from '/data/test-ac';

import { randInt, sample, sampleProp, shuffle } from "./common/common";
import images from "./img/*.png";
import svgs from "./img/icons/*.svg";
import pngs from "./img/icons/*.png";

import gsap from "gsap";


import "@fortawesome/fontawesome-free/css/all.min.css";

if (document.readyState !== "loading") init();
else document.addEventListener("DOMContentLoaded", init);


let wh, date, cf, popp, popy, drawCloud;


function init() {
    //testSvg();

    wh = document.querySelector('#wholesome');
    date = document.querySelector('#date');
    cf = document.querySelector('#cloud_f');
    popp = document.querySelector('#pop_pink');
    popy = document.querySelector('#pop_yellow');
    drawCloud = document.querySelector('.cloud-path-solid');

    setTimeout(testSvg, 200);
    addHover();

}

function addHover() {
    const form = document.querySelector('#mc_embed_signup');
    const lily = document.querySelector('.lily');
    form.addEventListener("mouseover", () => {   
      lily.classList.add("wiggle");  
    }, false);

    form.addEventListener("mouseleave", () => {   
        lily.classList.remove("wiggle");  
      }, false);
    
}

function testSvg() {





    drawCloud.classList.add('animate-draw-cloud');
    // setTimeout(() => drawCloud.classList.add('animate-draw-cloud'), 30);


    let d1 = 0.2;


    // gsap.fromTo(wh, {scale: 0}, {delay: d1 + 0.2, duration: 0.4, ease: "power1.out", scale: 1});
    // gsap.fromTo(wh, {opacity: 0}, {delay: 0.2, duration: 0.6, ease: "power1.in", opacity: 1});
    wh.classList.add('show-a');

    setTimeout(() => {
        cf.classList.add('show-b');
        // gsap.fromTo(cf, { y:60}, { duration: 0.5, ease: "sine.out", y:-10});
        gsap.fromTo(cf, { y:10}, { delay: 0.2, duration: 0.5, ease: "sine.out", y:-10});

    }, 100);


    // setTimeout(() => {
    //     // gsap.fromTo(cf, { y:60}, { duration: 0.5, ease: "sine.out", y:-10});
    //     gsap.fromTo(cf, { y:-15}, { duration: 1.5, ease: "sine.inOut", y: -10, repeat:-1, yoyo:true});

    // }, 2000);

    // let cl = document.querySelector('#cloud_rear');
    // gsap.to(cl, 1.5, {delay:1, drawSVG:'0%',  strokeDashoffset:3, ease: "expo.inOut"})

    // gsap.fromTo(cf, {scale: 0.8}, { delay: 0.4, duration: 0.4, ease: "back.out(2.4)", scale: 1,  transformOrigin:"50% 50%"});
    // gsap.fromTo(cf, {scale: 0.8}, { delay: 0.4, duration: 0.4, ease: "back.out(2.4)", scale: 1,  transformOrigin:"50% 50%"});
    // gsap.fromTo(cf, {opacity: 0, y:40}, { delay: d1 + 10, duration: 0.4, ease: "power1.out", opacity: 1, y:0});
    // gsap.fromTo(cf, {opacity: 0, y:40}, { delay: d1 + 10, duration: 0.4, ease: "power1.out", opacity: 1, y:0});



    // gsap.fromTo(popp, {scale: 0}, { delay: 0.4, duration: 0.4, ease: "back.out(2.4)", scale: 1, transformOrigin:"100% 100%"});
    // gsap.fromTo(popy, {scale: 0}, { delay: 0.5, duration: 0.4, ease: "back.out(2.4)", scale: 1, transformOrigin:"100% 100%"});

    
    let popDelay = d1 + 0.2; //0.4 // 0.6
    // gsap.fromTo(popp, {scale: 0}, { delay: popDelay, duration: 0.4, ease: "back.out(2.4)", scale: 1, transformOrigin:"100% 100%"});
    // gsap.fromTo(popy, {scale: 0}, { delay: popDelay + 0.1, duration: 0.4, ease: "back.out(2.4)", scale: 1, transformOrigin:"100% 100%"});
    gsap.fromTo(popp, {scale: 0, opacity: 1}, { delay: popDelay, duration: 0.4, ease: "back.out(2.5)", scale: 1, transformOrigin:"100% 100%", opacity: 1});
    gsap.fromTo(popy, {scale: 0, opacity: 1}, { delay: popDelay + 0.1, duration: 0.4, ease: "back.out(2.5)", scale: 1, transformOrigin:"100% 100%", opacity: 1});


    // gsap.fromTo(popp, {scale: 0}, { delay: 0.4, duration: 0.4, ease: "back.out(2.4)", scale: 1, svgOrigin: "00 50 ", repeat: -1});
    // gsap.fromTo(popy, {scale: 0}, { delay: 0.5, duration: 0.4, ease: "back.out(2.4)", scale: 1, svgOrigin: "80 50 ", repeat: -1});


    // gsap.fromTo(date, 1.5, {opacity:0, x: 30}, {delay: d1 + 1, opacity: 1, x: 0, ease: "power4.out"});

    // gsap.fromTo(date, 1.5, {opacity:0, x: 30}, {delay: d1 + 0.5, opacity: 1, x: 0, ease: "power4.out"});


    // gsap.fromTo(date, 1.5, {opacity:0, x: 30, y: -20}, {delay: d1 + 1, opacity: 1, x: 0, y: -20, ease: "power4.out"});

    gsap.fromTo(date, 1.5, {opacity:0, x: 30, y: -20}, {delay: d1 + 0.7, opacity: 1, x: 0, y: -20, ease: "power4.out"});


}


let wobblySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 397.82 50.55" fill="currentColor" width="100%" height="100%" preserveAspectRatio="none"><path d="M45.59,50.55c9.46-.1,295.42-1,315.1-.46a62,62,0,0,0,19.36-2.76c7.76-2.39,10.61-5,12-6.46a22.19,22.19,0,0,0,5.53-12,26,26,0,0,0-.92-11.06c-.22-.82-1.78-6.59-4.61-10.14C386.54.81,370.75.55,364.38.32,338.57-.6,67,.77,54.8.77c-14.74,0-26.73,0-35.94,1.85C16.32,3.12,2.61,6.89.42,18.28A34.77,34.77,0,0,0,.51,29.45a25.53,25.53,0,0,0,3.8,10.14,21.1,21.1,0,0,0,5.18,5.6c3.51,2.59,7.1,3.18,12.15,4a64,64,0,0,0,7.08.74C36.17,50.38,39.9,50.6,45.59,50.55Z"></path></svg>`;



