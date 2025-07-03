import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logo from "../assets/LOGO.svg"
import openbook from "../assets/open-book.svg"
import direction from"../assets/direction.svg"
import usericon from "../assets/user-icon.svg"
import calendar from "../assets/calendar-ui.png"
import chatbot from "../assets/chatbot-input.svg"
import ingenious from "../assets/INGENIOUS font.svg"
import { Link } from 'react-router-dom';

const navItems = [
    {id:1, label: "Home", href: "#" },
    {id:2, label: "Features", href: "#" },
    {id:3, label: "Pricing", href: "#" },
    {id:4, label: "Review", href: "#" },
  ];

  
  
  function Homepage() {
    let textItem = useRef()
  
    useGSAP(() => {
        gsap.to(textItem.current, { 
            y:5,
            duration:1, 
            opacity: 1, 
            ease: 'power2.inOut' 
        })
      }, []);
    gsap.registerPlugin(ScrollTrigger)
    let image = useRef()
    let button = useRef()
    useGSAP(() => {
        gsap.from('#box', {
          scrollTrigger: {
            trigger: '#box',
            start: 'top 90%',
            scrub: true
          },
          x: 450,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.inOut',
        });
      }, []);

      useGSAP(() => {
        gsap.from("#button", {
            scrollTrigger: {
                trigger: "#button",
                start: 'top bottom',
                end: 'bottom center',

            },
            y: 50,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
        })
      }, [])

  return (
    <div>
        
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent py-4 px-6 backdrop-blur-2xl">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo on the left */}
                <div className="flex items-center">
                <a href="/" >
                    <img src={logo} alt="" className="w-32" />
                </a>
                </div>

                {/* Navigation links in the center - hidden on small screens */}
                <div className="hidden md:flex items-center space-x-8 bg-white rounded-3xl px-20 py-2 font-montserrat text-sm font-medium mr-14">
                {navItems.map((item) => <a href={item.href} key={item.id} className="py-1 px-2 rounded-2xl hover:bg-[#CFDCE1] duration-200">{item.label}</a> )}
                </div>

                {/* Login button on the right */}
                <a href='/login' className="flex items-center">
                    
                    <span className="bg-[#4C9DFF] text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-200 font-medium text-sm">
                    Login
                    </span>
            
                </a>
            </div>
        </nav>
        
        <div className="md:h-screen h-[75vh] bg-white [background:radial-gradient(125%_125%_at_100%_10%,#3FA759_40%,#FAFC98_100%)] flex flex-col justify-center items-center ">
            <div className='flex-col flex justify-center items-center gap-2.5'>
                <div className='flex-col flex justify-center items-center gap-2'>
                    <h1 ref={textItem} className='font-plus-jakarta max-w-2xl mb-4 text-4xl font-extrabold tracking-tight  md:text-5xl text-center md:leading-20 opacity-0'>Unlock faster learning an student efficiency </h1>
                    <span className='flex gap-2 items-center'>
                        <p className='font-plus-jakarta italic'>with</p>
                        <img src={logo} alt="" className='w-32'/> 
                    </span>
                </div>
                <button className='font-plus-jakarta bg-[#FF5B21] hover:bg-[#ef9f82] duration-200 py-2 px-3 rounded-full cursor-pointer'>Try demo</button>
                <div className='mt-8  justify-center items-center'>
                    <img src={chatbot} alt="" className='w-[350px] md:w-full' />
                </div>

            </div>
        </div>
        
        <div className=" h-auto flex flex-col items-center gap-8 pb-10">
            <div className='mt-8'>
            <h2 className='font-plus-jakarta max-w-2xl mb-4 text-3xl font-medium tracking-tight  md:text-5xl text-center md:leading-20'>
            Your personalized study AI
            </h2>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-8'>
                <div className='w-[280px] px-6  py-4 flex flex-col justify-center items-center text-center shadow-lg rounded-2xl gap-4'>
                    <h3 className='font-montserrat font-medium text-2xl leading-7'>Reduce student workload</h3>
                    <img src={openbook} alt="" />
                    <p className='text-gray-600 font-montserrat font-normal text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus ex ac nisi lacinia, in ultricies eros vehicula. Proin lobortis laoreet dui eget lobortis. Proin eu nisi et arcu auctor tristique eget eget dui. Nullam aliquam leo egestas.</p>
                </div>
                <div className='w-[280px] px-6  py-4 flex flex-col justify-center items-center text-center shadow-lg rounded-2xl gap-4'>
                    <h3 className='font-montserrat font-medium text-2xl leading-7'>Study guide</h3>
                    <img src={direction} alt="" />
                    <p className='text-gray-600 font-montserrat font-normal text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus ex ac nisi lacinia, in ultricies eros vehicula. Proin lobortis laoreet dui eget lobortis. Proin eu nisi et arcu auctor tristique eget eget dui. Nullam aliquam leo egestas consequat malesuada. Sed a urna eu sapien</p>
                </div>
                <div className='w-[280px] px-6  py-4 flex flex-col justify-center items-center text-center shadow-lg rounded-2xl gap-4'>
                    <h3 className='font-montserrat font-medium text-2xl leading-7'>User friendly</h3>
                    <img src={usericon} alt="" />
                    <p className='text-gray-600 font-montserrat font-normal text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus ex ac nisi lacinia, in ultricies eros vehicula. Proin lobortis laoreet dui eget lobortis. Proin eu nisi et arcu auctor tristique eget eget dui. Nullam aliquam leo egestas consequat malesuada. Sed a urna eu sapien</p>
                </div>
            </div>
            <button className='font-plus-jakarta bg-[#3FA759] hover:bg-[#5da970] duration-200 py-2 px-3 font-medium rounded-full cursor-pointer'>Check it out</button>
        </div>
        
        <div className='md:h-screen h-auto py-8 bg-[#CFDCE1] flex flex-col justify-center items-center gap-4 md:gap-9'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
                <div className='md:w-[35vw] flex flex-col items-center'>
                    <h1 className='font-plus-jakarta max-w-2xl mb-4 text-3xl font-extrabold tracking-tight  md:text-4xl xl:text-5xl  md:leading-20 md:text-left text-center'>A calendar so you never miss a deadline again.</h1>
                    
                </div>
                <div className='md:w-[35vw] w-[80vw] overflow-hidden'>
                    <img id='box' ref={image} src={calendar} alt="" className='rounded-4xl ' />
                </div>
            </div>
            <button id='button' ref={button} className='font-plus-jakarta bg-[#FF5B21] hover:bg-[#e77b53] duration-200 py-2 px-3 rounded-full cursor-pointer font-semibold'>Check it out</button>
        
         </div>
         
         <div className="bg-gray-100 min-h-screen py-12 flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                <div className="p-1 bg-blue-200">
                </div>
                <div className="p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Basic Plan</h2>
                    <p className="text-gray-600 mb-6">Ideal for small businesses</p>
                    <p className="text-4xl font-bold text-gray-800 mb-6">$19.99</p>
                    <ul className="text-sm text-gray-600 mb-6">
                    <li className="mb-2 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 13l4 4L19 7"></path>
                        </svg>
                        10 Users
                    </li>
                    <li className="mb-2 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 13l4 4L19 7"></path>
                        </svg>
                        Basic Features
                    </li>
                    <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 13l4 4L19 7"></path>
                        </svg>
                        24/7 Support
                    </li>
                    </ul>
                </div>
                <div className="p-4">
                    <button
                    className="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                    Select Plan
                    </button>
                </div>
                </div>

                
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                <div className="p-1 bg-green-200">
                </div>
                <div className="p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Pro Plan</h2>
                    <p className="text-gray-600 mb-6">Perfect for growing businesses</p>
                    <p className="text-4xl font-bold text-gray-800 mb-6">$49.99</p>
                    <ul className="text-sm text-gray-600 mb-6">
                    <li className="mb-2 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 13l4 4L19 7"></path>
                        </svg>
                        25 Users
                    </li>
                    <li className="mb-2 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 13l4 4L19 7"></path>
                        </svg>
                        Advanced Features
                    </li>
                    <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 13l4 4L19 7"></path>
                        </svg>
                        24/7 Support
                    </li>
                    </ul>
                </div>
                <div className="p-4">
                    <button
                    className="w-full bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800">
                    Select Plan
                    </button>
                </div>
                </div>

            
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                <div className="p-1 bg-purple-200">
                </div>
                <div className="p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Enterprise Plan</h2>
                    <p className="text-gray-600 mb-6">For large-scale enterprises</p>
                    <p className="text-4xl font-bold text-gray-800 mb-6">$99.99</p>
                    <ul className="text-sm text-gray-600 mb-6">
                    <li className="mb-2 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 13l4 4L19 7"></path>
                        </svg>
                        Unlimited Users
                    </li>
                    <li className="mb-2 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http

            ://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 13l4 4L19 7"></path>
                        </svg>
                        Premium Features
                    </li>
                    <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 13l4 4L19 7"></path>
                        </svg>
                        24/7 Priority Support
                    </li>
                    </ul>
                </div>
                <div className="p-4">
                    <button
                    className="w-full bg-[#FF5B21] text-white rounded-full px-4 py-2 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple active:bg-purple-800">
                    Select Plan
                    </button>
                </div>
                </div>

            </div>
        </div>
        
        <footer className="bg-black font-sans">
            <div className="container px-6 py-12 mx-auto">
                <div className="flex justify-center items-center gap-10">
                    
                    <div className='md:w-[50vw]'>
                        <img className='md:w-80' src={ingenious} alt="" />
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Home</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Who We Are</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Our Philosophy</p>
                        </div>
                    </div>

                   
                </div>
                
               
                <p className="font-sans p-8  md:text-center md:text-lg md:p-4 text-white text-sm text-center">© 2023 INGENIOUS Inc. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}

export default Homepage