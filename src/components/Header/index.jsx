import React from 'react';
import Images from '../../constants/images'

function Header(props) {
    return (
        <>
            <div className="header-top">
                <div className="header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-3 col logo_section">
                                <div className="full">
                                    <div className="center-desk">
                                        <div className="logo">
                                            <a href="index.html"><img src={Images.IMAGE_LOGO} alt="#" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-8 col-md-8 col-sm-9">

                                <div className="menu-area">
                                    <div className="limit-box">
                                        <nav className="main-menu ">
                                            <ul className="menu-area-main">
                                                <li className="active"> <a href="index.html">Home</a> </li>
                                                <li> <a href="#about">About</a> </li>
                                                <li> <a href="/#"><img src={Images.ICON_HEADER} alt="#" /></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;