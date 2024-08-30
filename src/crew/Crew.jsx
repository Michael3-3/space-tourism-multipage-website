import { useState, useEffect } from "react";
import data from "../../starter-code/data.json";
const Crew = () => {
  const [crewData, setCrewData] = useState(null);

  useEffect(() => {
    changeData(0);
  }, []);

  const changeData = (index) => {
    setCrewData(data.crew[index]);
    console.log(data.crew[index]);
  };

  if (crewData === null) {
    return <div id="loading">loading..</div>;
  }
  return (
    <>
      <div
        id="crew"
        className="lg:h-[45rem] h-[70rem] w-full bg-crewMobile md:bg-crewTablet lg:bg-crewDesktop bg-cover">
        <div id="main" className="relative top-20 w-full h-screen ">
          <div
            id="title"
            className="text-white text-2xl lg:text-4xl tracking-widest lg:pt-20 lg:pl-20 lg:pr-20 text-center lg:text-start pt-20">
            02 &nbsp; MEET YOUR CREW
          </div>
          <div
            id="hero"
            className="text-white lg:pl-20 lg:pr-20  lg:flex w-full ">
            <div id="part1" className="lg:w-1/2 text-center lg:mb-0 mb-10 lg:text-start lg:items-start items-center flex-col flex justify-center">
              <div
                id="profision"
                className="uppercase text-slate-400 font-serif lg:mt-0 mt-5 text-2xl">
                {crewData.role}
              </div>
              <div id="name" className="text-5xl font-sans uppercase pt-5">{crewData.name}</div>
              <div id="bio" className="w-4/5 pt-5 text-center lg:text-left text-slate-400">{crewData.bio}</div>
              <div id="select" className="flex lg:gap-7 z-10 gap-14 absolute bottom-1 lg:bottom-1    mt-20">
              <button onClick={()=>{changeData(0)}} className=""><div className="rounded-full hover:bg-slate-100 border-2 border-white lg:w-4 lg:h-4 w-5 h-5 bg-slate-600"></div></button>
              <button onClick={()=>{changeData(1)}} className=""><div className="rounded-full hover:bg-slate-100 border-2 border-white lg:w-4 lg:h-4 w-5 h-5 bg-slate-600"></div></button>
              <button onClick={()=>{changeData(2)}} className=""><div className="rounded-full hover:bg-slate-100 border-2 border-white lg:w-4 lg:h-4 w-5 h-5 bg-slate-600"></div></button>
              <button onClick={()=>{changeData(3)}} className=""><div className="rounded-full hover:bg-slate-100 border-2 border-white lg:w-4 lg:h-4 w-5 h-5 bg-slate-600"></div></button>
              
              </div>
            </div>
            <div id="part2" className="flex flex-col justify-start items-center">
                <img src={crewData.images.png} className="w-2/3 h-full" alt="" />
                <div id="filler" className="relative top-[-20px] blur-3xl bg-gradient-to-t from-black/20 to-slate-700/20 w-2/3 h-[50px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crew;
