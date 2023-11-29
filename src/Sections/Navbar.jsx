import React from 'react';
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-scroll';
import logo from "./Assets/logo5.png";
import { block } from "million";

const navigation = [
  { name: "Description", href: "description", current: false },
  { name: "Methodology", href: "process", current: false },
  { name: "Our Work", href: "ourwork", current: false },
  { name: "FAQ", href: "faq", current: false },
  { name: "Our Team", href: "aboutus", current: false },
  { name: "Contact", href: "contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBlock = block(function Navbar() {

  const calculateDuration = (distance) => {
    // Adjust the multiplier based on your preference
    const multiplier = 0.4;
    return Math.max(500, distance * multiplier);
  };

  return (
    <div className="sticky top-0 z-50 h-full ">
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="max-w-7xl  max-h-full px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src={logo}
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src={logo}
                      alt="Workflow"
                    />
                  </div>

                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          spy={true}
                          smooth={true}
                          offset={0} // Adjust the offset based on your layout
                          duration={calculateDuration}
                          className={classNames(
                            item.current
                              ? "bg-[#9897A9] text-white"
                              : "text-white hover:bg-[#695B55] hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-[#9897A9] text-white"
                        : "text-white hover:bg-[#9897A9] hover:text-white",
                      "px-3 py-2 rounded-md text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
});

export default NavBlock;
