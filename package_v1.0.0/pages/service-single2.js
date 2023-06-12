import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Layout from '../src/layout/layout'

export default function ServiceSingle() {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 0,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };


    const data = [
        {
            title: "We are guided by the same basic precepts",
            desc: "Provide quality workmanship and exemplary client service. Employ people of the highest integrity and skill. Provide a safe work environment for our employees and subcontractors.",
        },
        {
            title: "Glax&apos;s work ethic runs deep",
            desc: "From the beginning, honesty and clear vision along with hard work and imagination have been integral parts of our steady and diversified growth.",
        },
        {
            title: "We have created a culture",
            desc: "We have created a culture that promotes Trust and we are extremely proud of that. This culture has produced a team that likes what they are doing and that is why we do what we do so well."
        }
    ];



    return (
        <Layout style="light">
            {/* SERVICE SINGLE */}
            <div className="glax_tm_section">
                <div className="glax_tm_main_title_holder">
                    <div className="container">
                        <div className="title_holder">
                            <h3>Energy &amp; Commodities</h3>
                        </div>
                        <div className="builify_tm_breadcrumbs">
                            <ul>
                                <li><Link href="/"><a>Glax Home</a></Link></li>
                                <li className="shape"><span /></li>
                                <li><Link href="/service"><a>Service Posts</a></Link></li>
                                <li className="shape"><span /></li>
                                <li><span>Energy &amp; Commodities</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="glax_tm_section">
                <div className="container">
                    <div className="glax_tm_service_single_wrap">
                        <div className="glax_tm_twicebox_wrap">
                            <div className="leftbox">
                                <div className="main_image_wrap">
                                    <div className="image_wrap">
                                        <img src="img/slider/5.jpg" alt="" />
                                    </div>
                                    <div className="image_definition">
                                        <p><span className="shape"><span>T</span></span>oday’s energy and commodities industries power and feed the world economy. The efficient and effective operation of these projects is vital to sustained energy growth and environmental support. By utilizing Glax’s global energy and commodity testing, inspection, and certification services, businesses can design, develop, manufacture and run more successful and valuable products and processes. Commodities are the raw materials which the modern world depends upon for manufactured materials, products and food. We help producers, distributors and processors of these raw materials benefit from optimising their quality control.</p>
                                        <p>Glax’s range of energy expertise works to support clients operating in businesses as diverse as oil and gas, petroleum refining and distribution, petrochemicals, power generation, nuclear power, solar, biofuels, tidal, wave and wind power. This affords us a high-level, cross-sectional view of energy industry topics and trends that affect current and future business development, providing insight and opportunities that may otherwise go undetected. Our global network also provides logistical, testing, inspection, certification and consulting expertise to assist clients in running their operations more efficiently and safely while protecting expensive assets, products and infrastructure.</p>
                                        <p>Commodities are the raw materials which the modern world depends upon for manufactured materials, products and food. We help producers, distributors and processors of these raw materials benefit from optimising their quality control, loss control and financial risk reduction. Products and processes are all enhanced by partnering with Glax, leading to a more successful product and path for all involved.</p>
                                    </div>
                                </div>
                                <div className="service_features">
                                    <h3>Service Features</h3>
                                    <ul>
                                        <li>
                                            <div className="inner">
                                                <div className="definition">
                                                    <p>We Have ISO Certificate</p>
                                                </div>
                                                <div className="icon">
                                                    <img className="svg" src="img/svg/check.svg" alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inner">
                                                <div className="definition">
                                                    <p>We Provide High Services</p>
                                                </div>
                                                <div className="icon">
                                                    <img className="svg" src="img/svg/check.svg" alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inner">
                                                <div className="definition">
                                                    <p>Most Expirienced Company</p>
                                                </div>
                                                <div className="icon">
                                                    <img className="svg" src="img/svg/check.svg" alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inner">
                                                <div className="definition">
                                                    <p>Responsive and Respectful</p>
                                                </div>
                                                <div className="icon">
                                                    <img className="svg" src="img/svg/check.svg" alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inner">
                                                <div className="definition">
                                                    <p>Environmental Sensitivity</p>
                                                </div>
                                                <div className="icon">
                                                    <img className="svg" src="img/svg/check.svg" alt="" />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="accordion_wrap_all">
                                    <div className="title">
                                        <h3>How We Do It</h3>
                                    </div>
                                    <div className="accordion_wrap">
                                        <div className="glax_tm_accordion">
                                            {data.map((item, i) => (
                                                <div className={`accordion_in ${isActive.key == i ? "acc_active" : ""}`} key={i}>
                                                    <div onClick={() => handleToggle(i)} className="acc_head">{item.title}<div className="wow_shape"><span className="wow_effect" /></div></div>
                                                    <div className="acc_content" style={isActive.key == i ? { "display": "" } : { display: "none" }}>
                                                        {item.desc}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="glax_tm_short_contact">
                                    <div className="text">
                                        <h3>Glax</h3>
                                        <p>We build your dream house. Contact us for detailed information.</p>
                                    </div>
                                    <div className="glax_tm_button_wrap">
                                        <Link href="/contact"><a>Our Resposibility</a></Link>
                                    </div>
                                </div>
                                <div className="glax_tm_line" />
                                <div className="glax_tm_other_services_wrap">
                                    <h3>Other Services</h3>
                                    <div className="services_list_wrap">
                                        <ul>
                                            <li>
                                                <div className="inner">
                                                    <div className="title_holder">
                                                        <h3><Link href="/service-single"><a>New Construction</a></Link></h3>
                                                    </div>
                                                    <div className="description">
                                                        <p>It&apos;s the details that count. Because when they are given a backseat, they inevitably move up front and can overtake the</p>
                                                    </div>
                                                    <div className="read_more_wrap">
                                                        <div className="read_more_in">
                                                            <Link href="#"><a>Read More</a></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="inner">
                                                    <div className="title_holder">
                                                        <h3><Link href="/service-single"><a>Adaptive Reuse</a></Link></h3>
                                                    </div>
                                                    <div className="description">
                                                        <p>Achieving this successfully calls for a vision of what can be and a distinct ability to identify opportunities for salvaging elements</p>
                                                    </div>
                                                    <div className="read_more_wrap">
                                                        <div className="read_more_in">
                                                            <Link href="#"><a>Read More</a></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="rightbox">
                                <div className="glax_tm_categories">
                                    <div className="title_holder_wrap">
                                        <h3>Full list of services</h3>
                                    </div>
                                    <div className="list_wrap">
                                        <ul>
                                            <li><Link href="#"><a>Energy &amp; Commodities</a></Link></li>
                                            <li><Link href="#"><a>Medical Devices</a></Link></li>
                                            <li><Link href="#"><a>Housewares &amp; Home Decor</a></Link></li>
                                            <li><Link href="#"><a>The Shale Oil and Gas Revolution</a></Link></li>
                                            <li><Link href="#"><a>Textiles &amp; Apparel</a></Link></li>
                                            <li><Link href="#"><a>Construction &amp; Engineering</a></Link></li>
                                            <li><Link href="#"><a>Basic &amp; Industrial Chemicals</a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="glax_tm_request_estimate_wrap">
                                    <div className="image_wrap">
                                        <img src="img/services/300x460.jpg" alt="" />
                                        <div className="image" />
                                    </div>
                                    <div className="definition">
                                        <div className="text">
                                            <p>Lets get started! Contact us for a free quote on your next home improvement project.</p>
                                        </div>
                                        <div className="button">
                                            <Link href="/contact"><a>Request an estimate</a></Link>
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
                    </div>
                </div>
            </div>
            {/* /SERVICE SINGLE */}

        </Layout>
    )
}
