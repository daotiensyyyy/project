import React from 'react';
import PropTypes from 'prop-types';
import Images from '../../constants/images';

Footer.propTypes = {

};

function Footer(props) {
    return (
        <footer>
            <div className="footer ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <a href="/#" className="logo_footer"> <img src={Images.IMAGE_FOOTER} alt="#" /></a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 ">
                                    <div className="address">
                                        <h3>Address </h3>
                                        <ul className="loca">
                                            <li>
                                                <p href="/#">It is a long established fact</p>
                                            </li>
                                            <li>
                                                <p href="/#">(+71 1234567890)</p>
                                            </li>
                                            <li>
                                                <p href="/#">demo@gmail.com</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="address">
                                        <h3>Social Link</h3>
                                        <ul className="Menu_footer">
                                            <li className="active"> <a href="/#">Twitter</a> </li>
                                            <li><a href="/#">Facebook</a> </li>
                                            <li><a href="/#">Instagram</a> </li>
                                            <li><a href="/#">Linkdin</a> </li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="col-lg-4 col-md-6 col-sm-6 ">
                                    <div className="address">
                                        <h3>Newsletter</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="copyright">
                    <div className="container">
                        <p>Copyright © 2019 Design by <a href="https://html.design/">Free Html Templates </a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;