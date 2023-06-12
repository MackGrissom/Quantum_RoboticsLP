import React from 'react'
import Layout from '../src/layout/layout'
import Link from 'next/link'
import CounterUp from '../src/counterUp'

export default function About() {
    return (
        <Layout style={"light"}>
            {/* ABOUT */}
            <div className="glax_tm_section">
                <div className="glax_tm_main_title_holder">
                    <div className="container">
                        <div className="title_holder">
                            <h3>About Us</h3>
                        </div>
                        <div className="builify_tm_breadcrumbs">
                            <ul>
                                <li><Link href="/"><a>Glax Home</a></Link></li>
                                <li className="shape"><span /></li>
                                <li><span>About Us</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="glax_tm_section">
                <div className="glax_tm_about_wrap">
                    <div className="container">
                        <div className="subtitle">
                            <p>Glax is a privately owned, internationally focussed engineering enterprise with world-class capabilities spanning the entire client value chain. We operate an integrated business model comprising the full range of engineering, construction and asset management services delivering single-source solutions for some of the world&apos;s most prestigious public and private organisations.</p>
                        </div>
                        <div className="about_service_list">
                            <h3>Performance Excellence</h3>
                            <p>Glax is committed to the development of a culture based on Excellence Plus performance. The Group sets stretching targets in all its operations globally and by applying the four elements of Excellence Plus performance  Client Focus, Innovation, Responsible Behaviour, People Development it will achieve its vision to be the company of first choice for all stakeholders, able to challenge and change the poor practices synonymous with the construction industry, and compete alongside world-leading businesses.</p>
                        </div>
                    </div>
                    <div className="glax_tm_about_counter_wrap">
                        <div className="container">
                            <div className="inner_counter">
                                <div className="leftbox">
                                    <div className="glax_tm_counter_wrap" data-col={4} data-delay={300}>
                                        <ul className="glax_tm_counter_list">
                                            <li>
                                                <div className="inner">
                                                    <h3><span><CounterUp className="glax_tm_counter" count={3572} time={3}/></span></h3>
                                                    <span>Projects Completed</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="inner">
                                                    <h3><span><CounterUp className="glax_tm_counter" count={300} time={3}/>K</span></h3>
                                                    <span>Company Clients</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="inner">
                                                    <h3><span><CounterUp className="glax_tm_counter" count={2348} time={3}/></span></h3>
                                                    <span>Professional Workers</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="inner">
                                                    <h3><span><CounterUp className="glax_tm_counter" count={120} time={3}/>+</span></h3>
                                                    <span>Company Awards</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="rightbox">
                                    <div className="inner_rightbox">
                                        <span className="top_title">You have a reason</span>
                                        <h3 className="title">Just Choose Us!</h3>
                                        <p className="text">We aim to eliminate the task of dividing your project between different architecture and construction company. We are a company that offers design and build services for you from initial sketches to the final construction.</p>
                                        <div className="counter_image_wrap gallery_zoom">
                                            <ul>
                                                <li>
                                                    <div className="inner">
                                                        <a className="zoom" href="img/about/11.jpg"><div className="image" /></a>
                                                        <div className="overlay">
                                                            <div className="in">
                                                                <span />
                                                            </div>
                                                        </div>
                                                        <a className="about_zoom zoom" href="img/about/11.jpg" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="inner">
                                                        <a className="zoom" href="img/about/12.jpg"><div className="image" /></a>
                                                        <div className="overlay">
                                                            <div className="in">
                                                                <span />
                                                            </div>
                                                        </div>
                                                        <a className="about_zoom zoom" href="img/about/12.jpg" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="inner">
                                                        <a className="zoom" href="img/about/13.jpg"><div className="image" /></a>
                                                        <div className="overlay">
                                                            <div className="in">
                                                                <span />
                                                            </div>
                                                        </div>
                                                        <a className="about_zoom zoom" href="img/about/13.jpg" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="counter_png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="about_service_list client">
                            <h3>Client Focus</h3>
                            <p>Our approach is led by an unwavering focus on fully understanding the needs of clients and delivering on our promises, regardless of the scale or complexity of the challenge in hand. Working collaboratively with our clients, we develop bespoke teams and solutions from concept through every stage of the project to completion, ensuring the best expertise and resources are deployed to achieve the required time, cost, quality, safety and sustainability outcomes.</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="about_service_list">
                            <h3>Responsible Behaviour</h3>
                            <p>We take our duty to act responsibly at all times very seriously through proactively managing the impacts of our activities on the environment, our people and the communities in which we operate. We work according to the guiding principles of our founding shareholders and by complying with the high standards set out in our Global Code of Conduct. In particular, we place the safety of those involved in or affected by our operations as our core organisational value, aiming to eliminate all accidents on our projects by 2020. We also take a leading role in driving change across our industry by seeking ways to reduce the effect of our operations on the environment through modernisation of traditional construction methods and practices.</p>
                        </div>
                    </div>
                    <div className="glax_tm_section">
                        <div className="container">
                            <div className="glax_tm_about_team_wrap">
                                <ul>
                                    <li>
                                        <div className="inner">
                                            <div className="image_wrap">
                                                <img src="img/about/250x190.jpg" alt />
                                                <div className="image" />
                                            </div>
                                            <div className="main_definitions">
                                                <h3>Alan Michaelis</h3>
                                                <span>Chief Executive</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inner">
                                            <div className="image_wrap">
                                                <img src="img/about/250x190.jpg" alt />
                                                <div className="image" />
                                            </div>
                                            <div className="main_definitions">
                                                <h3>James Hind</h3>
                                                <span>Finance Director</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inner">
                                            <div className="image_wrap">
                                                <img src="img/about/250x190.jpg" alt />
                                                <div className="image" />
                                            </div>
                                            <div className="main_definitions">
                                                <h3>Venu Raju</h3>
                                                <span>Engineering Director</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inner">
                                            <div className="image_wrap">
                                                <img src="img/about/250x190.jpg" alt />
                                                <div className="image" />
                                            </div>
                                            <div className="main_definitions">
                                                <h3>Paul Withers</h3>
                                                <span>Senior Independent Director</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inner">
                                            <div className="image_wrap">
                                                <img src="img/about/250x190.jpg" alt />
                                                <div className="image" />
                                            </div>
                                            <div className="main_definitions">
                                                <h3>Chris Girling</h3>
                                                <span>Independent Director</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inner">
                                            <div className="image_wrap">
                                                <img src="img/about/250x190.jpg" alt />
                                                <div className="image" />
                                            </div>
                                            <div className="main_definitions">
                                                <h3>Mark Hill</h3>
                                                <span>Non-executive Chairman</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /ABOUT */}
        </Layout>

    )
}
