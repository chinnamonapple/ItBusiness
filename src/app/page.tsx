import type { Metadata } from 'next';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import 'swiper/css';
import { SwiperJs } from '@/components/SwiperJs';
import Footer from '@/components/Footer';
import { Nav } from '@/components/Navigation';
import { ProductDetail } from '@/components/ProductDetail';
import { MobileNav } from '@/components/Navigation/mobile';


export const metadata: Metadata = {
  title: '아이티 비즈니스',
  description: '사무 기기, 복사기, 프린터, 복합기 임대 및 판매 전문점 입니다. 언제든 어디서든 찾아가겠습니다. ',
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