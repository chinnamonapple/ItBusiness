'use client'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
/** Scroll 영역이 밑으로 내려간다면 Nav 변환 */

export const Nav = () => {
  return (
    <nav
      className='hidden fixed z-[100] top-[20px] sm:flex justify-between items-center 
        left-[50%] translate-x-[-50%]
        w-[1200px] h-[100px] bg-white  pl-[50px] pr-[100px] py-[10px] text-[20px] rounded-md' >
      <ul className='flex list-none gap-x-[30px] items-center '>
        <li><AiOutlineMenu /></li>
        <li>회사소개</li>
        <li>사업분야</li>
        <li>제품소개</li>
        <li>블로그</li>
      </ul>
      <ul className='flex items-center list-none gap-x-[50px]'>
        <li><AiOutlineSearch /></li>
        <li>상담문의</li>
      </ul>
    </nav>
  )
}