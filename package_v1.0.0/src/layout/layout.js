import React, { useState } from 'react'
import Head from 'next/head'
import Siderbar from '../components/sidebar'
import Footer from './footer'
import Header from './header'
import MobileBar from './mobilebar'
import TopBar from './topbar'

export default function Layout({ children, style }) {

    const [isTopbar, setTopbar] = useState(0);
    const activeTopbar = (index) => {
        setTopbar(index);
    };


    return (
        <>
            <Head>
                <meta name="description" content="Glax" />
                <meta name="author" content="TrendyCoder" />
                <meta name="viewport" content="width=deviceWidth, initialScale=1, maximumScale=1" />
                <title>Quantum Robotics</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Head>

            {/* WRAPPER ALL */}
            <div className="glax_tm_wrapper_all">
                <TopBar isTopbar={isTopbar} activeTopbar={activeTopbar} />

                <div className="wrapper_all_inner_wrap">
                    {/* HEADER */}
                    <Header style={style} />
                    {/* /HEADER */}
                    {/* MOBILE BAR */}
                    <MobileBar />
                    {/* /MOBILE BAR */}
                    {/* SIDEBAR WIDGET */}
                    <Siderbar isTopbar={isTopbar} activeTopbar={activeTopbar} />
                    {/* /SIDEBAR WIDGET */}

                    {children}

                    {/* FOOTER */}
                    <Footer />
                    {/* /FOOTER */}
                </div>
            </div>
            {/* / WRAPPER ALL */}
        </>
    )
}
