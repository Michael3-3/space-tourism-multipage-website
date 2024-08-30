import { useState } from "react";
import { Link } from "react-router-dom";


const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div
        id="menu"
        className="md:hidden w-16  flex items-center"
        onClick={toggleSideBar}>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21">
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
      </div>

      {isOpen && (
        <div className="fixed top-0 right-0 z-50 bg-slate-100/10 backdrop-blur-xl flex flex-col justify-start items-start h-screen w-3/4 ">
          <button className="fixed top-7 right-7" onClick={toggleSideBar} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          </button>
            <ul class="relative top-20 w-full h-1/2 flex flex-col justify-evenly text-2xl text-white p-10 uppercase">
            <button onClick={toggleSideBar}>
              <li class="hover:border-b-2 pt-3 ease-out duration-100 pb-3  border-slate-300">
                <Link to="/">00 Home</Link>
              </li>
              </button>
              <button onClick={toggleSideBar}>
              <li class="hover:border-b-2 pt-3 ease-out duration-100 pb-3 border-slate-300">        
                <Link to="/destination">01 Destinations</Link>
              </li>
              </button>
              <button onClick={toggleSideBar}>
              <li class="hover:border-b-2 pt-3 ease-out duration-100 pb-3 border-slate-300">
                <Link to="/crew">02 crew</Link>
              </li>
              </button>
              <button onClick={toggleSideBar}>
              <li class="hover:border-b-2 pt-3 ease-out duration-100 pb-3 border-slate-300">
                <Link to="/technology">03 Technology</Link>
              </li>
              </button>
            </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
