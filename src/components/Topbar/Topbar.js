import React from 'react';
import "./Topbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
               <span className="userName">Miro</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                  <FontAwesomeIcon icon={faSearch}/>
                </div>
                <div className="topbarIconContainer">
                  <FontAwesomeIcon icon={faBell}/>
                  <span className="topIconBadge">1</span>
                </div>
                <div className="topbarIconContainer">
                  <FontAwesomeIcon icon={faUser}/>
                </div>
            </div>
        </div>
    </div>
  );
}
