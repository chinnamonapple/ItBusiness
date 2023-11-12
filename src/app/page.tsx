import type { Metadata } from 'next';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import 'swiper/css';
import { SwiperJs } from '@/components/SwiperJs';
import Footer from '@/components/Footer';
import { Nav } from '@/components/Navigation';
import { ProductDetail } from '@/components/ProductDetail';
import { MobileNav } from '@/components/Navigation/mobile';


export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'User dashboard',
};

const Dashboard = () => (
  <div className="content">
    <header className='relative'>
      <div className='hidden sm:block h-[50px] bg-[#efefef]'></div>
      <MobileNav />
      <Nav />
    </header>
    <main className='pt-[100px] bg-[#efefef]'>
      <SwiperJs />
      <ProductDetail />
    </main>
    <Footer />
  </div>
);

export default Dashboard;