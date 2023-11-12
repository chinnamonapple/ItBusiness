/* use client */
import Image from "next/image"

const Logo = () => {
  return (
    <div className="w-[70px] bg-white rounded-md">
      <Image src="/logo.png" alt="웹사이트" height={30} width={70} />
    </div>
  )
}

export const Footer = () => {
  return (
    <footer className='bg-[#262626] text-white sm:p-[70px] p-[20px]'>
      <div className="flex flex-col sm:flex-row justify-between mb-[20px] sm:mb-[0px]">
        <div className="flex flex-col sm:flex-row mb-[20px] sm:mb-[50px] gap-y-[20px] sm:gap-y-[0px] gap-x-[80px]">
          <Logo />
          <ul className="flex gap-x-[20px]">
            <li>회사소개</li>
            <li>제품소개</li>
            <li>찾아오시는 길</li>
            <li>협력업체</li>
          </ul>
        </div>
        <div className="bg-[#969fec] p-[20px] rounded-[20px] text-[18px]">
          <ul className="list-none flex gap-x-[20px]">
            <li>빠른 상담 / 견적문의</li>
            <li>
              <a href="tel:051-463-8600">{`051 ) 463-8600`}</a>
            </li>
          </ul>
          <ul className="list-none flex">
            <li>운영시간</li>
            <li>AM09:30  ~ PM05:30</li>
          </ul>
        </div>
      </div>
      <div className="text-[13px] text-[#d2d2d2]">
        <div >
          <address className="">
            <p>
              <span>(주)아이티비지니스</span>
              <span>대표 : 김태원</span>
            </p>
            <p className="flex flex-col sm:flex-row gap-y-[10px] sm:gap-y-0 gap-x-[20px]">
              <span>사업자등록번호 : 000-000-0000</span>
              <span>업종 : 통신 임대업</span>
              <span>주소 : 부산특별시 </span>
            </p>
            <p className="flex flex-col sm:flex-row gap-y-[10px] sm:gap-y-0 gap-x-[20px]">
              <span>대표번호 : {`051)463-8600`}</span>
              <span>팩스 : {`000-0000-00000`}</span>
              <span>E-mail : it30000@naver.com</span>
            </p>
          </address>
          <p className="flex flex-col sm:flex-row gap-y-[10px] sm:gap-y-0 gap-x-[20px]">Copyright © 2023 it30000.co.kr. All Rights Reserved.</p>
        </div>
      </div>
    </footer >
  )
}
export default Footer