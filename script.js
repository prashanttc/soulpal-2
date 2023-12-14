gsap.to("#nav", {
    backgroundColor: "#fff",
    duration: 0.5,
    height: "70px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
},
onComplete: () => {
    // Change the text color of the h4 element to black when the animation is complete
    gsap.set("#nav h4", { color: "#000" },gsap.set("#nav a", { color: "#000" }));
},
onReverseComplete: () => {
    // Change the text color back to white when reversing the animation
    gsap.set("#nav h4", { color: "#fff" },gsap.set("#nav a", { color: "#fff" }));
}
})

gsap.to("#main", {
    backgroundColor: "#fff ",
    scrollTrigger: {
        trigger: "#main",
        scroll: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function (dets) {
    crsr.style.top = dets.y + "px"
    crsr.style.left = dets.x + "px"
    blur.style.top = dets.y - 180 + "px"
    blur.style.left = dets.x - 180 + "px"
})


gsap.from("#about-us img , #about-us-1", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: " #about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub : 5
    }
})

gsap.from(".card", {
    y: 50,
    scale : 0.8 ,
    opacity: 0,
    duration:10,
    scrollTrigger: {
        trigger: " .card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub : true
    }
})

gsap.from("#colon1", {
    y : -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroll: "body",
        start : "top 50%",
        end :" top 45%",
       scrub : 2
    }
})
gsap.from("#colon2", {
    y : 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroll: "body",
        start : "top 50%",
        end :" top 45%",
        scrub : 2
    }
})