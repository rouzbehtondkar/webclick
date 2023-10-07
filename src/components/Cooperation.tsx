import Link from "next/link";
const Cooperation = () => {
    return(
        <>
            <div className="flex container mx-auto md:pt-[200px] w-[100%]">
                <div className="flex w-[40%]">
                    <div className=" flex flex-col pt-[15%]  gap-3 ">
                        <p className="text-[#1773E2] text-[24px] font-medium">
                            Cooperation
                        </p>
                        <h1 className="text-[#232323] text-[40px] font-semibold leading-[140%]">
                             Why Hivad Is The Best <br /> Choice?
                        </h1>
                        <p className="text-[#6D6D6D] text-[20px] font-normal">
                        We are committed to delivering exceptional quality, and our services have garnered a satisfaction rate of over 98% among our customers. Please click here to work with us.
                        </p>
                        <Link
                            href="/"
                            className="bg-primary w-[155px] h-[52px] rounded-[12px] flex justify-center items-center text-white "
                        >
                        See Our Projec
                        </Link>
                    </div>
                </div>
                <div className="flex w-[60%] relative">
                    <img
                            src="./img/teamWork.png"
                            className="absolute md:right-[-65px]"
                            alt=""
                    />
                    <img src="./img/watchPhoto.png"
                        className="absolute md:left-[-16px] top-[-99px] z-[-1]"
                        alt=""
                    />
                    <div className="flex text-white justify-between bg-primary absolute left-0 md:bottom-[-85px] w-[67%] pt-[24px] pb-[24px] pl-[40px] pr-[40px]">
                        <div className="flex flex-col items-center justify-center gap-[5px]">
                            <p>12</p>
                            <span>member</span>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-[5px]">
                            <p>835</p>
                            <span>Happy Client</span>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-[5px]">
                            <p>1620</p>
                            <span>Project Completed</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Cooperation;