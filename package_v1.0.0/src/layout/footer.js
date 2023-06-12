import Link from 'next/link'
import React from 'react'
import { Parallax } from "react-parallax";
// import image5 from './img/slider/5.jpg'

export default function Footer() {
    return (
        <>
            <footer className="glax_tm_footer_wrap">
                <Parallax className="glax_tm_universal_parallax_wrap" bgImage="img/slider/5.jpg" strength={300}>
                    <div className="main_content footer">
                        <div className="glax_tm_subscribe_wrap">
                            <div className="container">
                                <div className="inner_wrap">
                                    <div className="left_wrap">
                                        <div className="book">
                                            <img className="svg" src="img/svg/open-book.svg" alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Newsletter<span /> get updates with latest topics</p>
                                        </div>
                                    </div>
                                    <div className="right_wrap">
                                        <input className="email" type="email" placeholder="Your e-mail address" />
                                        <input className="button" type="button" defaultValue="subscribe" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="glax_tm_footer_wrap">
                            <div className="container">
                                <div className="glax_tm_list_wrap footer" data-column={3} data-space={40}>
                                    <ul className="glax_list">
                                        <li>
                                            <div className="inner">
                                                <div className="footer_section_title">
                                                    <h3>About Company</h3>
                                                </div>
                                                <div className="definition">
                                                    <p>We are an award winning construction company focused on user-driven outcomes. We strive to create meaningful connections for users through considered.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inner">
                                                <div className="footer_section_title">
                                                    <h3>Business Hours</h3>
                                                </div>
                                                <div className="inner_list">
                                                    <ul>
                                                        <li>
                                                            <div className="wrap">
                                                                <span className="left">Monday-Friday:</span>
                                                                <span className="right">9am to 5pm</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="wrap">
                                                                <span className="left">Saturday:</span>
                                                                <span className="right">10am to 3pm</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="wrap">
                                                                <span className="left">Sunday:</span>
                                                                <span className="right">Closed</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inner">
                                                <div className="footer_section_title">
                                                    <h3>Helpful Links</h3>
                                                </div>
                                                <div className="helpful_links">
                                                    <div className="inner_list">
                                                        <ul>
                                                            <li><Link href="#"><a>Our services</a></Link></li>
                                                            <li><Link href="#"><a>Diclaimer</a></Link></li>
                                                            <li><Link href="#"><a>Showcase</a></Link></li>
                                                            <li><Link href="#"><a>Privacy Policy</a></Link></li>
                                                            <li><Link href="#"><a>Affliates</a></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Parallax>
                <div className="bottom_wrap">
                    <div className="container">
                        <div className="links_wrap">
                            <ul>
                                <li><Link href="#"><a>Services</a></Link></li>
                                <li><Link href="#"><a>Affliates</a></Link></li>
                                <li><Link href="#"><a>Disclaimer</a></Link></li>
                                <li><Link href="#"><a>Privacy Policy</a></Link></li>
                                <li><Link href="#"><a>Career</a></Link></li>
                            </ul>
                        </div>
                        <div className="copyright">
                            <p>© 1934 - 2022 <Link href="#"><a className="constructify">Glax, LCC</a></Link>. All rights reserved. <Link href="https://themeforest.net/user/trendycoder"><a className="trendycoder">TrendyCoder</a></Link></p>
                            <Link href="#"><a className="glax_tm_totop">
                                <span className="shape" />
                                <span className="name">To Top</span>
                            </a></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
