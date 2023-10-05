import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";

import ChildCarousel from "./ChildCarousel";

function NestedCarousel() {
  const childGlideList = useRef([]);
  const outerGlide = useRef();

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

    outerGlide.current = new Glide(".outer-glide", options);
  }, []);

  useEffect(() => {
    console.log("Parent Mounted");
    outerGlide.current.mount();

    if (childGlideList.current.length === 3) {
      childGlideList.current.forEach((childGlide, index) => {
        childGlide.on("move", function () {
          outerGlide.current.disable();
          console.log("outer disabled");
        });
        childGlide.on("move.after", function () {
          outerGlide.current.enable();
          console.log("outer enabled");
        });
        console.log(`Child ${index} Mounted`);
        childGlide.mount();
      });
    }
  }, []);

  return (
    <div className="glide outer-glide">
      <div data-glide-el="track" className="glide__track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <ChildCarousel
              slide={1}
              outerGlide={outerGlide.current}
              childGlideList={childGlideList}
            />
          </li>
          <li className="glide__slide">
            <ChildCarousel
              slide={2}
              outerGlide={outerGlide.current}
              childGlideList={childGlideList}
            />
          </li>
          <li className="glide__slide">
            <ChildCarousel
              slide={3}
              outerGlide={outerGlide.current}
              childGlideList={childGlideList}
            />
          </li>
        </ul>
      </div>
      {/* Outer slide arrows */}
      <div className="glide__arrows parent__arrows" data-glide-el="controls">
        <span>Parent Arrows </span>
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

export default NestedCarousel;
