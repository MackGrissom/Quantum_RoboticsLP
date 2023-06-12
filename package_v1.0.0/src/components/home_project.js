import React from 'react'
import Link from 'next/link'

export default function HomeProject() {
    return (
        <>
            <div className="glax_tm_section">
                <div className="glax_tm_home_project_wrapper_all">
                    <div className="container">
                        <div className="glax_tm_twice_box_wrap fn_w_sminiboxes">
                            <div className="inner_box">
                                <div className="leftbox project fn_w_sminibox">
                                    <div className="constructify_fn_sticky_section">
                                        <div className="title_holder">
                                            <h3>Our Latest Projects</h3>
                                        </div>
                                        <div className="description">
                                            <p> For over 12 years, Quantum has been forging long-lasting relationships and delivering impactful projects. As a trusted robotics consulting firm, Quantum is renowned for its expertise in providing comprehensive solutions. We have established ourselves as a prominent player in the industry, known for our excellence in delivering exceptional robotic consulting services. Our strong presence and specialization in robotics make us a go-to partner for clients seeking expert guidance and innovative solutions in the field.</p>
                                        </div>
                                        <div className="glax_tm_button_more_wrap">
                                            <Link href="/project"><a>
                                                View All Projects
                                                <span className="arrow_wrap">
                                                    <span className="first"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                    <span className="second"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                </span>
                                            </a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="rightbox fn_w_sminibox">
                                    <div className="constructify_fn_sticky_section">
                                        <ul>
                                            <li>
                                                <div className="inner">
                                                    <div className="image_wrap">
                                                        <img src="img/portfolio/750x500.jpg" alt="" />
                                                        <div className="image" style={{"backgroundImage":"url(img/portfolio/1.jpg)"}} />
                                                        <div className="overlay_color" />
                                                        <span className="plus" />
                                                        <div className="title_holder">
                                                            <h3>Precision Assembly Automation, Stellar Electronics </h3>
                                                            <div className="glax_tm_view_more_wrap">
                                                                <Link href="/project-single"><a>
                                                                    <span className="text">View More</span>
                                                                    <span className="arrow"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                                </a></Link>
                                                            </div>
                                                        </div>
                                                        <Link href="/project-single"><a className="link" /></Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="inner">
                                                    <div className="image_wrap">
                                                        <img src="img/portfolio/750x500.jpg" alt="" />
                                                        <div className="image" style={{"backgroundImage":"url(img/portfolio/2.jpg)"}} />
                                                        <div className="overlay_color" />
                                                        <span className="plus" />
                                                        <div className="title_holder">
                                                            <h3>Odeon Industry Machinery</h3>
                                                            <div className="glax_tm_view_more_wrap">
                                                                <Link href="#"><a>
                                                                    <span className="text">View More</span>
                                                                    <span className="arrow"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                                </a></Link>
                                                            </div>
                                                        </div>
                                                        <Link href="/project-single"><a className="link" /></Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="inner">
                                                    <div className="image_wrap">
                                                        <img src="img/portfolio/750x500.jpg" alt="" />
                                                        <div className="image" style={{"backgroundImage":"url(img/portfolio/3.jpg)"}} />
                                                        <div className="overlay_color" />
                                                        <span className="plus" />
                                                        <div className="title_holder">
                                                            <h3>Chaban Car Industry</h3>
                                                            <div className="glax_tm_view_more_wrap">
                                                                <Link href="#"><a>
                                                                    <span className="text">View More</span>
                                                                    <span className="arrow"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                                </a></Link>
                                                            </div>
                                                        </div>
                                                        <Link href="/project-single"><a className="link" /></Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
