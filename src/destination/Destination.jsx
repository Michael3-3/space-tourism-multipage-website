import { useState, useEffect } from "react";
import data from "../../starter-code/data.json";

const Destination = () => {
  const [destinationData, setDestinationData] = useState(null);

  useEffect(() => {
    changeData(0);
  }, []); // Run only once when the component mounts

  const changeData = (index) => {
    setDestinationData(data.destinations[index]);
    console.log(data.destinations[index]);
  };

  if (destinationData === null) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div
      id="main"
      className="bg-destinationMobile md:bg-destinationTablet lg:bg-destinationDesktop lg:bg-fixed w-full font-Barlow lg:h-[45rem] h-[75rem] bg-cover font-light">
      
      <div
        id="hero"
        className="w-full h-3/4 relative top-36 md:pr-20 md:pl-20 md:pb-20 text-center  text-xl tracking-widest font-thin  md:text-left">
        <div id="title" className="text-white lg:ml-10 ">
          01 &nbsp; PICK YOUR DESTINATION
        </div>
        <div
          id="heroMain"
          className="lg:flex w-full h-full flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-start ">
          <div
            id="part1"
            className=" lg:h-full lg:w-7/12 ml-5 h-[200px ] w-[200px] mt-8 flex lg:items-start lg:justify-start  justify-center">
            <img
              src={destinationData.images.png}
              alt={destinationData.name || "Destination Image"}
            />
          </div>
          <div id="part2" className=" lg:h-full lg:w-5/12 ">
            <div
              id="destinationButtons" 
              className="gap-8 lg:flex lg:flex-row flex justify-evenly lg:justify-start mt-8  text-stone-200 pl-5">
              <button
                className="border-b-2 border-transparent hover:border-stone-300"
                onClick={() => {
                  changeData(0);
                }}>
                Moon
              </button>
              <button
                className="border-b-2 border-transparent hover:border-stone-300"
                onClick={() => {
                  changeData(1);
                }}>
                Mars
              </button>
              <button
                className="border-b-2 border-transparent hover:border-stone-300"
                onClick={() => {
                  changeData(2);
                }}>
                Europa
              </button>
              <button
                className="border-b-2 border-transparent hover:border-stone-300"
                onClick={() => {
                  changeData(3);
                }}>
                Titan
              </button>
            </div>
            <div
              id="planet"
              className="text-8xl text-slate-200 pl-4 mt-7 font-serif uppercase">
              {destinationData.name}
            </div>
            <div
              id="description"
              className="text-white pl-4 mt-5 tracking-tightest font-thin text-xl">
              {destinationData.description}
            </div>
            <div id="div" className="h-[1px] bg-slate-500 mt-5 mb-5 w-full"></div>
            <div id="info" className="flex lg:flex-row flex-col gap-14 justify-evenly items-center w-full text-stone-100 uppercase">
              <div id="distance">
                <div id="headDistance">Avg. Distance</div>
                <div id="value">{destinationData.distance}</div>
              </div>
              <div id="timeTakes">
                <div id="headTimeTakes">Est. time travel</div>
                <div id="value">{destinationData.travel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
