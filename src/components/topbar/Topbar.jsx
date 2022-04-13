import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar"> 
     <div className="topbarWrapper">

     <div className="topLeft">
      <span className="logo">Shahadmin</span>
      </div>
   
       
     
      <div className="topRight">

          <div className="topbarIconContainer">
            <NotificationsNone  />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <Settings />
          </div>

          
        <img src="https://images.unsplash.com/photo-1648927951312-63582ada5d3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
         alt="" className="topAvatar"  />
             
          

       </div>
      </div>
     </div>
  )
}
