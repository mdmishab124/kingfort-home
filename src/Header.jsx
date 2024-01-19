import { FaInstagram, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { HiBars2 } from "react-icons/hi2";
import { useState } from "react";
import { BsChevronDoubleLeft } from "react-icons/bs";

const SideBar = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    // social

    <div>
      <div className="fixed h-screen w-16  top-0 left-0 pt-10 pb-10">
        <div className="flex h-1/2 w-full items-start justify-center">
          <div className="fixed flex flex-col">
            <HiBars2 size="28" className="hidden" />
          </div>
        </div>
        <div className="flex h-1/2 w-full items-end justify-center absolute bottom-12 left-0 lg:left-10">
          <div className="fixed flex flex-col space-y-10 ">
            <FaInstagram size="18" />
            <FaFacebookF size="18" />
            {/*<FaTwitter size="16" /> */}
            <FaGoogle size="15" />
          </div>
        </div>
      </div>
      <div className="mb-10 absolute right-0 bottom-2 hidden md:block">
        <div className="-text-xl font-[Poppins] font-bold transform -rotate-90  mb-10 hidden md:block">
          <h3 className="flex flex-row items-center font-medium">
          <span><BsChevronDoubleLeft size="25" /></span> SWIPE DOWN
          </h3>
        </div>
      </div>
      {/*
      <div className="-text-xl font-[Poppins] font-bold transform -rotate-90  mb-10 absolute right-4 bottom-12 hidden md:block">
            <h3 className="inline-block w-[100px]">
              SOUND <span>ON</span>
            </h3>
  </div> */}
      {/* Nav */}

      <nav>
        <div class="w-full absolute top-0">
          <div class="flex justify-between">
            <div class="flex space-x-4">
              <div className="w-full">
                <a
                  href="#"
                  class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <span class="font-bold font-[Poppins] text-2xl absolute lg:left-12 left-5 top-[2rem]">
                    King Fort
                  </span>
                </a>
              </div>

              <div class="hidden md:flex right-11 space-x-1 absolute top-[1rem] font-[Poppins]">
                <a href="#" class="py-5 px-3 text-gray-500 hover:text-gray-900">
                  About
                </a>
                <a href="#" class="py-5 px-3 text-gray-500 hover:text-gray-900">
                Rooms
                </a>
                <a href="#" class="py-5 px-3 text-gray-500 hover:text-gray-900">
                Dining
                </a>
                <a href="#" class="py-5 px-3 text-gray-500 hover:text-gray-900">
                Facilities
                </a>
                <a href="#" class="py-5 px-3 text-gray-500 hover:text-gray-900">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav and sound */}

      <div className="fixed h-screen w-16 bg-slate-300 top-0 right-0 pt-10 pb-10 md:hidden">
        <div className="flex h-1/2 w-full items-start">
          <div className="flex absolute flex-col text-[2vh] font-[Poppins] font-bold space-y-1 text-end right-5">
            <a href="">ABOUT</a>
            <a href="">ROOMS</a>
            <a href="">FUTURES</a>
            <a href="">DINING</a>
            <a href="">CONTACT</a>
          </div>
        </div>
        <div className="flex h-1/2 w-full items-end justify-center ">
          <div className="-text-xl font-[Poppins] font-bold transform -rotate-90  mb-10">
            <h3 className="inline-block w-36 flex justify-end items-center font-medium">
            <span><BsChevronDoubleLeft size="25" /></span> SWIPE DOWN
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
// <div
//   className="fixed top-0 h-screen w-16 flex flex-col
// bg-white relative flex items-center justify-center
//   h-8 w-11 mt-2 mb-2 mx-auto
// hover:bg-green-600
// text-green-500 hover:text-white
//   hover:rounded-xl rounded-3xl
//   transition-all duration-300 ease-linear
//   cursor-pointer shadow-lg"
// >
//   <div className="fixed h-screen w-16 flex flex-col justify-end pb-10 left-0 lg:left-5">
//     <SideBarIcon icon={<FaInstagram size="18" />} />

//     <SideBarIcon icon={<FaFacebookF size="18" />} />
//     <SideBarIcon icon={<FaTwitter size="16" />} />
//     <SideBarIcon icon={<FaGoogle size="15" />} />
//   </div>
// </div>

// const TogleBarIcon = ({ icon }) => {
//   return <div className="toggle-icon group">{icon}</div>;
// };

// const iconTextMapping = {
//   FaInstagram: "Instagram 🏀",
//   FaFacebookF: "Facebook 💡",
//   FaTwitter: "Twitter 🐤",
//   FaGoogle: "Google 🌐",
// };

// const SideBarIcon = ({ icon, text }) => (
//   <div className="sidebar-icon group">
//     {icon}
//     <span className="sidebar-tooltip group-hover:scale-100">
//       {text || iconTextMapping[icon.type.name]}
//     </span>
//   </div>
// );

// const SideBarIcon = ({ icon, text = ['Instagram 🏀', 'Facebook 💡', 'Twitter 🐤', 'Website 🌐'] }) => (
//   <div className="sidebar-icon group">
//     {icon}
//     <span class="sidebar-tooltip group-hover:scale-100">
//       {text}
//     </span>
//   </div>
// );
