import Link from 'next/link'
import React from 'react'
import Layout from '../src/layout/layout'

export default function Service() {
    return (
        <Layout style={"light"}>
            {/* SERVICES*/}
            <div className="glax_tm_section">
                <div className="glax_tm_main_title_holder">
                    <div className="container">
                        <div className="title_holder">
                            <h3>Services</h3>
                        </div>
                        <div className="builify_tm_breadcrumbs">
                            <ul>
                                <li><Link href="/"><a>Glax Home</a></Link></li>
                                <li className="shape"><span /></li>
                                <li><span>Services</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="glax_tm_section">
                <div className="container">
                    <div className="glax_tm_services_wrap">
                        <div className="glax_tm_twicebox_wrap">
                            <div className="leftbox">
                                <div className="glax_tm_service_title_holder">
                                    <h3>What we offer</h3>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                        optio, eaque rerum! Provident similique accusantium nemo autem. </p>
                                </div>
                                <div className="glax_tm_service_list_wrap">
                                    <ul>
                                        <li>
                                            <div className="inner">
                                                <div className="list_image_wrap">
                                                    <div className="image" style={{ "backgroundImage": "url(img/services/11.jpg)" }} />
                                                    <Link href="/service-single"><a /></Link>
                                                </div>
                                                <div className="main_infos">
                                                    <div className="title_holder">
                                                        <h3><Link href="/service-single"><a>Robotics Consulting</a></Link></h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                                            optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                                                    </div>
                                                </div>
                                                <div className="glax_tm_shape_read_more_wrap">
                                                    <div className="read_more_in">
                                                        <Link href="/service-single"><a>Read More</a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inner">
                                                <div className="list_image_wrap">
                                                    <div className="image" style={{ "backgroundImage": "url(img/services/12.jpg)" }} />
                                                    <Link href="/service-single"><a /></Link>
                                                </div>
                                                <div className="main_infos">
                                                    <div className="title_holder">
                                                        <h3><Link href="/service-single"><a>Robotics Integration</a></Link></h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                                            optio, eaque rerum! Provident similique accusantium nemo autem.r</p>
                                                    </div>
                                                </div>
                                                <div className="glax_tm_shape_read_more_wrap">
                                                    <div className="read_more_in">
                                                        <Link href="/service-single"><a>Read More</a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inner">
                                                <div className="list_image_wrap">
                                                    <div className="image" style={{ "backgroundImage": "url(img/services/13.jpg)" }} />
                                                    <Link href="/service-single"><a /></Link>
                                                </div>
                                                <div className="main_infos">
                                                    <div className="title_holder">
                                                        <h3><Link href="/service-single"><a>Custom Robotics Development</a></Link></h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                                            optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                                                    </div>
                                                </div>
                                                <div className="glax_tm_shape_read_more_wrap">
                                                    <div className="read_more_in">
                                                        <Link href="/service-single"><a>Read More</a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inner">
                                                <div className="list_image_wrap">
                                                    <div className="image" style={{ "backgroundImage": "url(img/services/14.jpg)" }} />
                                                    <Link href="/service-single"><a /></Link>
                                                </div>
                                                <div className="main_infos">
                                                    <div className="title_holder">
                                                        <h3><Link href="/service-single"><a> Robotics Maintenance & Support </a></Link></h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                                            optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                                                    </div>
                                                </div>
                                                <div className="glax_tm_shape_read_more_wrap">
                                                    <div className="read_more_in">
                                                        <Link href="/service-single"><a>Read More</a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="rightbox">
                                <div className="glax_tm_categories">
                                    <div className="title_holder_wrap">
                                        <h3>Full list of services</h3>
                                    </div>
                                    <div className="list_wrap">
                                        <ul>
                                            <li><Link href="#"><a>Robotics Conslting</a></Link></li>
                                            <li><Link href="#"><a>Robotics Integrations</a></Link></li>
                                            <li><Link href="#"><a>Custom Robotics Development</a></Link></li>
                                            <li><Link href="#"><a>Robotics Maintenance & Support</a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="glax_tm_request_estimate_wrap">
                                    <div className="">
                                        <img src="img/services/handshake.jpg" alt="" />
                                        <div className="image" />
                                    </div>
                                    <div className="definition">
                                        <div className="text">
                                            <p>Lets get started! Contact us for a free quote.</p>
                                        </div>
                                        <div className="button">
                                            <Link href="#"><a>Request an estimate</a></Link>
                                        </div>
                                        <div className="first_shape">
                                            <span className="first" />
                                            <span className="second" />
                                            <span className="third" />
                                        </div>
                                        <div className="second_shape">
                                            <span className="first" />
                                            <span className="second" />
                                            <span className="third" />
                                        </div>
                                    </div>
                                </div>
                                <div className="glax_tm_brochures_wrap">
                                    <div className="title_holder">
                                        <span>Company Presentation</span>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="inner">
                                                <div className="icon">
                                                    <img className="svg" src="img/svg/file-pdf.svg" alt="" />
                                                </div>
                                                <span className="text">Download .PDF</span>
                                                <span className="arrow" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inner">
                                                <div className="icon">
                                                    <img className="svg" src="img/svg/file-zip.svg" alt="" />
                                                </div>
                                                <span className="text">Download .ZIP</span>
                                                <span className="arrow" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inner">
                                                <div className="icon">
                                                    <img className="svg" src="img/svg/file-doc.svg" alt="" />
                                                </div>
                                                <span className="text">Download .DOC</span>
                                                <span className="arrow" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="glax_tm_section">
                            <div className="glax_tm_pagination">
                                <ul>
                                    <li><span>Prev</span></li>
                                    <li className="active"><Link href="#"><a>Next</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /SERVICES */}

        </Layout>
    )
}
