const Work = () => {
    return(
        <div className="w-[100%] flex container mx-auto">
            {/* show photo work */}
            <div className="flex flex md:w-[50%]">
                show photo
            </div>
            {/* text word component  */}
            <div className="flex flex-col gap-[24px] md:w-[50%]">
                <div className="flex flex-col gap-[12px]">
                    <span className="f14-400 text-primary">Webclick Team</span>
                </div>
            </div>
        </div>
    )
}

export default Work