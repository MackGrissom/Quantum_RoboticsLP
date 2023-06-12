import React from 'react'
import Link from 'next/link'

export default function HomeService() {
    return (
        <>
            <div className="glax_tm_section">
                <div className="container">
                    <div className="glax_tm_home_service_list">
                        <ul className="glax_tm_miniboxes">
                            <li>
                                <div className="inner_list glax_tm_minibox">
                                    <div className="icon_wrap">
                                        <img className="svg" src="img/svg/1.svg" alt="" />
                                    </div>
                                    <div className="title_holder">
                                        <h3>Robotics Consulting</h3>
                                    </div>
                                    <div className="description">
                                        <p> Our expert consultants guide manufacturing companies in integrating robotics through strategic recommendations and a comprehensive implementation roadmap</p>
                                    </div>
                                    <div className="glax_tm_button_more_wrap">
                                        <a href="#">
                                            More Details
                                            <span className="arrow_wrap">
                                                <span className="first"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                <span className="second"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                            </span>
                                        </a>
                                    </div>
                                    <Link  href="/service-single"><a className="service_link" /></Link>
                                </div>
                            </li>
                            <li>
                                <div className="inner_list glax_tm_minibox">
                                    <div className="icon_wrap">
                                        <img className="svg" src="img/svg/2.svg" alt="" />
                                    </div>
                                    <div className="title_holder">
                                        <h3>Robotics Integration</h3>
                                    </div>
                                    <div className="description">
                                        <p> We seamlessly integrate advanced robotic systems into manufacturing operations, handling everything from programming automation sequences to coordinating with existing machinery.</p>
                                    </div>
                                    <div className="glax_tm_button_more_wrap">
                                        <a href="#">
                                            More Details
                                            <span className="arrow_wrap">
                                                <span className="first"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                <span className="second"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                            </span>
                                        </a>
                                    </div>
                                    <Link  href="/service-single"><a className="service_link" /></Link>
                                </div>
                            </li>
                            <li>
                                <div className="inner_list glax_tm_minibox">
                                    <div className="icon_wrap">
                                        <img className="svg" src="img/svg/3.svg" alt="" />
                                    </div>
                                    <div className="title_holder">
                                        <h3>Custom Robotics Development</h3>
                                    </div>
                                    <div className="description">
                                        <p>: We design and deliver tailor-made robotic solutions for unique manufacturing needs, optimizing performance for tasks like assembly, pick-and-place, and quality control.</p>
                                    </div>
                                    <div className="glax_tm_button_more_wrap">
                                        <a href="#">
                                            More Details
                                            <span className="arrow_wrap">
                                                <span className="first"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                <span className="second"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                            </span>
                                        </a>
                                    </div>
                                    <Link  href="/service-single"><a className="service_link" /></Link>
                                </div>
                            </li>
                            <li>
                                <div className="inner_list glax_tm_minibox">
                                    <div className="icon_wrap">
                                        <img className="svg" src="img/svg/4.svg" alt="" />
                                    </div>
                                    <div className="title_holder">
                                        <h3>Robotics Maintenance and Support</h3>
                                    </div>
                                    <div className="description">
                                        <p>Our comprehensive maintenance plans and skilled technicians ensure reliable performance and minimal downtime for your robotic systems, while also offering training for effective operation and maintenance..</p>
                                    </div>
                                    <div className="glax_tm_button_more_wrap">
                                        <a href="#">
                                            More Details
                                            <span className="arrow_wrap">
                                                <span className="first"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                <span className="second"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                            </span>
                                        </a>
                                    </div>
                                    <Link  href="/service-single"><a className="service_link" /></Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
