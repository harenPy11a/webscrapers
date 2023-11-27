import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import { block } from "million";

const ExampleBlock = block(function Example() {
  const picslides = [
    {
      url: "https://static.wixstatic.com/media/425790_39ee339eee5146019aa4886727e078c5~mv2.jpg",
    },
  ];
  const personslides = [
    {
      name: "National India Hub",
      content:
        "One of our projects was in partnership with National India Hub, a community oriented organization which aims to serve south-asian communities throughout the country. Their work not only uplifts local societies in meaningful ways, but also serves as a reminder that humanity is more than what we make it out to be. ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? picslides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === picslides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div id="ourwork">
      <p className="bg-[#b89e93] py-7 text-3xl font-bold leading-none md:text-5xl xl:text-[75px] text-white text-center ">
        Don't Believe us Yet?
      </p>
      <p className="bg-[#fffdf5] py-7 text-3xl font-bold leading-none md:text-5xl xl:text-[75px] text-black text-center "></p>

      <div id="example" className="flex flex-col lg:flex-row bg-[#fffdf5]">
        <div className="xl:w-[870px] xl:h-[780px] w-screen h-[500px] m-2 py-4 px-4 xl:pb-16 relative group">
          <div
            style={{ backgroundImage: `url(${picslides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {picslides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
        <div className="h-[780px] py-20 px-4 max-w-lg  text-black">
          <h1 class="pb-5 text-3xl lg:text-5xl font-bold text-black">
            Our Past Work
          </h1>

          <div className="text-[#000] font-semibold text-3xl">
            {personslides[currentIndex].name}
          </div>

          <div className="text-black py-1 text-2xl">
            {personslides[currentIndex].content}
          </div>

          <div className="py-1">
            <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-[#000] rounded-full">
              Non-profit
            </span>
            <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-[#000] rounded-full">
              Cultural
            </span>
            <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-[#000] rounded-full">
              Volunteering
            </span>

            <div className="py-8">
              {/* <p class="text-[#fff]">
                <a
                  href="https://www.indiahub.org"
                  class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Check out the work
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ExampleBlock;
