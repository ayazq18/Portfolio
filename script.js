Shery.mouseFollower();
Shery.makeMagnet(".port-logo, .hire-btn, .fa-circle-chevron-up")
Shery.hoverWithMediaCircle(".button, .hire-me",
{videos:["../CV.mp4", "../LinkedIn.mp4", "../Feedback.mp4"]})
var timeLine = gsap.timeline();
timeLine.from(".flex, .port-logo, .hire-btn",{
    y:-100,
    opacity:0,
    duration:1,
})

timeLine.from("#img1",{
    opacity:0,
    x:-600,
    duration:1.5,
})

timeLine.from(".home-indata, .fa-circle-chevron-up",{
    opacity:0,
    x:200,
    duration:1,
})

timeLine.to(".fa-circle-chevron-up, .port-logo",{
    y:-10,
    duration:1,
    repeat:-1,
    yoyo:true,
    ease:Power2,
})

timeLine.from('.project-box',{
    ScrollTrigger: ".project-box",
    y:-400,
    opacity:0,
    pin:true,
    duration:1,
    stagger:.5,
    scrub:true,
})