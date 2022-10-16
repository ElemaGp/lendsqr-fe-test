import "./navbar.scss"
import React from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { Link } from "react-router-dom";
import lendsqrlogo from "../../assets/lendsqrlogo.svg"
import smilinglady from "../../assets/smilinglady.svg"
import navdropdown from "../../assets/navdropdown.svg"



const Navbar = () => {
  return (
  <div className="navbar">
    <div className="wrapper">
      <div className="navLeft">
      <div className="navLogo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={lendsqrlogo}  alt="lendsqrlogo" className="logo" />
        </Link>
      </div>
        <div className="search">
          <input type="text" placeholder="Search for anything" />
          <div className="searchIcon">
          <SearchOutlinedIcon />
          </div>
        </div>
        </div>
        <div className="items">
          <div className="docs">
          <Link to="/" style={{ fontFamily: 'Roboto', fontStyle: "normal", fontWeight: 400, fontSize: "16px", textDecorationLine: "underline", color: "#213F7D", marginRight: "47px"}}>
            Docs
          </Link>
          </div>
          <div className="bellIcon">
            <NotificationsNoneOutlinedIcon className="icon" />
            
          </div>

          <div className="imgItem">
            <img
              src={smilinglady}
              alt="avatar"
              className="avatar"
            />
          </div>
          <p className="name">Adedeji</p>
          <img src={navdropdown} alt="dropdown" className="navDropDown" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
