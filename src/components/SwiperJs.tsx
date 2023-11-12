'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Virtual, Autoplay } from 'swiper/modules';
import { Controller } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/virtual';
import { useSwiper } from 'swiper/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useRef, useState } from 'react';
import Image from 'next/image';

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slideNext()}><AiOutlineArrowRight /></button>;
};
const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slidePrev()}><AiOutlineArrowRight /></button>;
};

const SwiperJs = () => {
  const swiper = useSwiper();
  const swiperRef: any = useRef(null);
  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  const goFirst = () => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0); // 처음 슬라이드로 이동
    }
  };

  const items = [
    { title: '전국 프린터 렌탈', subtitle: "전국 최저가, 당일설치, 빠른서비스", description: '고객맞춤 렌탈 서비스', src: "/slider/1.png", isFull: false },
    { title: 'A/S 24시 전국 출장 서비스', description: '', src: "/slider/2.png", isFull: false },
    { title: '맞춤 견적 상담', subtitle: "필요한 임대기와 가격을 친절하게 상담해드립니다.", description: '010-6646-1555', src: "/slider/4.png", isFull: false },
  ];
  return (
    <div className='relative flex justify-center overflow-hidden'>
      <div className='flex justify-center border border-solid border-[#efefef'>
        <div className='hidden sm:flex absolute z-50 bottom-[50px] left-[80px] flex-col p-[10px] shadow-lg rounded-lg bg-white'>
          <button className='text-left rounded-md h-[30px] indent-3  '>제품 전체 보기</button>
          <div className='flex gap-x-[20px]' >
            <button className="w-[50px] h-[20px] flex justify-center items-center rounded-md 
            swiper-button-prev" onClick={goPrev}>
              <AiOutlineArrowLeft />
            </button>
            <button className=" w-[50px] h-[20px] flex justify-center items-center rounded-md
            swiper-button-next" onClick={goNext}>
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
        <Swiper
          className='w-full min-w-[500px] max-w-[100vw]'
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='w-full h-[400px] bg-gray-200 rounded-lg p-4'>
                <div className='flex justify-between px-[100px] py-[50px]'>
                  <div>
                    <h2 className="sm:text-[50px] font-bold text-black">{item.title}</h2>
                    {item.subtitle && <p className='text-gray-600'>{item.subtitle}</p>}
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div >
                    <Image width={300} height={100} alt="slider 이미지" src={item.src} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>

  );
};

export { SwiperJs };