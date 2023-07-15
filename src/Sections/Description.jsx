import React from "react";
import { block } from "million";
import desc3 from "./Assets/desc3.jpg";
import desc2 from "./Assets/desc2.jpg";
import desc5 from "./Assets/desc5.jpg";
import desc4 from "./Assets/desc4.jpg";

const features = [
  {
    name: "Team",
    description:
      "Small team size fully commited to helping one business at a time. Our attention is on you and you only.",
  },
  {
    name: "Personalization",
    description:
      "Our work will always include you. The whole process will be guided by your goals.",
  },
  {
    name: "Pricing",
    description:
      "With reasonable pricing, we'll ensure that our evaluations secure you with a good product at a low cost.",
  },
  {
    name: "Timing",
    description:
      "Our team is dedicated to ensure that your deadlines are met. For us, timing is everything.",
  },
  {
    name: "Flexibility",
    description:
      "Our team is willing to adapt for your needs. Our service gives you limitless freedom to fulfill your vision.",
  },
  {
    name: "Passion",
    description:
      "Our guarantee is that our team will give you consistent enthusiasm no matter the occasion.",
  },
];

const DescriptionBlock = block(function Description() {
  return (
    <div id="description" className="bg-[#fffdf5] relative">
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
            way that <span class="font-bold text-[#695B55]">you</span> want it.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="border-b-2 border-gray-600 pb-4 text-[#695B55]"
              >
                <dt className="font-extrabold text-lg text-[#695B55]}">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-md text-black">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 ">
          <img
            src={desc4}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={desc2}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={desc3}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={desc5}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
});

export default DescriptionBlock;
