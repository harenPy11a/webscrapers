import React from "react";
import { block } from "million";
const info = [
  {
    question: "Why should you choose us?",
    answer:
      "Working with our developers at Webscrapers will give you a cost-free solution to your digital profile. Our methodology ensures that our you're treated like more than just a client. We want you to feel apart of a team making a personalized space for your needs. What makes us different is the passion with which we approach our work paired with our desire to help you succeed.",
  },
  {
    question: "What experience do we have?",
    answer:
      "All of our developers have been interested in the field of computer science for most of their recent lives, with all of them taking classes in the field for all their highschool years. Our skills are enough to get you over the line when it comes to your website.",
  },
  {
    question: "How do we invole you?",
    answer:
      "With quick respond times from our developers, we'll ensure that you recieve the closure you need while we develop your site. Additionally, we allow you to oversee our day by day changes, giving you the ability to influence our immediate actions. Our developers are always open to hearing your thoughts, and we will be flexible to your times when it comes to meetings, updates, and follow-ups.",
  },
  {
    question: "How do we guarantee your satisfaction?",
    answer:
      "The process always starts with you. Before any changes are made, we'll build a plan with you centered around features and ideas that you wish to see. As we make progress, we'll consistently update you with drafts of the product. Once all is done, we'll ensure that you love everything. Plus, you can always request a remake for zero cost!",
  },
  {
    question: "How can you contact us?",
    answer:
      "The best way to contact us is through our email. We ensure speed in not only communication, but also developement. Depending on your needs, we're willing to set up meetings as well.",
  },
  {
    question: "Why is our service important?",
    answer:
      "Whether you're a prominent supplier or a struggling business, your online presence is increasingly becoming important. Our service ensures that your website works at its absolute best to provide you with the traffic that you need. If you don't have a website, we'll make one. If you need an upgrade, we'll make yours better. That is the Webscrapers guarantee!",
  },
  {
    question: "Why are we doing this?",
    answer:
      "Our goal with this endeavor is to fulfill our passions for web development. As students, we decided to shift our focus away from monetary gain and instead look to express our creative abilities, all while helping the communitiy. This passion project is one which we hope to use to consistently apply our abilities in development.",
  },
];

const FAQBlock = block(function FAQ() {
  return (
    <div
      id="faq"
      class="mx-auto px-5 relative pt-10 pb-18 bg-[#000] min-h-screen"
    >
      <div class="flex flex-col items-center">
        <h2 class="font-bold text-5xl mt-5 tracking-tight pb-10 text-[#fff] text-center">
          Frequenty Asked Questions
        </h2>
      </div>
      <div class="grid divide-y divide-white max-w-xl mx-auto mt-8 ">
        {info.map((data) => (
          <div class="py-3 lg:-translate-x-[205px] lg:-translate-y-[25px] lg:w-[1000px]">
            <details class="group border-t-[1px] border-[#474747] ">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none ">
                <span className="text-white font-bold text-xl pt-6">
                  {data.question}
                </span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class=" mt-6 group-open:animate-fadeIn text-[#fff]">
                {data.answer}
              </p>
            </details>
          </div>
        ))}
      </div>
      {/* <div class="pt-16 pb-4 flex justify-center">
        <div class="bg-[#474747] lg:w-[1300px] lg:h-[1px]">
        </div>
      </div> */}
      <div class="pt-4 pb-4 flex justify-center">
        {/* <div class="bg-[#474747] lg:w-[1300px] lg:h-[1px]"> */}
        {/* </div> */}
      </div>
    </div>
  );
});

export default FAQBlock;
