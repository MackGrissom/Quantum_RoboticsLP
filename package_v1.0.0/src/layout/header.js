import React from 'react'

export default function Header({style}) {
  return (
    <>
    {/* HEADER */}
    <div className="glax_tm_header_wrap" data-style={style ? style : "" } data-position={style=="transparrent" ? "absolute" : "relative"} >
            <div className="container">
              <div className="header_inner_wrap">
                <div className="menu_wrap">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li className="">
                      <a href="/project">Projects</a>
                      
                    </li>
                    <li className="">
                      <a href="/service">Services</a>
                    </li>
                    <li className="">
                      <a href="/blog">News</a>
                
                    </li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </div>
              
                <div className="logo_wrap">
                  <img src="img/desktop-logo.png" alt="" />
                  <span className="left" />
                  <span className="right" />
                  <span className="extra_first" />
                  <span className="extra_second" />
                  <a className="full_link" href="/" />
                </div>
              </div>
            </div>
          </div>
          {/* /HEADER */}
    </>
  )
}
