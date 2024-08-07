import React from 'react'
import "./Sidebar.scss"
import { Link, NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import home from "../../../images/home.png"
import home1 from "../../../images/sidebar-img-1.png"
import note from "../../../images/sidebar-img-2.png"
import wallet from "../../../images/sidebar-img-3.png"
import store from "../../../images/sidebar-img-4.png"
export const Sidebar = () => {
    return (
        <>
            <Nav className='sidebar flex-column' justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <NavLink to="/dashboard" className="py-3 px-3 d-block">
                        <img src={home} className='sidebar-imgs' alt="" />
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/settings" className="py-3 px-3 d-block">
                        <img src={home1} className='sidebar-imgs' alt="" />
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/note" className="py-3 px-3 d-block">
                        <img src={note} className='sidebar-imgs' alt="" />
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/wallet" className="py-3 px-3 d-block">
                        <img src={wallet} className='sidebar-imgs' alt="" />
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/store" className="py-3 px-3 d-block">
                        <img src={store} className='sidebar-imgs' alt="" />
                    </NavLink>
                </Nav.Item>
            </Nav>
            {/* <aside className="sidebar">
                <ul>
                    <Link to="/dashboard"><i className="bi bi-house text-white"></i></Link>
                    <Link to="/settings"><i className="bi bi-gear text-white"></i></Link>
                    <Link to="/profile"><i className="bi bi-person text-white"></i></Link>
                </ul>
            </aside> */}
        </>
    )
}
