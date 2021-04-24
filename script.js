let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to('.rock', 3, {y: -600})
    .to('.girl', 3, {y: -400}, '-=3')
    .to('.bg', 3)