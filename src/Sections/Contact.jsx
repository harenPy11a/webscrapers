import React from "react";
import { block } from "million";

import contactIMG from "./Assets/contactus.jpeg";

const ContactBlock = block(function Contact() {
  return (
<form class="flex w-full max-w-sm space-x-3">
    <div class="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
        <div class="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            Contact us !
        </div>
        <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div class="col-span-2 lg:col-span-1">
                <div class=" relative ">
                    <input type="text" id="contact-form-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"/>
                    </div>
                </div>
                <div class="col-span-2 lg:col-span-1">
                    <div class=" relative ">
                        <input type="text" id="contact-form-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email"/>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <label class="text-gray-700" for="name">
                            <textarea class="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment" name="comment" rows="5" cols="40">
                            </textarea>
                        </label>
                    </div>
                    <div class="col-span-2 text-right">
                        <button type="submit" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </form>


      );
});

// const ContactBlock = block(function Contact() {
//   return (
//     <div id="contact" className="relative">
//       <footer className="footer p-10 bg-[#000]">
//         <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-40 lg:grid-cols-3 lg:grid-rows-1 lg:mx-auto">
//           <div className="flex flex-col">
//             <span className="font-semibold text-lg text-[#fff]">Services</span>
//             <a className="text-white pb-1 pt-2">Branding</a>
//             <a className="text-white pb-1">Design</a>
//             <a className="text-white pb-1">Framework</a>
//           </div>
//           <div className="flex flex-col">
//             <span className="font-semibold text-lg text-[#fff]">Company</span>
//             <a href="#aboutus" className="link link-hover text-white pt-2 pb-1">
//               About us
//             </a>
//             <a href="#description" className="link link-hover text-white pb-1">
//               Description
//             </a>
//           </div>
//           <div className="flex flex-col">
//             <div className="font-semibold text-lg text-[#fff] mt-6 lg:mt-0">
//               Contact
//             </div>
//             <a className="text-white pt-2 pb-1">
//               webscrapers.contact@gmail.com
//             </a>
//             <a className="text-white pb-1">224-239-8445</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// });

export default ContactBlock;
