'use client'
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';


export const MobileNav = () => {
  const [click, setClick] = useState(false)
  return (
    <nav
      className='relative sm:hidden flex justify-between items-center 
        w-full h-[100px] bg-white  pl-[50px] pr-[50px] py-[40px] text-[20px] rounded-md' >
      <div onTouchStart={() => setClick(!click)} >
        <GiHamburgerMenu />
      </div>
      <div>상담문의</div>
      <ul className={`absolute ${click ? "flex" : "hidden"} transition-all duration-100  w-[250px] h-[100vh] top-0 left-0 z-[999] bg-white list-none  flex-col gap-y-[30px] pt-[50px] pl-[20px] `}>
        <li className='absolute right-[20px] top-[50px]' onTouchStart={() => setClick(!click)} >
          <GiHamburgerMenu />
        </li>
        <li>회사소개</li>
        <li>사업분야</li>
        <li>제품소개</li>
        <li>블로그</li>
      </ul>
    </nav>
  )
}