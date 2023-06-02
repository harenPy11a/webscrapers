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
    <div className="h-500 bg-[#695B55]">
      <p className="text-center font-semibold tracking-tight sm:text-6xl text-white pt-14">
        Don't Believe Us Yet?
      </p>
      <p className="text-center sm:text-2xl tracking-tight font-semibold text-white pt-5">
        Check out some of our past works from our satisfied customers
      </p>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-5 pb-20">
        <div className="mx-auto max-w-2xl pt-16 lg:max-w-none ">
          {/* <h2 className="text-2xl font-bold text-gray-900">Collections</h2> */}

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
                <h3 className="sm:text-4xl text-white pl-1 pt-8 text-base font-semibold text-gray-900">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="sm:text-lg font-semibold text-white pl-1 mt-6 text-sm text-gray-500">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Example;
