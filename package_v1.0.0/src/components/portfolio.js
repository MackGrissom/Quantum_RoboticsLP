import React from 'react'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

export default function Portfolio() {

    const [isActive, setActive] = useState(false);
    const activeTrueFalse = () => setActive(!isActive)

    const [Tab, setTab] = useState(0)
    const TabActive = (index) => {
        setTab(index);
    }

    return (
        <>
            {/* PROJECTS */}
            <div className="glax_tm_section">
                <div className="glax_tm_main_title_holder">
                    <div className="container">
                        <div className="title_holder">
                            <h3>Projects</h3>
                        </div>
                        <div className="builify_tm_breadcrumbs">
                            <ul>
                                <li><Link href="/"><a> Home</a></Link></li>
                                <li className="shape"><span /></li>
                                <li><span>Projects</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="glax_tm_section">
                <div className="container">
                    <div className="glax_tm_projects_wrap">
                        <div className="filter_wrap">
                            <div onClick={activeTrueFalse} className="all_projects">
                                <span><Link href="#"><a>All Projects</a></Link></span>
                            </div>
                            <div className={isActive ? "filter_list opened" : "filter_list"} >
                                <ul onClick={activeTrueFalse} className="glax_tm_portfolio_filter">
                                    <li onClick={() => TabActive(0)}><Link href="#"><a className="current" data-filter="*">All</a></Link></li>
                                    <li onClick={() => TabActive(1)}><Link href="#"><a data-filter=".architecture">Consulting</a></Link></li>
                                    <li onClick={() => TabActive(2)}><Link href="#"><a data-filter=".interior">Asssembly</a></Link></li>
                                    <li onClick={() => TabActive(3)}><Link href="#"><a data-filter=".renovation">Maintenance</a></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="glax_tm_portfolio_list gallery_zoom">
                            <div style={Tab == 1 || Tab == 0 ? { opacity: "block" } : { display: "none" }} className="filter-item architecture">
                                <div className="inner">
                                    <div className="image_wrap">
                                        <img src="img/portfolio/750x500.jpg" alt="" />
                                        <div className="image" style={{ "backgroundImage": "url(img/portfolio/1.jpg)" }} />
                                        <div className="overlay_color" />
                                        <span className="plus" />
                                        <div className="title_holder">
                                            <h3>Precision Assembly Automation, Stellar Electronics</h3>
                                            <div className="glax_tm_view_more_wrap">
                                                <Link href="#"><a>
                                                    <span className="text">View More</span>
                                                    <span className="arrow"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                </a></Link>
                                            </div>
                                        </div>
                                        <Link href="/project-single"><a className="link"></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div style={Tab == 3 || Tab == 0 ? { display: "block" } : { display: "none" }} className="filter-item renovation">
                                <div className="inner">
                                    <div className="image_wrap">
                                        <img src="img/portfolio/750x500.jpg" alt="" />
                                        <div className="image" style={{ "backgroundImage": "url(img/portfolio/2.jpg)" }} />
                                        <div className="overlay_color" />
                                        <span className="plus" />
                                        <div className="title_holder">
                                            <h3>Autonomous Warehouse Solutions, GLS</h3>
                                            <div className="glax_tm_view_more_wrap">
                                                <Link href="#"><a>
                                                    <span className="text">View More</span>
                                                    <span className="arrow"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                </a></Link>
                                            </div>
                                        </div>
                                        <Link href="/project-single"><a className="link"></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div style={Tab == 3 || Tab == 0 ? { display: "block" } : { display: "none" }} className="filter-item interior">
                                <div className="inner">
                                    <div className="image_wrap">
                                        <img src="img/portfolio/750x500.jpg" alt="" />
                                        <div className="image" style={{ "backgroundImage": "url(img/portfolio/3.jpg)" }} />
                                        <div className="overlay_color" />
                                        <span className="plus" />
                                        <div className="title_holder">
                                            <h3>Automated Quality Control System, Medtech Innovations</h3>
                                            <div className="glax_tm_view_more_wrap">
                                                <Link href="#"><a>
                                                    <span className="text">View More</span>
                                                    <span className="arrow"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                </a></Link>
                                            </div>
                                        </div>
                                        <Link href="/project-single"><a className="link"></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div style={Tab == 2 || Tab == 0 ? { display: "block" } : { display: "none" }} className="filter-item architecture">
                               {/* project goes here */}
                            </div>
                            <div style={Tab == 1 || Tab == 0 ? { display: "block" } : { display: "none" }} className="filter-item renovation">
                               {/* project goes here */}
                            </div>
                            <div style={Tab == 2 || Tab == 0 ? { display: "block" } : { display: "none" }} className="filter-item interior">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="glax_tm_section">
                <div className="container">
                    <div className="glax_tm_pagination">
                        <ul>
                            <li><span>Prev</span></li>
                            <li className="active"><Link href="#"><a>Next</a></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* /PROJECTS */}
        </>
    )
}
