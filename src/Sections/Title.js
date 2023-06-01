import React from "react";

function Title() { 
  return (

    <section>
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Get your website made with <span class="text-[#967969]">Webscrapers</span></h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Flexible to your needs, Webscrapers will build a website that catches your target audience's attention and grows your platform.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7 ml-1 -mr-1 feather feather-chevrons-down"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Contact Us
            </a> 
        </div>
               
    </div>
</section>
    
  //     <div className= "flex min-w-full	min-h-[50%] bg-[#E1E7EB]" >
  //         <h1 class="translate-x-10 py-50 text-4xl font-extrabold leading-none tracking-tight text-[#BEA493] md:text-7xl lg:text-8xl">Get your website made with <span class="lg:text-8xl md:text-7xl text-blue-600 dark:text-blue-500">Webscrapers</span>.</h1> 

  //     </div>
  )
}

export default Title;
