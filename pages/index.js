import Head from 'next/head'
import Image from 'next/image'

import matter from 'gray-matter';
import Link from 'next/link';
import Sidebar from '../components/sidebar';
// import ProgressCircle from 'react-native-progress-circle'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import SidebarT from '../components/sidebar2';
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart,AiOutlinePlus,AiOutlineShareAlt,AiOutlineAccountBook } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { GoKebabVertical } from "react-icons/go";
import Cardss from '../components/cardss';
const percentage = 3.8;
const percentage1 = 30.8;

const Home = () => {

  const menus = [
    { name: "Admin Panel", link: "/wf w", icon:AiOutlineUser, margin: true   },
    { name: "Add Company", link: "/fqw", icon: AiOutlineUser },
    { name: "Add new User", link: "/fq", icon: FiMessageSquare },
    { name: "Add new Certificates", link: "/qwf", icon: TbReportAnalytics},
    { name: "University Actions", link: "/fq", icon: FiFolder },
    { name: "Add Students", link: "/fq", icon: FiShoppingCart },
    { name: "Add MCQ Questions Assesment", link: "/fq", icon: AiOutlineHeart },
    { name: "Recruiters and Jobs", link: "/f", icon: RiSettings4Line },
    { name: "Universities", link: "/f", icon: RiSettings4Line },
    { name: "View all Users", link: "/f", icon: RiSettings4Line },

  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-4">
      <div
        className={`bg-[#25496E] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100  px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              href={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "my-2 text-[#3B81F6] text-lg ml-4"
              } group flex ${ !menu?.margin && "text-sm  hover:bg-gray-100 hover:text-[#3B81F6] "}   gap-3.5 font-medium p-2 rounded-md`}
            >
              { !menu?.margin&& <div>{React.createElement(menu?.icon, { size: "20" })}</div>}
              
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
            <div class="flex items-center">
          <img class="w-10 h-10 rounded-full mr-4" src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="Avatar of Writer"></img>
          <div class="text-sm">
            <p className={`text-gray-100 ${
                  !open && "hidden"
                }  leading-none` }>Anil J</p>
            <p className={`text-gray-100 ${
                  !open && "hidden"
                }  leading-none text-xs mt-1` }>Assert_admin</p>
          </div>
        </div>
        </div>
      </div>
    <div className='container   lg:pl-14 pr-20'>
      {/* a div with a  breadcrumb and button on justify between */}
      <div className='lg:flex md:grid-cols-1 buttonAndCrumb justify-between'>
        <div className=' flex breadcrumb py-4'>
          <span>
            <a href="/" class="text-gray-500 hover:text-gray-700 mr-2">Assert Admin &gt; </a>
          </span>
          
          <span>
            <a href="#" class="text-gray-500 font-bold" aria-current="page">Manage Categories</a>
          </span>
        </div>
        <div className='purplebutton py-4'>
          <button className='bg-[#ac5af4] flex text-white py-2 px-4 rounded-md'> <div className="mr-2"><AiOutlinePlus size={25}/></div><div>Add New Category</div></button>
        </div>
     
      </div>
      <div className=' tags flex overflow-x-scroll overflow-y-hidden lg:flex-wrap flex-nowrap my-2 gap-4'>
        <a href="#" class= "inline-block bg-gray-100 px-4 pb-2 pt-1 my-1 w-fit h-9 hover:bg-blue-200 text-gray-400 text-xl font-medium  rounded-full dark:bg-gray-700 dark:text-blue-400 ">Finance</a>
        <a href="#" class="bg-gray-100 px-4 pb-2 pt-1 my-1 h-9 hover:bg-blue-200 text-gray-400 text-xl font-medium   rounded-full dark:bg-gray-700 dark:text-blue-400 ">Electronics</a>
        <a href="#" class="bg-gray-100 px-4 pb-2 pt-1 my-1 h-9 hover:bg-blue-200 text-gray-400 text-xl font-medium   rounded-full dark:bg-gray-700 dark:text-blue-400 ">Contents Writing</a>
        <a href="#" class= " bg-gray-100 px-4 pb-2 pt-1 my-1 h-9 w  hover:bg-blue-200 text-gray-400 text-xl font-medium   rounded-full dark:bg-gray-700 dark:text-blue-400 ">Software Services</a>
        <a href="#" class="bg-gray-100 px-4 pb-2 pt-1 my-1 h-9 hover:bg-blue-200 text-gray-400 text-xl font-medium   rounded-full dark:bg-gray-700 dark:text-blue-400 ">Human Resources</a>
        <a href="#" class="bg-gray-100 px-4 pb-2 pt-1 my-1 h-9 hover:bg-blue-200 text-gray-400 text-xl font-medium   rounded-full dark:bg-gray-700 dark:text-blue-400 ">Marketing</a>
        <a href="#" class="bg-gray-100 px-4 pb-2 pt-1 my-1 h-9 hover:bg-blue-200 text-gray-400 text-xl font-medium   rounded-full dark:bg-gray-700 dark:text-blue-400 ">Construction</a>
        <a href="#" class="bg-gray-100 px-4 pb-2 pt-1 my-1 h-9 hover:bg-blue-200 text-gray-400 text-xl font-medium   rounded-full dark:bg-gray-700 dark:text-blue-400 ">Teaching</a>
        <a href="#" class="bg-gray-100 px-4 pb-2 pt-1 my-1 h-9  hover:bg-blue-200 text-gray-400 text-xl font-medium   rounded-full dark:bg-gray-700 dark:text-blue-400 ">Finance</a>
        <a href="#" class="bg-gray-100 px-4 pb-2 pt-1 my-1 h-9 hover:bg-blue-200 text-gray-400 text-xl font-medium   rounded-full dark:bg-gray-700 dark:text-blue-400 ">Electronics</a>
        <a href="#" class="bg-gray-100 px-4 pb-2 pt-1 my-1 h-9 hover:bg-blue-200 text-gray-400 text-xl font-medium   rounded-full dark:bg-gray-700 dark:text-blue-400 ">Contents Writing</a>
        <a href="#" class="bg-gray-100 px-4 pb-2 pt-1 my-1 h-9 hover:bg-blue-200 text-gray-400 text-xl font-medium   rounded-full dark:bg-gray-700 dark:text-blue-400 ">Media & Communication</a>
        <a href="#" class="bg-gray-100 px-4 pb-2 pt-1 my-1 h-9 hover:bg-blue-200 text-gray-400 text-xl font-medium   rounded-full dark:bg-gray-700 dark:text-blue-400 ">Badge link</a>
        <a href="#" class="bg-gray-100 px-4 pb-2 pt-1 my-1 h-9  hover:bg-blue-200 text-gray-400 text-xl font-medium   rounded-full dark:bg-gray-700 dark:text-blue-400 ">Software Services</a>
        <a href="#" class="bg-gray-100 px-4 pb-2 pt-1 my-1 h-9 hover:bg-blue-200 text-gray-400 text-xl font-medium   rounded-full dark:bg-gray-700 dark:text-blue-400 ">Human Resources</a>
        <a href="#" class="bg-gray-100 px-4 pb-2 pt-1 my-1 h-9 hover:bg-blue-200 text-gray-400 text-xl font-medium   rounded-full dark:bg-gray-700 dark:text-blue-400 ">Marketing</a>
        <a href="#" class="bg-gray-100 px-4 pb-2 pt-1 my-1 h-9 hover:bg-blue-200 text-gray-400 text-xl font-medium   rounded-full dark:bg-gray-700 dark:text-blue-400 ">Construction</a>
        <a href="#" class="bg-gray-100 px-4 pb-2 pt-1 my-1 h-9 hover:bg-blue-200 text-gray-400 text-xl font-medium   rounded-full dark:bg-gray-700 dark:text-blue-400 ">Teaching</a>
      </div>
      <div className='lg:flex md:grid-cols-1 justify-between searchAndText  lg:my-8 my-10'>
        <div className=' mb-4  '>
        <span className='text-[#ac5af4] font-bold '> Certificates under the Categories</span>
        </div>
        

      <div class=" lg:w-2/5 w-4/5 search">
          <div class="relative w-full ">
              <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-xl  border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Certificates
              " required />
              <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <span class="sr-only">Search</span>
              </button>
          </div>
      </div>

      </div>
      {/* a div with css grid with 3 columns on large screen an one on small */}
      <div className='card grid lg:grid-cols-3 md:grid-col-1 gap-4 p-10'>
                <Cardss name="Accounts Finance" number="7"/>
                <Cardss name="Taxtation Finance" number="4"/>
                <Cardss name="Finance" number="5"/>
                <Cardss name="Financial Market Analysis " number="0"/>
      </div>
      <div className='w-full py-4 gap-3 px-4 justify-end flex'>
                {/* a square bordered blue button with 1 inside it */}
                <div className='w-10 h-10 rounded-lg border-2 border-blue-400 flex justify-center items-center'>
                    <span className='text-blue-400 font-bold'>1</span>
                    </div>
                    <div className='w-10 h-10 bg-[#3B81F6] rounded-lg   flex justify-center items-center'>
                    <span className='text-gray-100 font-bold'>2</span>
                    </div>
                    <div className='w-10 h-10 bg-[#3B81F6] rounded-lg  flex justify-center items-center'>
                    <span className='text-gray-100 font-bold'>3</span>
                    </div>
                    <div className='w-10 h-10 bg-[#3B81F6] rounded-lg   flex justify-center items-center'>
                    <span className='text-gray-100 font-bold'>4</span>
                    </div>
                    <div className='w-10 h-10 bg-[#3B81F6] rounded-lg   flex justify-center items-center'>
                    <span className='text-gray-100 font-bold'>5</span>
                    </div>
      </div>



    </div>
    

    </section>
    
  );
};

export default Home;