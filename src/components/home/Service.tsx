import Link from "next/link";
const Service = () => {
    const data=[
        {
            id:1,
            
            title:'UI/UX Design',
            desc:'We offer UI/UX design services of the highest quality. Our team ensures clarity and precision in all design work.',
            btn:'READ MORE',
            image:'https://s31.picofile.com/file/8468393468/painter.png',
            bg:'https://s31.picofile.com/file/8468393450/bgBlue.png'
        },
        {
            id:2,
            title:'Development',
            desc:'Create a platform with our highest quality and coolest features. We are ready to offer end-to-end development.',
            btn:'READ MORE',
            image:'https://s31.picofile.com/file/8468393500/monitor.png',
            bg:'https://s31.picofile.com/file/8468393450/bgBlue.png'
        },
        {
            id:3,
            title:'Marketing',
            desc:'Our team assists your businesses in promoting and selling their products or services.',
            btn:'READ MORE',
            image:'https://s31.picofile.com/file/8468393518/speaker.png',
            bg:'https://s31.picofile.com/file/8468393450/bgBlue.png'
        }
    ]
  return (
    <div className="w-full pt-[15%] pb-[5%]">
      <div className="flex  container mx-auto">
        <div className="flex  ">

        {data.map(item=>(
            
            <div key={item.id} className="card flex mr-[42px] flex-col items-center justify-center gap-2  ">
       <div className="flex relative">
       <img className="" src={item.bg} alt="" />
            <img className="absolute imgCard" src={item.image} alt="" />
       </div>
            <h1 className="titleCard ">{item.title}</h1>
            <span className="descCard  ">{item.desc}</span>
            <Link  
            href="/"
            className=" btnCard"
            >
        {item.btn}
          </Link>

        </div>
              ))}
              </div>
      </div>
    </div>
  );
};

export default Service;
