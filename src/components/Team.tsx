import Image from "next/image";
import Link from "next/link";
const Team = () => {
  return (
    <div className="w-[100%] pb-[100px] ">
      <div className="flex">
        <div className="imgBg absolute flex w-[50%]">
          <img src="./img/bg-blue.png" className="w-[557px] h-[687px]" alt="" />
          <img
            src="./img/team.png"
            className="absolute top-[139.59px] left-[150px]"
            alt=""
          />
        </div>
        <div className=" flex flex-col  pl-[811px] pt-[15%]  gap-3 ">
          <p className="text-[#1773E2] text-[24px] font-medium">
            Webclick Team
          </p>
          <h1 className="text-[#232323] text-[40px] font-semibold leading-[140%]">
            review our previous <br />
            work samples
          </h1>
          <p className="text-[#6D6D6D] text-[20px] font-normal">
            Feel free to review our previous work samples to <br /> ensure the
            high level of our services. We have <br /> collaborated with
            renowned companies globally.
          </p>
          <Link
            href="/"
            className="bg-primary w-[155px] h-[52px] rounded-[12px] flex justify-center items-center text-white "
          >
           See Our Projec
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Team;
