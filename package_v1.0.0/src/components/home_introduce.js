import React, { useState } from 'react'
import VideoPopUp from '../video-pop-up'

export default function HomeIntroduce() {
    const [isShow, setShow] = useState(false);

    return (
        <>
            <div className="glax_tm_section introduce">
                <div className="container">
                    <div className="qqq">
                        <div className="glax_tm_introduce_wrap">
                            <div className="inner_wrap">
                                <div className="main_info_wrap">
                                    <span className="top_title">Let me introduce</span>
                                    <h3 className="title">Our Company</h3>
                                    <p className="text">
                                        For over 12 years, Quantum has been dedicated to building long-lasting relationships and projects. We specialize in developing cutting-edge robotics and automation solutions for assembly lines. Our focus extends beyond construction, as we prioritize safety, eco-friendly practices, and fostering strong connections within the communities we serve. No matter the job, Quantum goes above and beyond, delivering comprehensive solutions that exceed expectations.</p>
                                </div>
                                <div className="experience_box">
                                    <div className="top">
                                        <p>World&apos;s Leading Robotics Manufacturer & Consultant</p>
                                    </div>
                                    <div className="bottom">
                                        <div className="number">
                                            <span>12</span>
                                        </div>
                                        <div className="definition">
                                            <p>Years of experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="play_video">
                                <a style={{ "cursor": "pointer" }} className="popup-youtube" onClick={setShow} />
                            </div>
                        </div>
                        <div className="shape_top">
                            <span className="first" />
                            <span className="second" />
                        </div>
                        <div className="shape_bottom">
                            <span className="first" />
                            <span className="second" />
                        </div>
                    </div>
                    {isShow && <VideoPopUp setShow={() => setShow(false)} src={"//www.youtube.com/embed/G6zv3wFvpHM?autoplay=1"} />}
                </div>
            </div>
        </>
    )
}
