import React from "react";
import headerBackground from "./Assets/unnamed.jpg";
import Navbar from "./Navbar";
function Title() {
  return (
    <div>
      <section className="bg-[#F4F1EC]">
        <div class="grid sm:h-screen md:h-screen lg:h-screen xl:h-screen 2xl:h-screen max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center col-span-4">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-[#695B55]">
              Get your website made with Webscrapers
              {/* <span class="text-[#695B55]">Webscrapers</span> */}
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Flexible to your needs, Webscrapers will build a website that
              catches your target audience's attention and grows your platform.
            </p>
          </div>
          {/* <img
          className="block lg:shown h-24 "
          src={headerBackground}
          alt="Workflow"
        /> */}
        </div>
      </section>
    </div>
  );
}

export default Title;
