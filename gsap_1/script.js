var t1=gsap.timeline()

t1.from(".nav img,.nav h3,.nav h4,.nav button",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.5
})
t1.from(".main h1",{
    y: -100,
    opacity:0,
    stagger:0.3
})
t1.from(".main>img",
{
    z:100,
    opacity:0
})
t1.from("#down",{
    y:5,
    repeat:-1,
    duration:1,
    yoyo:true
})