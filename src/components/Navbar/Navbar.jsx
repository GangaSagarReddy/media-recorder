import React from 'react';
import './Navbar.css';
import { BsGithub } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaTwitterSquare } from 'react-icons/fa';
import logo from '../../images/logo.png';

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="nav-left">
                    <div className="logo">
                        <img src='https://t3.ftcdn.net/jpg/04/93/09/12/360_F_493091209_cRh3DVKEIDQKUPqI07CJGGbkLiCGPRzM.jpg' height='70px' />
                    </div>
                    <ul className="menu">
                        <li className='active'>Home</li>
                        <a href="https://www.linkedin.com/in/ganga-sagar-kambham-2aba94224/" target='_blank'>
                            <li>Developer</li>
                        </a>
                    </ul>
                </div>
                <div className="nav-right">
                    <ul className="social-media">
                        <a href="https://github.com/GangaSagarReddy" target='_blank'>
                            <li><BsGithub /></li>
                        </a>
                        <a href="https://www.linkedin.com/in/ganga-sagar-kambham-2aba94224/" target='_blank'>
                            <li><AiFillLinkedin /></li>
                        </a>
                        <a href="https://twitter.com/the_nameis_gsr" target='_blank'>
                            <li><FaTwitterSquare /></li>
                        </a>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar