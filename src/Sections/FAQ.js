import React from "react";

//Example questions:

const info = [
  {
    question: "Write the question here?",
    answer: "And then write an answer that fits here",
  },
  {
    question: "Write the question here?",
    answer: "And then write an answer that fits here",
  },
  {
    question: "Write the question here?",
    answer: "And then write an answer that fits here",
  },
  {
    question: "Write the question here?",
    answer: "And then write an answer that fits here",
  },
  {
    question: "Write the question here?",
    answer: "And then write an answer that fits here",
  },
  {
    question: "Write the question here?",
    answer: "And then write an answer that fits here",
  },
  {
    question: "Write the question here?",
    answer: "And then write an answer that fits here",
  },
];

function FAQ() {
  return (
    <div class="w-screen mx-auto px-5 pt-10 pb-18 bg-black min-h-sceen">
      <div class="flex flex-col items-center">
        <h2 class="font-bold text-5xl mt-5 tracking-tight pb-10 text-white">
          Frequenty asked questions
        </h2>
        {/* <p class="text-neutral-500 text-xl mt-3">Frequenty asked questions</p> */}
      </div>
      <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        {info.map((data) => (
          <div class="py-5 -translate-x-[205px] -translate-y-[25px] w-[1000px]">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-white font-bold text-xl">
                  {data.question}
                </span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
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
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn text-white">
                {data.answer}
              </p>
            </details>
          </div>
        ))}
      </div>
      {/* <div class="divider"></div> */}
    </div>
  );
}

export default FAQ;
