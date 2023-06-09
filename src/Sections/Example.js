//Above this section say something like "We aere the right team for you"
//Then this section will start off by saying "Don't believe us, take a look at our past works"

import React from "react";
// import "./Example.css";

const callouts = [
  {
    name: "Scientific Laboratory",
    description: "A lab based in Mumbai, India",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt: "Write a decription here if the image doesn't load.",
    href: "#",
  },
  {
    name: "Financing Company",
    description: "An up-and-coming accounting firm",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt: "Write a decription here if the image doesn't load.",
    href: "#",
  },
  {
    name: "Local Chicago Business",
    description: "One of the local businesses we're currently working with",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Write a decription here if the image doesn't load.",
    href: "#",
  },
];

function Example() {
  return (
    <div>
      <div className="h-500 bg-[#FF8883] sm:bg-[#FFB983] md:bg-[#BEBEBE] lg:bg-[#90FF83] xl:bg-[#8394FF] 2xl:bg-[#FF83E3] ">
        <div>
          <p className="text-5xl sm:text-7xl lg-9xl text-center font-semibold tracking-tight text-white pt-14">
            Don't Believe Us Yet?
          </p>
          <p className="text-center text-xl sm:text-2xl lg:text-3xl tracking-tight font-semibold text-white pt-5">
            Check out some of our past works from our satisfied customers
          </p>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-5 pb-20">
            <div className="mx-auto max-w-2xl pt-16 lg:max-w-none ">
              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {callouts.map((callout) => (
                  <div key={callout.name} className="group relative">
                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                      <img
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="h-full w-full object-cover object-center p-2"
                      />
                    </div>
                    <h3 className="text-3xl sm:text-3xl lg-5xl text-white pl-1 pt-8 font-semibold">
                      <a href={callout.href}>
                        <span className="absolute inset-0" />
                        {callout.name}
                      </a>
                    </h3>
                    <p className="text-lg lg:text-xl font-semibold text-white pl-1 mt-6">
                      {callout.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Example;
