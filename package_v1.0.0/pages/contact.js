import React from 'react'
import Layout from '../src/layout/layout'
import Link from 'next/link'
import ContactForm from '../src/components/contact_form';

export default function Contact() {
    
    return (
        <Layout style={"light"}>
            {/* CONTACT */}
            <div className="glax_tm_section">
                <div className="glax_tm_main_title_holder">
                    <div className="container">
                        <div className="title_holder">
                            <h3>Contact</h3>
                        </div>
                        <div className="builify_tm_breadcrumbs">
                            <ul>
                                <li><Link href="/"><a>Glax Home</a></Link></li>
                                <li className="shape"><span /></li>
                                <li><span>Contact</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="glax_tm_section">
                <div className="container">
                    <div className="glax_tm_main_contact_wrap">
                        <div className="office_list">
                            <ul>
                                <li>
                                    <div className="inner">
                                        <div className="image_wrap">
                                            <img src="img/contact/370x220.jpg" alt />
                                            <div className="image" />
                                        </div>
                                        <div className="definitions_wrap">
                                            <div className="office">
                                                <h3>Washington Office</h3>
                                                <div className="icon">
                                                    <img className="svg" src="img/svg/location.svg" alt />
                                                </div>
                                            </div>
                                            <div className="short_info_wrap">
                                                <div className="row">
                                                    <p>100-120 Ft.Drive NE, Washington, DC 20011</p>
                                                </div>
                                                <div className="row">
                                                    <label>Phone:</label>
                                                    <span>+1 202-415-7234</span>
                                                </div>
                                                <div className="row">
                                                    <label>Email:</label>
                                                    <span><a href="#">w.constructify@gmail.com</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="inner">
                                        <div className="image_wrap">
                                            <img src="img/contact/370x220.jpg" alt />
                                            <div className="image" />
                                        </div>
                                        <div className="definitions_wrap">
                                            <div className="office">
                                                <h3>New York Office</h3>
                                                <div className="icon">
                                                    <img className="svg" src="img/svg/location.svg" alt />
                                                </div>
                                            </div>
                                            <div className="short_info_wrap">
                                                <div className="row">
                                                    <p>110-115 Ft.Consort NE, New-York, DC 20031</p>
                                                </div>
                                                <div className="row">
                                                    <label>Phone:</label>
                                                    <span>+1 272-436-4524</span>
                                                </div>
                                                <div className="row">
                                                    <label>Email:</label>
                                                    <span><a href="#">n.constructify@gmail.com</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="inner">
                                        <div className="image_wrap">
                                            <img src="img/contact/370x220.jpg" alt />
                                            <div className="image" />
                                        </div>
                                        <div className="definitions_wrap">
                                            <div className="office">
                                                <h3>Boston Office</h3>
                                                <div className="icon">
                                                    <img className="svg" src="img/svg/location.svg" alt />
                                                </div>
                                            </div>
                                            <div className="short_info_wrap">
                                                <div className="row">
                                                    <p>100-120 Ft.Albemarle NE, Boston, DC 20017</p>
                                                </div>
                                                <div className="row">
                                                    <label>Phone:</label>
                                                    <span>+1 252-925-7564</span>
                                                </div>
                                                <div className="row">
                                                    <label>Email:</label>
                                                    <span><a href="#">b.constructify@gmail.com</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="contact_text">
                            <p>Glax is a privately owned, internationally focussed engineering enterprise with world-class capabilities spanning the entire client value chain. We operate an integrated business model comprising the full range of engineering, construction and asset management services delivering single-source solutions for some of the world&apos;s most prestigious public and private organisations.</p>
                        </div>
                        <div className="glax_tm_contact_wrap">
                            <div className="get_in_touch">
                                <h3>Get in Touch With Us</h3>
                            </div>
                            <div className="inner_wrap">
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /CONTACT */}
        </Layout>

    )
}
