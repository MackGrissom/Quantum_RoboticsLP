import React, {useState} from 'react'
import Link from 'next/link'
import HelpfulContactForm from '../components/helpful_contact_form';

export default function MobileBar() {
    const [isMobileTopbar, setMobileTopbar] = useState(0)
    const activeMobileTopbar = (index) =>{
        setMobileTopbar(index);
    }
    

    const [isMobileMenu, setMobileMenu] = useState(false);
    const MobileMenuTrueFalse = () => setMobileMenu(!isMobileMenu)

    // useEffect(() => {
	// 	new MetisMenu("#metismenu");
	// }, []);
    return (
        <>
            <div className="glax_tm_mobile_bar_wrap">
                <div className="mobile_topbar_wrap">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="short_info_wrap">
                                <ul>
                                    <li data-type="home"><Link href="#"><a onClick={() => activeMobileTopbar(1)}><img className="svg" src="img/svg/home.svg" alt="" /></a></Link></li>
                                    <li data-type="message"><Link href="#"><a onClick={() => activeMobileTopbar(2)}><img className="svg" src="img/svg/message2.svg" alt="" /></a></Link></li>
                                    <li data-type="phone"><Link href="#"><a onClick={() => activeMobileTopbar(3)}><img className="svg" src="img/svg/old-phone.svg" alt="" /></a></Link></li>
                                    <li data-type="clock"><Link href="#"><a onClick={() => activeMobileTopbar(4)}><img className="svg" src="img/svg/clock.svg" alt="" /></a></Link></li>
                                    <li data-type="clock"><Link href="#"><a onClick={() => activeMobileTopbar(0)} style={ isMobileTopbar !== 0  ? {display: "block"} : {display: "none"} }>x</a></Link></li>
                                </ul>
                            </div>
                            <div className="mobile_socials_wrap">
                                <ul>
                                    <li><Link href="#"><a><i className="xcon-facebook" /></a></Link></li>
                                    <li><Link href="#"><a><i className="xcon-twitter" /></a></Link></li>
                                    <li><Link href="#"><a><i className="xcon-instagram" /></a></Link></li>
                                    <li><Link href="#"><a><i className="xcon-pinterest" /></a></Link></li>
                                    <li><Link href="#"><a><i className="xcon-behance" /></a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile_header_wrap">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="logo_wrap">
                                <Link href="/"><a><img src="img/mobile-logo.png" alt="" /></a></Link>
                            </div>
                            <div className="trigger_wrap" >
                                <div  className={`hamburger hamburger--collapse-r ${isMobileMenu ? "is-active" : ""}`}>
                                    <div className="hamburger-box">
                                        <div  onClick={MobileMenuTrueFalse} className="hamburger-inner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* MENU LIST */}
                <div className={`menu_list_wrap ${isMobileMenu ? "open" : "close"}`}  style={ isMobileMenu ? {display: "block"} : {display: "none"} }>
                    <ul className="nav">
                        <li><Link href="/"><a>Homepage</a></Link></li>
                        <li>
                            <Link href="/project"><a>Projects</a></Link>
                            <ul className="sub_menu">
                                <li><Link href="/project"><a>Project</a></Link></li>
                                <li><Link href="/project-single"><a>Project Single</a></Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/service"><a>Our Services</a></Link>
                            <ul className="sub_menu">
                                <li><Link href="/service"><a>Service</a></Link></li>
                                <li><Link href="/service-single"><a>Service Single</a></Link></li>
                            </ul>
                        </li>
                        <li><Link href="/blog"><a>Blog</a></Link></li>
                        <li><Link href="/about"><a>About Us</a></Link></li>
                        <li><Link href="/contact"><a>Contact</a></Link></li>
                    </ul>
                </div>
                {/* /MENU LIST */}
                {/* DROPDOWN */}
                <div className="glax_tm_dropdown_wrap">
                    <div className="container">
                        <div className="drop_list home" style={ isMobileTopbar === 1  ? {display: "block"} : {display: "none"} } >
                            <div className="adress_wrap">
                                <div className="office_image">
                                    <img src="img/contact/1.jpg" alt="" />
                                </div>
                                <div className="definitions_wrap">
                                    <h3>Head Office in New-York</h3>
                                    <p>775 New York Ave, Brooklyn, NY 11203</p>
                                    <p>Phone: +1 202-415-7234</p>
                                    <p><span>Email:</span><Link href="#"><a>w.constructify@gmail.com</a></Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="drop_list message" style={ isMobileTopbar === 2  ? {display: "block"} : {display: "none"} }>
                            <div className="short_contact">
                                <h3 className="title">Request a Quote</h3>
                                <p className="subtitle">Looking for a quality and affordable builder for your next project?</p>
                                <div className="inputs_wrap">
                                    <HelpfulContactForm/>
                                </div>
                            </div>
                        </div>
                        <div className="drop_list phone" style={ isMobileTopbar === 3  ? {display: "block"} : {display: "none"} }>
                            <div className="call_wrap">
                                <div className="image">
                                    <img src="img/estimate/call.png" alt="" />
                                </div>
                                <h3>Toll Free</h3>
                                <p> <a href="tel:18009876543">1-800-987-6543</a></p>
                            </div>
                        </div>
                        <div className="drop_list clock" style={ isMobileTopbar === 4  ? {display: "block"} : {display: "none"} }>
                            <div className="working_hours_wrap_short">
                                <h3>Working Hours</h3>
                                <p className="subtitle">We are happy to meet you during our working hours. Please make an appointment.</p>
                                <div className="hour_list">
                                    <ul>
                                        <li>
                                            <span className="left">Monday-Friday:</span>
                                            <span className="right">9am to 5pm</span>
                                        </li>
                                        <li>
                                            <span className="left">Saturday:</span>
                                            <span className="right">10am to 3pm</span>
                                        </li>
                                        <li>
                                            <span className="left">Sunday:</span>
                                            <span className="right">Closed</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /DROPDOWN */}
            </div>
        </>
    )
}
