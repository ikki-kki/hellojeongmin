

$(document).ready(function () {
    // init controller
    var controller = new ScrollMagic.Controller();

    // This is used to create the menu classes changing with the user scrolling
    // I think this could be done in a loop for better code
    new ScrollMagic.Scene({
        triggerElement: ".section-1",
        duration: $('section').height(),
        triggerHook: .3,
        reverse: true
    })
        .setClassToggle(".link1", "active")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".section-2",
        duration: $('section').height(),
        triggerHook: .3,
        reverse: true
    })
        .setClassToggle(".link2", "active")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".section-3",
        duration: $('section').height(),
        triggerHook: .3,
        reverse: true
    })
        .setClassToggle(".link3", "active")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".section-4",
        duration: $('section').height(),
        triggerHook: .3,
        reverse: true
    })
        .setClassToggle(".link4", "active")
        .addTo(controller);


    // Create Basic Section Animation
    //loop through each .basic .section element
    $('.basic .wrapper').each(function () {

        var line = $('.line', this);

        var timeline = new TimelineMax()
            .add(TweenMax.to(line, 1, { width: "700px", delay: 0.1 }));

        var sectionScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            duration: '90%', // $('section').height()
            triggerHook: .28,
            reverse: true
        })
            .setClassToggle(this, 'fade-in')
            .setTween(timeline)
            .addTo(controller);
    });

    // Create Advanced Section Animation
    var advSection = $('.advanced .wrapper'),
        image = $('.advanced .image'),
        span = $('.advanced span');

    var timelineAdvanced = new TimelineMax()
        .add([
            TweenMax.from(image, 1, { opacity: 0, x: -200, delay: 0.3 }),
            TweenMax.from(span, 1, { opacity: 0, x: -200 })
        ]);

    console.log(advSection);

    var advScene = new ScrollMagic.Scene({
        triggerElement: '.advanced',
        duration: '150%',
        triggerHook: 0.5,
        reverse: true
    })
        .setClassToggle('.advanced .wrapper', 'fade-in')
        // .addIndicators()
        .setTween(timelineAdvanced)
        .addTo(controller);

});



