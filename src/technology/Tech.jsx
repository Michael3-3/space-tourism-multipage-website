import data from "../../starter-code/data.json";
import { useState, useEffect } from "react";
const Tech = () => {
  const [techData, setTechData] = useState();
  useEffect(() => {
    changeData(0);
  }, []);
  const changeData = (index) => {
    setTechData(data.technology[index]);
    console.log(data.technology[index]);
  };

  if (techData == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="lg:h-[45rem] h-[70rem] w-full bg-crewMobile md:bg-crewTablet lg:bg-crewDesktop bg-cover">
      <div id="main" className="relative top-20 w-full h-screen right-0">
        <div
          id="title"
          className="text-white text-2xl lg:text-4xl tracking-widest lg:pt-20 lg:pl-20 lg:pr-20 text-center lg:text-start pt-20">
          03 &nbsp; SPACE LAUNCH 101
        </div>

        <div id="hero" className="text-white lg:pl-20 lg:pr-20 lg:flex-row flex-col-reverse flex w-full lg:absolute lg:right-1">
            <div id="part0" className="lg:items-start flex lg:flex-row items-center justify-center">
            <div id="select" className="flex lg:flex-col lg:items-start items-center gap-5 mt-20 mr-10">
              <button onClick={()=>{changeData(0)}} ><div className="dot focus:bg-slate-200 rounded-full hover:bg-slate-200 ease-in-out duration-500 w-14 h-14 border-2 border-white"></div></button>
              <button onClick={()=>{changeData(1)}} ><div className="dot focus:bg-slate-200 rounded-full hover:bg-slate-200 ease-in-out duration-500 w-14 h-14 border-2 border-white"></div></button>
              <button onClick={()=>{changeData(2)}} ><div className="dot focus:bg-slate-200 rounded-full hover:bg-slate-200 ease-in-out duration-500 w-14 h-14 border-2 border-white"></div></button>
              
              </div>
            </div>
          <div id="part1" className="lg:w-1/2  flex-col flex items-center justify-center">
            <div
              id="profision"
              className="uppercase text-slate-400 font-sans text-2xl">
              the terminology...
            </div>
            <div id="name" className="text-5xl font-sans uppercase pt-5">
              {techData.name}
            </div>
            <div
              id="bio"
              className="w-4/5 pt-5 text-center lg:text-left text-slate-400">
              {techData.description}
            </div>
          </div>
          <div id="part2" className="flex flex-col justify-start items-center">
                <img src={techData.images.portrait} className="w-2/3 " alt="" />
                <div id="filler" className="relative top-[-20px] blur-3xl bg-gradient-to-t from-black/20 to-slate-700/20 w-2/3 h-[50px]"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
