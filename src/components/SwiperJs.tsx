'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Virtual } from 'swiper/modules';
import { Controller } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/virtual';
import { useSwiper } from 'swiper/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useRef, useState } from 'react';

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
    { title: 'Slide 1', description: 'Description for Slide 1' },
    { title: 'Slide 2', description: 'Description for Slide 2' },
    { title: 'Slide 3', description: 'Description for Slide 3' },
  ];
  return (
    <div className='relative flex justify-center w-full '>
      <div className='flex justify-center border border-solid border-[#efefef] p-[50px]'>
        <div className='flex flex-col gap-y-[20px] w-[200px]'>
          <p>OUR PRODUCT</p>
          <p>제품 설명</p>
          <button className='text-left bg-red-300 rounded-md h-[30px] indent-3'>제품 전체 보기 링크</button>
          <div className='flex gap-x-[20px]'>
            <button className="w-[50px] h-[20px] flex justify-center items-center rounded-md bg-red-300 
            swiper-button-prev" onClick={goPrev}>
              <AiOutlineArrowLeft />
            </button>
            <button className=" w-[50px] h-[20px] flex justify-center items-center rounded-md bg-red-300
            swiper-button-next" onClick={goNext}>
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
        <div className='w-[200px] p-[20px]'>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='h-[200px] bg-gray-200 rounded-lg p-4'>
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
    </div>

  );
};

export { SwiperJs };