import React from 'react';
import Images from '../../constants/images'

function Banner(props) {
    return (
        <section className="slider_section">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <div className="container-fluid padding_dd">
                            <div className="carousel-caption">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="text-bg">
                                            <span>Welcome to...</span>
                                            <h1>...Shop</h1>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a
                                            page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                        normal </p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="images_box">
                                            <figure><img src={Images.IMAGE_BANNER} alt="#" /></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">

                        <div className="container-fluid padding_dd">
                            <div className="carousel-caption">

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="text-bg">
                                            <span>Welcome to...</span>
                                            <h1>...Shop</h1>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a
                                            page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                        normal </p>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="images_box">
                                            <figure><img src="/images/img2.png" alt="#" /></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="carousel-item">
                        <div className="container-fluid padding_dd">
                            <div className="carousel-caption ">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="text-bg">
                                            <span>Welcome to...</span>
                                            <h1>...Shop</h1>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a
                                            page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                        normal </p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="images_box">
                                            <figure><img src="/images/img2.png" alt="#" /></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </section>
    );
}

export default Banner;