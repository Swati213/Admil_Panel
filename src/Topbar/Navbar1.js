import React from 'react'
import "./Style.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Navbar1 = () => {
    return (
        <div>
          <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Swati Sinha's Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
            
          </div>
          <div className="topbarIconContainer">
            <Language />
            
          </div>
          <div className="topAvatar">
            <AccountCircleIcon/>
          </div>
        </div>
      </div>
    </div>   
    </div>
    )
}

export default Navbar1
