import Image from "next/image";


const slider = () => {
  return (
    <div className="w-[100%] pt-20">
      {/* left sidebar text */}
      <div className="container flex  ">
        <div className="flex flex-col w-[50%] gap-2">
          <h2 className="text-[#1773E2] text-[24px] font-bold">Welcome!</h2>
          <h1 className="text-[#232323] text-[48px] font-bold">
            create Your Own <br /> Awesome Business
          </h1>
          <p className="">
            webclick team offers a range of services including UI/UX Design
            tailored to developers. We strive to provide topnotch service to all
            our clients.
          </p>
          <button className="bg-blue-500 w-[135px] h-[52px] rounded-xl text-white ">
            Get started
          </button>
        </div>
        <div className="flex  w-[50%]">
          <img className="relative"  src="./img/bg.png" alt="alt" />
          <img className="absolute w-[40%] h-[50%] top-18 right-[10%]" src="./img/man.png" alt="man" />
        </div>
      </div>
    </div>
  );
};

export default slider;
