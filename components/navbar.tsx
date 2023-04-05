

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
        <nav ref={navRef} className='select-none bg-black flex justify-between'>
            <Image
            src={logo}
            alt="logo"
            height={35}
            className='object-contain ml-2'
            />
            <div className='sm:hidden flex p-3'>
              <button className="mr-2 flex align-bottom bg-transparent font-semibold py-2 px-4 border border-yellow-500 rounded-full hover:bg-yellow-500 text-white transition-all duration-500 ease-in-out">
                Prendre RDV
              </button>
              <button>
                <GoThreeBars onClick={toggleMenu} className="text-white mr-2 h-6 w-6 hover:text-yellow-500"></GoThreeBars>
              </button>
            </div>
            <div className={"transition-all " + (isMenu ? "child-nomargin child:w-full child:justify-center items-center bg-black p-4 z-20 flex flex-col absolute w-screen" : 'sm:top-0 sm:static topOutside absolute sm:nav-button-container sm:flex sm:p-3')}>
              {isMenu ? 
                <button className='w-full'>
                  <AiOutlineClose onClick={toggleMenu} className="m-auto text-center text-white h-6 w-6 hover:text-yellow-500"></AiOutlineClose>
                </button>
              : 
              ""
              }
              <div className={isMenu ? "hidden" : "m-auto"}>
                <button onClick={() => openNewTab("https://m.facebook.com/people/Espace-Coiffure/100063533772501/")}>
                  <FaFacebookF 
                  href="https://codingbeautydev.com/blog"
                  target="_blank"
                  className='text-white mr-6 h-6 w-6 hover:text-yellow-500'
                  />
                </button>
                <button onClick={() => openNewTab("https://www.instagram.com/espace__coiffure/")}>
                  <BsInstagram className="text-white mr-6 h-6 w-6 hover:text-yellow-500" />
                </button>
              </div>
              <button className="text-white mr-2 flex align-bottom bg-transparent font-semibold py-2 px-4 hover:text-yellow-500">
                Services
              </button>
              <button className="text-white mr-2 flex align-bottom bg-transparent font-semibold py-2 px-4 hover:text-yellow-500">
                Tarifs
              </button>
              <button className="text-white mr-2 flex align-bottom bg-transparent font-semibold py-2 px-4 hover:text-yellow-500">
                Contact
              </button>
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
              <button className="mr-2 mt-2 sm:mt-0 flex align-bottom bg-transparent font-semibold py-2 px-4 border border-yellow-500 rounded-full hover:bg-yellow-500 text-white transition-all duration-500 ease-in-out">
                Prendre RDV
              </button>
            </div>
        </nav>
    </>
  )
}
