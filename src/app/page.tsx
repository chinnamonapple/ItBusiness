import type { Metadata } from 'next';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import 'swiper/css';
import { SwiperJs } from '@/components/SwiperJs';


export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'User dashboard',
};

const Dashboard = () => (
  <div className="content">
    <header className='relative bg-red-50'>
      <div className='bg-blue-600 h-[50px]'></div>
      <nav
        className='fixed z-[100] top-[20px] flex justify-between items-center 
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
    </header>
    <main className='pt-[100px] bg-blue-200'>
      <SwiperJs />
    </main>
    <footer className='bg-green-200'>
      footer
    </footer>
  </div>
);

export default Dashboard;