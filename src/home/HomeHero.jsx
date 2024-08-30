import React from 'react';
import { Link } from 'react-router-dom';
const HomeHero = ()=>{
    return(
        <>
          <div
          id="hero"
          class="w-full lg:h-2/3 h-4/5 lg:pr-20 lg:pl-20 absolute bottom-1 lg:flex lg:text-left text-center  items-center">
          <div
            id="part1 "
            class="lg:w-1/2 lg:text-left lg:p-0 pb-20 p-6 text-center">
            <h2 class="text-lg font-semibold text-white">
              SO, YOU WANT TO TRAVEL TO
            </h2>
            <h1 class="text-8xl font-serif text-yellow-100 mt-5 mb-5">SPACE</h1>
            <p class="text-sm text-white lg:w-4/5 lg:text-left text-center tracking-tight">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
          </div>
          <div
            id="part2"
            class="lg:w-1/2 lg:h-full flex items-center justify-center">
             <Link to='/destination'>
                        <div
              id="bigbutton"
              class="rounded-full bg-white w-[200px] h-[200px] md:border-[30px] flex items-center cursor-pointer justify-center">
              <p class="text-xl font-normal tracking-wide">EXPLORE</p>
            </div>
            </Link>
 
          </div>
        </div>
        </>
    )
}

export default HomeHero