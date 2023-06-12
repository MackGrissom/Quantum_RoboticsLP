import React from 'react'
import Link from 'next/link'

export default function HomeBlog() {
    return (
        <>
            <div className="glax_tm_section">
                <div className="glax_tm_home_blog_wrap">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="blog_title_holder">
                                <h3>Thoughts &amp; Experiments</h3>
                            </div>
                            <div className="blog_list">
                                <ul>
                                    <li>
                                        <div className="inner">
                                            <div className="image_holder">
                                                <img src="img/blog/370x250.jpg" alt="" />
                                                <div className="main_image" style={{"backgroundImage":"url(img/blog/1.jpg)"}} />
                                                <div className="overlay" />
                                                <div className="date_wrap">
                                                    <h3><span>08</span></h3>
                                                    <h5>Aug</h5>
                                                    <h5>2018</h5>
                                                </div>
                                                <Link href="/blog-single"><a className="full_link" /></Link>
                                            </div>
                                            <div className="descriptions_wrap">
                                                <p className="category">
                                                    <span className="author">By <Link href="#"><a>Marketify</a></Link></span>
                                                    <span className="city">In <Link href="#"><a>Australia</a></Link></span>
                                                </p>
                                            </div>
                                            <div className="title_holder">
                                                <h3><Link href="/blog-single"><a>Laing O’Rourke: Moves, projects and bids</a></Link></h3>
                                            </div>
                                            <div className="glax_tm_button_more_wrap">
                                                <Link href="/blog-single"><a>
                                                    Read More
                                                    <span className="arrow_wrap">
                                                        <span className="first"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                        <span className="second"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                    </span>
                                                </a></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inner">
                                            <div className="image_holder">
                                                <img src="img/blog/370x250.jpg" alt="" />
                                                <div className="main_image" style={{"backgroundImage":"url(img/blog/2.jpg)"}} />
                                                <div className="overlay" />
                                                <div className="date_wrap">
                                                    <h3><span>07</span></h3>
                                                    <h5>Aug</h5>
                                                    <h5>2018</h5>
                                                </div>
                                                <Link href="/blog-single"><a className="full_link" /></Link>
                                            </div>
                                            <div className="descriptions_wrap">
                                                <p className="category">
                                                    <span className="author">By <Link href="#"><a>Marketify</a></Link></span>
                                                    <span className="city">In <Link href="#"><a>Discussion</a></Link></span>
                                                </p>
                                            </div>
                                            <div className="title_holder">
                                                <h3><Link href="/blog-single"><a>How to turn Victorian gasholders apartments</a></Link></h3>
                                            </div>
                                            <div className="glax_tm_button_more_wrap">
                                                <Link href="/blog-single"><a>
                                                    Read More
                                                    <span className="arrow_wrap">
                                                        <span className="first"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                        <span className="second"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                    </span>
                                                </a></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inner">
                                            <div className="image_holder">
                                                <img src="img/blog/370x250.jpg" alt="" />
                                                <div className="main_image" style={{"backgroundImage":"url(img/blog/3.jpg)"}} />
                                                <div className="overlay" />
                                                <div className="date_wrap">
                                                    <h3><span>06</span></h3>
                                                    <h5>Aug</h5>
                                                    <h5>2018</h5>
                                                </div>
                                                <Link href="/blog-single"><a className="full_link" /></Link>
                                            </div>
                                            <div className="descriptions_wrap">
                                                <p className="category">
                                                    <span className="author">By <Link href="#"><a>Marketify</a></Link></span>
                                                    <span className="city">In <Link href="#"><a>Video</a></Link></span>
                                                </p>
                                            </div>
                                            <div className="title_holder">
                                                <h3><Link href="/blog-single"><a>CITB appoints Peter Lauener as new chairman</a></Link></h3>
                                            </div>
                                            <div className="glax_tm_button_more_wrap">
                                                <Link href="/blog-single"><a>
                                                    Read More
                                                    <span className="arrow_wrap">
                                                        <span className="first"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                        <span className="second"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                    </span>
                                                </a></Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
