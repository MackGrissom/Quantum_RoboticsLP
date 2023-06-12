import React, { useState } from 'react'
import Layout from '../src/layout/layout'
import VideoPopUp from '../src/video-pop-up';
import GlaxGallery from '../src/components/glax_gallery'

export default function ProjectSingle() {
    const [isShow, setShow] = useState(false); 
    return (
        <Layout style={"light"}>
            {/* <!-- PROJECTS SINGLE --> */}
            <div className="glax_tm_section ">
                <div className="glax_tm_justified_wrap gallery_zoom">
                <GlaxGallery/>
                {/* 
                    <a className="zoom" href="img/slider/14.jpg">
                        <img src="img/slider/14.jpg" alt="" />
                        <span className="overlay"></span>
                        <span className="shape"><span></span></span>
                    </a>
                    <a className="zoom" href="img/slider/10.jpg">
                        <img src="img/slider/10.jpg" alt="" />
                        <span className="overlay"></span>
                        <span className="shape"><span></span></span>
                    </a>
                    <a className="zoom" href="img/slider/13.jpg">
                        <img src="img/slider/13.jpg" alt="" />
                        <span className="overlay"></span>
                        <span className="shape"><span></span></span>
                    </a>
                    <a className="zoom" href="img/slider/11.jpg">
                        <img src="img/slider/11.jpg" alt="" />
                        <span className="overlay"></span>
                        <span className="shape"><span></span></span>
                    </a>
                    <a className="zoom" href="img/slider/12.jpg">
                        <img src="img/slider/12.jpg" alt="" />
                        <span className="overlay"></span>
                        <span className="shape"><span></span></span>
                    </a>
                    <a className="zoom" href="img/slider/9.jpg">
                        <img src="img/slider/9.jpg" alt="" />
                        <span className="overlay"></span>
                        <span className="shape"><span></span></span>
                    </a>
                */}
                </div> 
            </div>
            <div className="glax_tm_section">
                <div className="container">
                    <div className="glax_tm_justified_content">
                        <div className="leftpart">
                            <div className="title_holder">
                                <h3>Precision Assembly Automation, Stellar Electronics</h3>
                            </div>
                            <div className="definition">
                                <p>Quantum has been engaged by Stellar Electronics, a leading electronics manufacturer in Silicon Valley, to enhance their assembly line operations through precision assembly automation. With the aim of improving productivity, quality, and efficiency, Quantum will integrate advanced robotic systems into Stellar Electronics' assembly lines. The robotics integration will involve the seamless incorporation of robotic arms, machine vision systems, and collaborative robots to perform intricate assembly tasks with utmost precision. Quantum's expertise in robotics integration and their deep understanding of Stellar Electronics' specific requirements will result in an optimized assembly process, reducing errors, increasing throughput, and ultimately enhancing the overall manufacturing operations.</p>
                            </div>
                            <div className="glax_tm_share_wrap">
                                <label>Share:</label>
                                <ul>
                                    <li><a href="#"><i className="xcon-facebook"></i></a></li>
                                    <li><a href="#"><i className="xcon-twitter"></i></a></li>
                                    <li><a href="#"><i className="xcon-instagram"></i></a></li>
                                </ul>
                            </div>
                            <div className="glax_tm_project_video">
                                <span>
                                    <img className="svg" src="img/svg/play.svg" alt="" />
                                </span>
                                <a className="project_time">View Project Time Lapse</a>
                                <a style={{"cursor":"pointer"}} onClick={setShow}  className="project_video_button popup-youtube"></a>
                            </div>
                            {isShow &&  <VideoPopUp setShow={()=>setShow(false)} src={"//www.youtube.com/embed/se4yc09w7Ic?autoplay=1"} />}
                        </div>
                        <div className="rightpart">
                            <div className="infobox">
                                <ul>
                                    <li>
                                        <label>Value</label>
                                        <span>$2,400,000</span>
                                    </li>
                                    <li>
                                        <label>Client</label>
                                        <span>Stellar Electronics</span>
                                    </li>
                                    <li>
                                        <label>Location</label>
                                        <span>Silicon Valley, California</span>
                                    </li>
                                    <li>
                                        <label>Completion Date</label>
                                        <span> December 2022</span>
                                    </li>
                                </ul>
                                <div className="first_square"></div>
                                <div className="second_square"></div>
                            </div>
                        </div>
                    </div>
                    <div className="glax_tm_pagination">
                        <ul>
                            <li><span>Prev</span></li>
                            <li className="active"><a href="#">Next</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- /PROJECTS SINGLE --> */}
        </Layout>
    )
}
