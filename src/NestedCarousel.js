import React, { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';

function NestedCarousel() {
    useEffect(() => {
        const carousels = document.querySelectorAll(".inner-glide");
        const carouselInits = [];
        var options = {
            type: 'slider',
            gap: 0,
            startAt: 0,
            autoplay: false,
            bound: false,
            rewind: false,
            swipeThreshold: false,
            dragThreshold: false,
            perView: 1,
            peek: {
                before: 0,
                after: 0,
            }
        };

        const outerGlide = new Glide('.outer-glide', options);

        // Initialize the child carousels first
        Object.values(carousels).map(carousel => {
            const glide = new Glide(carousel, options);
            glide.on('move', function() {
                outerGlide.disable();
                console.log('outer disabled')
            });
            glide.on('move.after', function() {
                outerGlide.enable();
                console.log('outer mounted')
            })
            glide.mount();
            carouselInits.push(glide);
        });

        // Initialize the parent carousel
        outerGlide.mount();

        //Reset all child carousel to slide 0 when parent slides are clicked
        outerGlide.on('move', function() {
            carouselInits.forEach(function(slide) {
                slide.update({ startAt: 0 })
            })
        });

    }, []);

    return (
        <div className="glide outer-glide">
            <div data-glide-el="track" className="glide__track">
                <ul className="glide__slides">
                    <li className="glide__slide">
                        {/* Inner slides start */}
                        <div className="glide inner-glide">
                            <div data-glide-el="track" className="glide__track">
                                <ul className="glide__slides">
                                    <li className="glide__slide">Parent Slide 1</li>
                                    <li className="glide__slide">Child Slide 1-1</li>
                                    <li className="glide__slide">Child Slide 1-2</li>
                                    <li className="glide__slide">Child Slide 1-3</li>
                                </ul>
                            </div>
                             {/* Inner slide arrows */}
                            <div className="glide__arrows" data-glide-el="controls">
                                <span>Child 1 Arrows </span>
                                <button className="glide__arrow--left left-arrow" data-glide-dir="<"> Prev</button>
                                <button className=" glide__arrow--right right-arrow" data-glide-dir=">"> Next</button>
                            </div>
                        </div>
                         {/* Inner slides end */}
                    </li>
                    <li className="glide__slide">
                        <div className="glide inner-glide">
                            <div data-glide-el="track" className="glide__track">
                                <ul className="glide__slides">
                                    <li className="glide__slide">Parent Slide 2</li>
                                    <li className="glide__slide">Child Slide 2-1</li>
                                    <li className="glide__slide">Child Slide 2-2</li>
                                    <li className="glide__slide">Child Slide 2-3</li>
                                </ul>
                                <div className="glide__arrows" data-glide-el="controls">
                                    <span>Child 2 Arrows </span>
                                    <button className="glide__arrow--left left-arrow" data-glide-dir="<"> Prev</button>
                                    <button className=" glide__arrow--right right-arrow" data-glide-dir=">"> Next</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="glide__slide">
                        <div className="glide inner-glide">
                            <div data-glide-el="track" className="glide__track">
                                <ul className="glide__slides">
                                    <li className="glide__slide">Parent Slide 3</li>
                                    <li className="glide__slide">Child Slide 3-1</li>
                                    <li className="glide__slide">Child Slide 3-2</li>
                                    <li className="glide__slide">Child Slide 3-3</li>
                                </ul>
                                <div className="glide__arrows" data-glide-el="controls">
                                    <span>Child 3 Arrows </span>
                                    <button className="glide__arrow--left left-arrow" data-glide-dir="<"> Prev</button>
                                    <button className=" glide__arrow--right right-arrow" data-glide-dir=">"> Next</button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            {/* Outer slide arrows */}
            <div className="glide__arrows parent__arrows" data-glide-el="controls">
                <span>Parent Arrows </span>
                <button className="glide__arrow--left left-arrow" data-glide-dir="<"> Prev</button>
                <button className=" glide__arrow--right right-arrow" data-glide-dir=">"> Next</button>
            </div>
        </div>
    );
}

export default NestedCarousel;
