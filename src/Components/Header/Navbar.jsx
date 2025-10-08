import React from "react";
import navLogo from '../../assets/navLogo.png'
import navBtnImg from '../../assets/navBtnLogo.png'
import { Link, NavLink } from "react-router";

const Navbar = () => {


    const navActiveStatus = (isActive) => {
        return isActive 
        ? "text-[#632EE3] font-bold underline"
        : "text-black hover:text-[#632EE3]";

    }

  return (
    <div className="navbar bg-base-100  px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
              <li>
                <a>Item 2</a>
              </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to='/'>
            <a className="flex items-center gap-2 corsur-pointor text-xl"><img src={navLogo}alt="" /> <span className="text-[#632EE3] text-2xl font-bold">HERO.IO</span></a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink to='/' className={({isActive}) => navActiveStatus(isActive) }><li>
                <a>Home</a>
            </li></NavLink>
          <NavLink to='/app' className={({isActive}) => navActiveStatus(isActive) }><li>
                <a>App</a>
            </li></NavLink>
          <NavLink to='/installation' className={({isActive}) => navActiveStatus(isActive) }><li>
                <a>Installation</a>
            </li></NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a
         href="https://github.com/pijush512"
         target="blank"
         className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2]">
            <img src={navBtnImg} alt="GitHub" />
            <span>Contribute</span></a>
      </div>
    </div>
  );
};

export default Navbar;
