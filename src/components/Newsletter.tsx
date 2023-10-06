
import Link from "next/link"

const Newsletter = () => {
    return(
        <>
                <div className="flex md:pt-[200px] container mx-auto 
                                w-[100%]">
                    <div className="flex flex-col gap-[40px] w-[100%] rounded-[32px] bg-[#dceafb] items-center justify-center p-[30px]">
                            <div className="flex flex-col justify-center items-center gap-[12px]">
                                <p className="text-[#1773E2] text-[24px] font-medium">
                                    Newsletter
                                </p>
                                <h4 className="text-[#232323] text-[40px] font-semibold leading-[140%]">
                                    Subscribe and receive exclusive offers.
                                </h4>
                            </div>
                            <div className="flex bg-white w-[50%] rounded-[12px] gap-[15px]  
                                pt-[15px] 
                                pb-[15px]
                                pr-[18px]
                                pl-[18px]">
                                <input type="text" className="w-[80%] outline-none border-0" placeholder="Enter your mail" />
                                <Link
                                    href="/"
                                    className="bg-primary w-[155px] h-[52px] rounded-[12px] flex justify-center items-center text-white "
                                    >
                                    Subscribe
                                </Link>
                            </div>
                    </div>
                </div>
        </>
    )
}


export default Newsletter