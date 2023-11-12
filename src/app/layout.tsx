import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { MobileNav } from '@/components/Navigation/mobile';
import { Nav } from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '아이티 비즈니스',
  description: '사무 기기, 복사기, 프린터, 복합기 임대 및 판매 전문점 입니다. 언제든 어디서든 찾아가겠습니다. ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className='relative'>
          <div className='hidden sm:block h-[50px] bg-[#efefef]'></div>
          <MobileNav />
          <Nav />
        </div>
        <main className='pt-[100px] bg-[#efefef]'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
