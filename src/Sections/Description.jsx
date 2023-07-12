import React from "react";
import { block } from "million";
const features = [
  {
    name: "Team",
    description:
      "Small team size fully commited to helping one business at a time.",
  },
  {
    name: "Personalization",
    description:
      "Our work will always include you. The whole process will be guided by your wishes.",
  },
  {
    name: "Pricing",
    description:
      "With a flat fee of $0 to build the website, we will only charge you for the domain costs.",
  },
  {
    name: "Timing",
    description:
      "Our team will be dedicated to ensure that your deadlines are accomplished.",
  },
  {
    name: "Flexibility",
    description:
      "With a small team of 3 developers, we will are flexible to your specifications.",
  },
  {
    name: "Passion",
    description:
      "Our work is not guided by money and instead serves to fulfill our passion.",
  },
];

const DescriptionBlock = block(function Description() {
  return (
    <div className="bg-[#ede5d8] relative">
      <div className="mx-auto grid max-w-screen grid-cols-1 items-center gap-x-8 gap-y-16 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-grey-900 text-black">
            What We Provide
          </h2>
          <p className="mt-4 lg:text-2xl text-xl text-black">
            At Webscrapers, our focus remains on{" "}
            <span class="font-bold text-[#695B55]">your</span> needs. We strive
            to fulfill the goals of{" "}
            <span class="font-bold text-[#695B55]">your</span> website in the
            way that <span class="text-[#695B55]">you</span> want it.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="border-b-2 border-gray-600 pb-4 text-[#695B55]"
              >
                <dt className="font-medium text-[#695B55]}">{feature.name}</dt>
                <dd className="mt-2 text-sm text-black">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 ">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
});

export default DescriptionBlock;
