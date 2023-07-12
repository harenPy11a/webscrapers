import React from "react";
import ParticleBlock from "./Particle";
import { block } from "million";
import NavBlock from "./Sections/Navbar";

const TitleBlock = block(function Title() {
  return (
    <div className="Title">
      <div className="absolute h-screen w-screen">
        <ParticleBlock></ParticleBlock>
      </div>

      <section className="absolute">
        <NavBlock />

        <div>
          <div class="h-screen w-screen ">
            <div class="h-screen mr-auto place-self-center">
              {/* divide-transparent */}
              <p className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-[100px] text-gray-100 text-center mt-24">
                Webscrapers
              </p>
              <p className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-[65px] text-[#695B55] text-center mt-16">
                Building Websites Made Easy
              </p>
              <p className="mx-auto max-w-xl font-light text-gray-500 md:text-lg lg:text-2xl dark:text-gray-400 text-center mt-16">
                Flexible to your needs, our Webscrapers team will build you a
                website that catches your target audience's attention and grows
                your platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default TitleBlock;

// import React from "react";
// import ParticleBlock from "./Particle";
// import NavBlock from "./Navbar";
// import { block } from "million";
// const TitleBlock = block(function Title() {
//   return (
//     <div className="Title">
//       <div className="absolute h-screen w-screen">
//         <ParticleBlock></ParticleBlock>
//       </div>

//       <section className="absolute">
//         <NavBlock />
//         <div>
//           <div class="sm:h-screen md:h-screen lg:h-screen xl:h-screen 2xl:h-screen px-24 mx-auto lg:gap-8 xl:gap-0 lg:py-16 grid lg:grid-cols-12">
//             <div class="mr-auto place-self-center col-span-8">
//               <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-[85px] text-[#695B55]">
//                 {/* Get your website made with WebScrapers*/}
//                 <span class="text-gray-100"> WebScrapers:</span>
//                 Building Websites Made Easy
//               </h1>
//               <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
//                 Flexible to your needs, Webscrapers will build a website that
//                 catches your target audience's attention and grows your
//                 platform.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// });

// export default TitleBlock;
