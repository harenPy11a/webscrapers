import React from "react";
import { block } from "million";
const ProcessBlock = block(function Process() {
  return (
    <div className="">
      <section>
        <div class="bg-black text-white py-8">
          <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p class="ml-2 text-[#bfa79d] uppercase tracking-loose">
                Our Process
              </p>
              <p class="text-3xl md:text-5xl leading-normal md:leading-relaxed mb-2">
                What we can do for you
              </p>
              <p class="text-sm md:text-base text-gray-50 mb-4">
              Here at Webscrapers, we take pride in our ability to provide you with transparency throughout our discussions together. We ensure that you and your business are set on the right track for success.

              </p>
            </div>
            <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div class="container mx-auto w-full h-full">
                <div class="relative wrap overflow-hidden p-10 h-full">
                  <div
                    class="border-2-2 border-yellow-555 absolute h-full border"
                    style="right: 50%; border: 2px solid #FFC100; border-radius: 1%;"
                  ></div>
                  <div
                    class="border-2-2 border-yellow-555 absolute h-full border"
                    style="left: 50%; border: 2px solid #FFC100; border-radius: 1%;"
                  ></div>
                  <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="order-1 w-5/12 px-1 py-4 text-right">
                      <p class="mb-3 text-base text-[#bfa79d]">Step 1</p>
                      <h4 class="mb-3 font-bold text-lg md:text-2xl">
                      Contact
                      </h4>
                      <p class="pl-9 text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Our initial activities allow you to direct the rest of our developement plan. Using your initial ideas, and any new ones we create in this period, we'll get a feel for your wants and needs.
                      </p>
                    </div>
                  </div>
                  <div class="mb-8 flex justify-between items-center w-full right-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="order-1  w-5/12 px-1 py-4 text-left">
                      <p class="mb-3 text-base text-[#bfa79d]">Step 2</p>
                      <h4 class="mb-3 font-bold text-lg md:text-2xl">
                      Evaluate
                      </h4>
                      <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Once you get a feel for our initial plan, our team will give you a quote on the pricing for the task. To ensure your satisfaction, we'll involve you in the discussion.
                      </p>
                    </div>
                  </div>
                  <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="order-1 w-5/12 px-1 py-4 text-right">
                      <p class="mb-3 text-base text-[#bfa79d]">Step 3</p>
                      <h4 class="mb-3 font-bold text-lg md:text-2xl">
                        Plan
                      </h4>
                      <p class="pl-3 text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      After the initial talks, we'll create a specialized development plan that details the path that our team will set on together in the following weeks. 
                      </p>
                    </div>
                  </div>

                  <div class="mb-8 flex justify-between items-center w-full right-timeline">
                    <div class="order-1 w-5/12"></div>

                    <div class="order-1  w-5/12 px-1 py-4">
                      <p class="mb-3 text-base text-[#bfa79d]">Step 4</p>
                      <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left">
                        Deploy
                      </h4>
                      <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      We touch on what we have made so far and give you a chance to propose any revisions. Then we make slight changes, before publishing to your domain.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <img
                  class="mx-auto -mt-36 md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default ProcessBlock;
