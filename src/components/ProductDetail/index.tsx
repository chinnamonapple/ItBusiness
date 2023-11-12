import Image from "next/image"

export const ProductDetail = () => {
  return (
    <div className="flex flex-col justify-center py-[100px]">
      <div className="mb-[50px]">
        <p className="text-center text-[22px] font-bold">아이티 비즈니스 추천 상품</p>
        <p className="text-center">원하시는 제품이 없다면 문의 주세요</p>
      </div>
      <div className="flex flex-wrap justify-center gap-x-[50px] gap-y-[50px]">
        <Card src={"/products/1.jpg"} />
        <Card src={"/products/2.jpg"} />
        <Card src={"/products/3.jpg"} />
        <Card src={"/products/4.jpg"} />
      </div>
    </div>
  )
}
interface CardProps {
  src: string
}
export const Card = ({ src }: CardProps) => {
  return (
    <div className="flex flex-col justify-center bg-white p-[20px] rounded-md max-w-[396px] max-h-[500px]">
      <Image width={376} height={376} src={src} alt="제품이미지" />
      <p className="text-center">★프린터기 팩스기 기본세트★</p>
      <p className="text-center">₩29,800 <span className="line-through ">₩49,000</span>
      </p>
    </div>
  )
}