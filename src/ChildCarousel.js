import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

function ChildCarousel(props) {
  const { slide, outerGlide, childGlideList } = props;
  useEffect(() => {
    var options = {
      type: "slider",
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
      },
    };

    const glide = new Glide(`.inner-glide-${slide}`, options);
    childGlideList.current = [...childGlideList.current, glide];
  }, [outerGlide, childGlideList, slide]);

  return (
    <div className={`glide inner-glide-${slide}`}>
      <div data-glide-el="track" className="glide__track">
        <ul className="glide__slides">
          <li className="glide__slide">Child Slide {slide}-1</li>
          <li className="glide__slide">Child Slide {slide}-2</li>
          <li className="glide__slide">Child Slide {slide}-3</li>
        </ul>
      </div>
      {/* Inner slide arrows */}
      <div className="glide__arrows" data-glide-el="controls">
        <span>Child {slide} Arrows </span>
        <button className="glide__arrow--left left-arrow" data-glide-dir="<">
          Prev
        </button>
        <button className=" glide__arrow--right right-arrow" data-glide-dir=">">
          Next
        </button>
      </div>
    </div>
  );
}

export default ChildCarousel;
