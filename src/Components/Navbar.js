import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {


    render() {

        return (
            <>
                <div className='container-fluid '>
                    <nav className="navbar navbar-expand-lg fixed-top bg-black ms-5" style={{ fontSize: "20px" }}>

                        <Link className='navbar-brand text-white ms-5' to='/' style={{ fontSize: "30px" }}>
                            News
                            <span
                                className="p-1 text-black rounded-1 "
                                style={{
                                    backgroundColor: "#ffa31a",
                                    border: "none",
                                    fontWeight: "bold"
                                }}
                            >
                                Hub
                            </span>
                        </Link>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="nav navbar-nav navbar-dark nav-underline justify-content-center mb-lg-0 ms-5">

                                <li className="nav-item"><Link className="nav-link " aria-current="page" to="/"><i className="bi bi-house-fill"></i> Home</Link></li>

                                <li className="nav-item"><Link className="nav-link " to="/business"><i className="bi bi-briefcase-fill"></i> Business</Link></li>

                                <li className="nav-item"><Link className="nav-link" to="/health"><i className="bi bi-heart-pulse-fill"></i> Health</Link></li>

                                <li className="nav-item"><Link className="nav-link" to="/science"><i className="bi bi-radioactive"></i> Science</Link></li>

                                <li className="nav-item"><Link className="nav-link" to="/sports"><i className="bi bi-controller"></i> Sports</Link></li>

                                <li className="nav-item"><Link className="nav-link" to="/technology"><i className="bi bi-radioactive"></i> Technology</Link></li>

                                {/* <button className=" btn nav-item text-white" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}><i className="bi bi-search"></i> Search</button> */}
                            </ul>
                        </div>
                    </nav>
                </div>
            </>
        )
    }
}
// {['ae','ar','at','au','be','bg','br','ca','ch','cn','co','cu','cz','de','eg','fr','gb','gr','hk','hu','id','ie','il','in','it','jp','kr','lt','lv','ma','mx','my','ng','nl','no','nz','ph','pl','pt','ro','rs','ru','sa','se','sg','si','sk','th','tr','tw','ua','us','ve','za']}