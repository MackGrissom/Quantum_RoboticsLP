import React, { useState } from 'react'
import Layout from '../src/layout/layout'
import VideoPopUp from '../src/video-pop-up';
import GlaxGallery from './../src/components/glax_gallery'

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
                                <h3>Odeon Industrial Machinery</h3>
                            </div>
                            <div className="definition">
                                <p>We go beyond testing, inspecting and certifying products; we are a Total Quality Assurance provider to industries worldwide. Through our global network of state-of-the-art facilities and industry-leading technical expertise we provide innovative and bespoke Assurance, Testing, Inspection and Certification services to customers. We provide a systemic approach to supporting our customers’ Quality Assurance efforts in each of the areas of their operations including R&amp;D, raw materials sourcing, components suppliers, manufacturing, transportation, distribution and retail channels, and consumer management.</p>
                                <p className="bold">Heavy equipment and industrial machines are more complex than ever. In an increasingly competitive market, companies must ensure innovation and manage complexity</p>
                                <p>Matao is an industry leader with more than 43,000 employees in 1,000 locations in over 100 countries. We deliver Total Quality Assurance expertise 24 hours a day, 7 days a week with our industry-winning processes and customer-centric culture. Whether your business is local or global, we can help to ensure that your products meet quality, health, environmental, safety, and social accountability standards for virtually any market around the world. We hold extensive global accreditations, recognitions, and agreements, and our knowledge of and expertise in overcoming regulatory, market, and supply chain hurdles is unrivalled.</p>
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
                                        <span>€3,400,000,000</span>
                                    </li>
                                    <li>
                                        <label>Client</label>
                                        <span>Germany and Denmark Governments</span>
                                    </li>
                                    <li>
                                        <label>Architect</label>
                                        <span>Vinci Company</span>
                                    </li>
                                    <li>
                                        <label>Location</label>
                                        <span>Germany-Denmark</span>
                                    </li>
                                    <li>
                                        <label>Completion Date</label>
                                        <span>02.05.2005</span>
                                    </li>
                                    <li>
                                        <label>Square Footage</label>
                                        <span>2,200,000</span>
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
