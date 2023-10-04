import Image from "next/image";
import Link from 'next/link'
const slider = () => {
  return (
    <div className="w-[100%]">
      {/* left sidebar text */}
     <div className="container shadow-lg mx-auto flex gap-2 relative">
        <div className="text-slider md:w-[40%] flex flex-col gap-[24px] md:pt-[126px] absolute left-0 justify-center  ">
          {/* title slider */}
          <div className="flex flex-col gap-[12px] z-1">
            <span className="text-[#1773E2] text-[24px] font-bold">Welcome!</span>
            <h1 className="text-[#232323] text-[48px] w-[100%] font-bold">
              create Your Own Awesome Business
            </h1>
          </div>
          {/* paragraph slider */}
          <p className="md:w-[87%]">
            webclick team offers a range of services including UI/UX Design
            tailored to developers. We strive to provide topnotch service to all
            our clients.
          </p>
          {/* link slider */}
          <Link href="/" className="bg-blue-500 w-[135px] h-[52px] rounded-[12px] flex justify-center items-center text-white ">get start</Link>
        </div>
        {/* show photo slider */}
        <div className="flex md:w-[77.5%] absolute right-[31px] text-right md:pr-[44px] md:pl-[44px] back-slider  ">
          salam
        <img className="relative h-[682px] " src="./img/man.png" alt="alt" />
        </div>
     </div>
    </div>
  );
};

export default slider;
