import React from 'react';
import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faCalendarAlt, faInbox, faUserFriends, faList, faTrafficLight, faFileAlt, faCashRegister} from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <img src="./images/avatar.jpg" alt="" className="avatar"></img>
                    <h3 className="sidebarTitle">Miroslav Minev</h3>
                </div>
                <hr/>
                <NavLink to="/" className="link" activeClassName="active-link">
                <div className="sidebarMenu">
                   <FontAwesomeIcon className="alignIcons" icon={faList}/>
                    <h3 className="sidebarTitle">Dashboard</h3>
                </div>
                </NavLink>
                <div className="sidebarMenu">
                    <FontAwesomeIcon className="alignIcons"icon={faTrafficLight}/>
                    <h3 className="sidebarTitle">Tradeview</h3>
                </div>
                <div className="sidebarMenu">
                    <FontAwesomeIcon className="alignIcons"icon={faFileAlt}/>
                    <h3 className="sidebarTitle">File manager</h3>
                </div>
                <div className="sidebarMenu">
                    <FontAwesomeIcon className="alignIcons"icon={faTrafficLight}/>
                    <h3 className="sidebarTitle">Traffic analyzer</h3>
                </div>
                <div className="sidebarMenu">
                    <FontAwesomeIcon className="alignIcons"icon={faUserFriends}/>
                    <h3 className="sidebarTitle">Users manager</h3>
                </div>
                <NavLink to="/calendar" activeClassName="active-link" className="link">
                <div className="sidebarMenu">
                    <FontAwesomeIcon className="alignIcons"icon={faCalendarAlt}/>
                    <h3 className="sidebarTitle">Calendar</h3>
                </div>
                </NavLink>
                <NavLink to="/messages" activeClassName="active-link" className="link">
                <div className="sidebarMenu">
                    <FontAwesomeIcon className="alignIcons"icon={faInbox}/>
                    <h3 className="sidebarTitle">Messages</h3>
                </div>
                </NavLink>
                <NavLink to="/payments" activeClassName="active-link" className="link">
                <div className="sidebarMenu">
                    <FontAwesomeIcon className="alignIcons" icon={faCashRegister}/>
                    <h3 className="sidebarTitle">Payments</h3>
                </div>
                </NavLink>
            </div>
        </div>
    )
}