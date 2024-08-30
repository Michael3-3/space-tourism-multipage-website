import Menu from "./Menu";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="w-full h-14 absolute pl-10 top-8 flex justify-between items-center">
        <div id="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fillRule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </div>
        <div
          id="line"
          className="md:hidden lg:block sm:block w-1/2 z-10 relative h-[1px] bg-gradient-to-l from-indigo-500 via-purple-500"></div>
        <Menu />
        <ul className="sm:hidden md:flex lg:flex hidden md:w-4/5 lg:w-1/2 h-14  gap-10 backdrop-sepia-0 bg-white/10 backdrop-blur-xl pr-10 text-sm tracking-tighter text-white  items-center justify-end uppercase">
          <Link to="/">
            <button>
            <li className="border-b-2 pt-3 border-transparent ease-out duration-100 pb-3  hover:border-slate-300">
              00 Home
            </li>
            </button>
          </Link>
          <Link to="/destination">
            <li className="border-b-2 pt-3 border-transparent ease-out duration-100 pb-3  hover:border-slate-300">
              01 Destinations
            </li>
          </Link>
          <Link to="/crew">
            <li className="border-b-2 pt-3 border-transparent ease-out duration-100 pb-3  hover:border-slate-300">
              02 Crew
            </li>
          </Link>
          <Link to="/technology">
            <li className="border-b-2 pt-3 border-transparent ease-out duration-100 pb-3  hover:border-slate-300">
              03 Technology
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
