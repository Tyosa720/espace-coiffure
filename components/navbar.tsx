

import { useRef, useState, useEffect} from 'react';

import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import  {BsCalendarCheck, BsInstagram} from 'react-icons/bs'
import  {AiOutlinePhone, AiOutlineClose, AiFillInstagram} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import logo from "@/assets/logo.png"
import {GoThreeBars} from 'react-icons/go'



export default function Nav() {
  const [isMenu, setMenu] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event:Event) {
      if(navRef.current && !navRef.current.contains(event.target)){
        setMenu(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [navRef]);


  const openNewTab = (url:string) => {
    window.open(url, "_blank")
  }
  function toggleMenu() {
    setMenu(!isMenu);
  }
  return (
    <>
        <nav ref={navRef} className='navbar select-none bg-black flex justify-between p-3'>
          <a href="#home">
            <Image
            src={logo}
            alt="logo"
            height={35}
            className='md:block z-50 fixed object-contain ml-2 hidden'
            />
          </a>
            <div className='md:hidden justify-between w-full flex p-3'>
              <button>
                <GoThreeBars onClick={toggleMenu} className="text-white mr-2 h-6 w-6 hover:text-yellow-500"></GoThreeBars>
              </button>
              <a className="mr-2 mt-2 md:mt-0 flex align-bottom bg-transparent font-semibold py-2 px-4 border border-yellow-500 rounded-full hover:bg-yellow-500 text-white transition-all duration-500 ease-in-out" href="tel:+33235053232">
                <button >Prendre RDV </button>
              </a>
            </div>
            <div className={"transition-all duration-300 justify-end "
             + (isMenu ?
              "top-0 left-0 child-nomargin child:w-full child:justify-center items-center bg-black p-4 z-20 flex flex-col absolute w-screen" 
              : 
              'top-0 left-0 child-nomargin child:w-full md:child:w-auto child:justify-center items-center bg-black p-4 z-20 flex flex-col absolute w-screen topOutside md:top-0 md:fixed md:flex-row md:justify-end md:items md:nav-button-container md:flex md:p-3'
              )}>
              {isMenu ? 
                <button className='w-full'>
                  <AiOutlineClose onClick={toggleMenu} className="m-auto text-center text-white h-6 w-6 hover:text-yellow-500"></AiOutlineClose>
                </button>
              : 
              ""
              }
              <div className={"flex w-32 justify-around" + (isMenu ? " hidden " : "")}>
                <button className='p-2' onClick={() => openNewTab("https://m.facebook.com/people/Espace-Coiffure/100063533772501/")}>
                  <FaFacebookF
                  size={28}
                  target="_blank"
                  className='text-white hover:text-yellow-500'
                  />
                </button>
                <button className='p-2' onClick={() => openNewTab("https://www.instagram.com/espace__coiffure/")}>
                  <BsInstagram 
                  size={28} 
                  target="_blank" 
                  className="text-white hover:text-yellow-500" />
                </button>
              </div>
              <a className="text-white mr-2 flex align-bottom bg-transparent font-semibold py-2 px-4 hover:text-yellow-500" href="#tarifs">
                  Tarifs
              </a>
              <a className="text-white mr-2 flex align-bottom bg-transparent font-semibold py-2 px-4 hover:text-yellow-500" href="#contact">
                  Contact
              </a>
              <div className={isMenu ? "flex py-2" : "hidden"}>
                <button className='pr-2' onClick={() => openNewTab("https://m.facebook.com/people/Espace-Coiffure/100063533772501/")}>
                  <FaFacebookF 
                  href="https://codingbeautydev.com/blog"
                  target="_blank"
                  className='text-white h-6 w-6 hover:text-yellow-500'
                  />
                </button>
                <button className='pl-2' onClick={() => openNewTab("https://www.instagram.com/espace__coiffure/")}>
                  <BsInstagram className="text-white h-6 w-6 hover:text-yellow-500" />
                </button>
              </div>
                <a className="mr-2 mt-2 md:mt-0 flex align-bottom bg-transparent font-semibold py-2 px-4 border border-yellow-500 rounded-full hover:bg-yellow-500 text-white transition-all duration-500 ease-in-out" href="#contact">
                  <button >Prendre RDV </button>
                </a> 
            </div>
        </nav>

    </>
  )
}
