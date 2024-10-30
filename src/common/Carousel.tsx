import { useState } from "react";

interface CarouselProps {
  slides: Slide[];
}

interface Slide {
  src: string;
  text: string;
}

function Carousel({ slides }: CarouselProps) {
  let [current, setCurrent] = useState(0);

  function previousSlide() {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  }

  function nextSlide() {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }

  return (
    <div className="h-[700px] w-[980px] m-auto overflow-hidden">
      <div
        className="flex transition duration-300"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="h-[340px] relative w-full flex-shrink-0 overflow-hidden"
          >
            <div className="absolute left-0 flex w-full flex-col text-black">
              <div className="flex flex-col items-center justify-center">
                <div className="w-[980px] h-[291px] overflow-hidden">
                  <img
                    className="w-full relative top-1/2 translate-y-[-50%]"
                    src={slide.src}
                    alt={`Slideshow image ${index}`}
                  />
                </div>
                <p className="text-[33px] font-['system-ui'] font-[600] text-center">{slide.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-[-120px] w-[93%] mx-auto">
        <img
          onClick={previousSlide}
          className="sticky w-[23px] h-[39px] hover:cursor-pointer hover:brightness-150"
          src={"../src/assets/icons/flecha-izquierda.png"}
          alt="Previous slide button"
        />
        <img
          onClick={nextSlide}
          className="sticky w-[23px] h-[39px] hover:cursor-pointer hover:brightness-150"
          src={"../src/assets/icons/flecha-derecha.png"}
          alt="Next slide button"
        />
      </div>
    </div>
  );
}

export default Carousel;
