import React from "react";
import { block } from "million";
const ProcessBlock = block(function Process() {
  return (
    <div className="">
      <section>
        <div class="bg-black text-white py-8">
          <div class="container mx-auto flex flex-col items-start md:flex-row lg:my-12 md:my-24">
            <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p class="lg:ml-2 text-[#bfa79d] uppercase tracking-loose">
                Our Process
              </p>
              <p class="text-3xl md:text-5xl leading-normal md:leading-relaxed mb-2">
                What we can do for you
              </p>
              <p class="text-sm md:text-base text-gray-50 mb-4">
                Here at Webscrapers, we take pride in our ability to provide you
                with transparency throughout our discussions together. We ensure
                that you and your business are set on the right track for
                success.
              </p>
            </div>
            <div class="ml-0 lg:ml-12 lg:w-2/3 sticky">
              <div class="container mx-auto w-full h-full">
                <div class="relative wrap overflow-hidden pt-10 px-10 lg:p-10 h-full">
                  <div
                    class="border-2-2 border-yellow-555 absolute h-full border"
                    style="right: 50%; border: 2px solid #FFC100; border-radius: 1%;"
                  ></div>
                  <div
                    class="border-2-2 border-yellow-555 absolute h-full border"
                    style="left: 50%; border: 2px solid #FFC100; border-radius: 1%;"
                  ></div>
                  <div class="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline lg:left-timeline">
                    <div class="order-1 lg:w-5/12"></div>
                    <div class="order-1 lg:w-5/12 px-1 py-4 text-right">
                      <p class="mb-3 text-base text-[#bfa79d]">Step 1</p>
                      <h4 class="mb-3 font-bold text-lg md:text-2xl">
                        Contact
                      </h4>
                      <p class="pl-9 text-md lg:text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        We will reach out to you and gather the necessary
                        information to build a sketch of the website. We then
                        will show you past projects and templates to understand
                        your likings and wants to help build a clean and fast
                        end product.
                      </p>
                    </div>
                  </div>

                  <div class="mb-8 flex justify-between items-center w-full left-timeline lg:right-timeline ml-4 lg:ml-0">
                    <div class="order-1 lg:w-5/12"></div>
                    <div class="order-1 lg:w-5/12 px-1 py-4 text-left">
                      <p class="mb-3 text-base text-[#bfa79d]">Step 2</p>
                      <h4 class="mb-3 font-bold text-lg md:text-2xl">
                        Evaluate
                      </h4>
                      <p class="text-md lg:text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        We then will talk about pricing and the different
                        services that we will provide. We then will see what
                        your Brand does in the specific niche and how we can
                        support your brand to grow and succeed.
                      </p>
                    </div>
                  </div>

                  <div class="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline lg:left-timeline">
                    <div class="order-1 lg:w-5/12"></div>
                    <div class="order-1 lg:w-5/12 px-1 py-4 text-right">
                      <p class="mb-3 text-base text-[#bfa79d]">Step 3</p>
                      <h4 class="mb-3 font-bold text-lg md:text-2xl">Plan</h4>
                      <p class="pl-3 text-md lg:text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        After the initial talks, we will create a specialized
                        development plan that details the path that our team
                        will set on together in the following weeks.
                      </p>
                    </div>
                  </div>

                  <div class="mb-8 flex justify-between items-center w-full left-timeline lg:right-timeline ml-4 lg:ml-0">
                    <div class="order-1 lg:w-5/12"></div>
                    <div class="order-1 lg:w-5/12 px-1 py-4">
                      <p class="mb-3 text-base text-[#bfa79d]">Step 4</p>
                      <h4 class="mb-3 font-bold text-lg md:text-2xl text-left">
                        Deploy
                      </h4>
                      <p class="text-md lg:text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        We touch on what we have made so far and give you a
                        chance to propose any revisions. Then we make slight
                        changes, before publishing to your domain.
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
