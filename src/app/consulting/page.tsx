import { Input } from "@/components/Input";
import { PersonalPolicyMore } from "@/components/Policy/personal";

const Consulting = () => {
  return (
    <div className='flex justify-center items-center sm:min-h-[500px] '>
      <div className="flex flex-col justify-center items-center gap-y-[20px] max-w-[700px] w-full bg-white px-[80px] py-[40px] rounded-lg mb-[100px] sm:mt-[40px]">
        <p className="text-[22px] font-bold mb-[40px]">견적 문의</p>
        <Input
          type={"text"}
          placeholder={"업체명(성함)"}
          focus={true}
        />
        <Input
          type={"text"}
          placeholder={"연락처"}
        />
        <Input
          type={"text"}
          placeholder={"이메일"}
        />
        <Input
          type={"text"}
          placeholder={"설치 장소 (예시. 부산 사하구)"}
        />
        <Input
          type={"text"}
          placeholder={"설치 희망기종"}
        />
        <Input
          type={"text"}
          placeholder={"설치 희망날짜"}
        />
        <Input
          type={"file"}
          placeholder={"첨부파일"}
        />
        <PersonalPolicyMore />
        <button className="max-w-[200px] w-full h-[40px] border border-solid border-[#595959] rounded-lg hover:bg-blue-400 hover:border-blue-400 hover:text-white  ">접수하기</button>
      </div>
    </div>
  )
};




export default Consulting;