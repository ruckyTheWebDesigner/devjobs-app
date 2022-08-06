import { useEffect, useState } from "react";
import { Switch } from "@mui/material";

import desktoplogo from "../assets/desktop/logo.svg";

import { BsSunFill, BsMoonFill } from "react-icons/bs";

function NavBar({ toggleMode, checkToggle }) {
  const [resolution, setResolution] = useState(window.innerWidth);

  // useEffect runs once when the component is mounted and again when the window is resized

  useEffect(() => {
    // add event listener to check for window resize
    window.addEventListener("resize", (event) => {
      setResolution(event.target.innerWidth);
    });
  }, []);

  return (
    <div className={resolution > 600 ? "navbar" : "navbar_mobile"}>
      <div className='navbar_logo'>
        <a href='/'>
          <img src={desktoplogo} alt='logo' srcSet='' />
        </a>
      </div>
      <div className='navbar_toggle'>
        <div className='toggle_switch'>
          <BsSunFill className='text-white' />
          <Switch onChange={toggleMode} checked={checkToggle} />
          <BsMoonFill className='text-white' />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
