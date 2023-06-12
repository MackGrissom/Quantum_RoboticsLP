import React, { useState } from 'react'

export default function TopBar({ isTopbar, activeTopbar }) {

  const [isActive, setActive] = useState(false);
  const activeTrueFalse = () => setActive(!isActive)
  const [isSelect, setSelect] = useState("Eng");

  return (
    <>
      {/* Language Switcher*/}
      <div className="lang_Switcher_dropdown_wrap">
        <div className={`lang_box ${isActive ? "opened" : ""}`}>
          <ul onClick={activeTrueFalse}>
            <li onClick={() => setSelect("Eng")}><span className={isSelect == "Eng" ? "selected" : ""}>Eng</span></li>
            <li onClick={() => setSelect("Spa")}><span className={isSelect == "TH" ? "selected" : ""}>TH</span></li>
          </ul>
        </div>
      </div>
      {/* /Language Switcher*/}
      {/* BORDERS */}
      <div className="glax_tm_border_wrap">
        <div className="border top" />
        <div className="border left" />
        <div className="border right" />
      </div>
      {/* /BORDERS */}
      {/* HOLDER */}
      <div className="glax_tm_holder_wrap">
        <div className="holder left" />
        <div className="holder right" />
      </div>
      {/* /HOLDER */}
      {/* TOP BAR */}
      <div className="glax_tm_topbar_wrap">
        <div className="container">
          <div className="inner_wrap">
            <div className="left_part_wrap">
              <div className="share_wrap">
                <ul>
                  <li><a href="#"><i className="xcon-facebook" /></a></li>
                  <li><a href="#"><i className="xcon-twitter" /></a></li>
                  <li><a href="#"><i className="xcon-instagram" /></a></li>
                  <li><a href="#"><i className="xcon-pinterest" /></a></li>
                  <li><a href="#"><i className="xcon-behance" /></a></li>
                </ul>
              </div>
              {/* Language Switcher*/}
              <div className="lang_Switcher_wrap">
                <div onClick={activeTrueFalse} className="language">
                  <a className="selected" href="#">{isSelect}</a>
                </div>
                
              </div>
              {/* /Language Switcher*/}
            </div>
            <div className="right_part_wrap">
              <ul>
                <li className={isTopbar !== 0 ? 'opened' : ''}>
                  <a href="#" onClick={() => activeTopbar(1)}><img className="svg" src="img/svg/home.svg" alt="" /></a>
                </li>
                <li className={isTopbar > 0 ? 'opened' : ''}>
                  <a href="#" onClick={() => activeTopbar(2)}><img className="svg" src="img/svg/message2.svg" alt="" /></a>
                </li>
                <li className={isTopbar > 0 ? 'opened' : ''}>
                  <a href="#" onClick={() => activeTopbar(3)}><img className="svg" src="img/svg/old_phone.svg" alt="" /></a>
                </li>
                <li className={isTopbar > 0 ? 'opened' : ''}>
                  <a href="#" onClick={() => activeTopbar(4)}><img className="svg" src="img/svg/clock.svg" alt="" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /TOP BAR */}
    </>
  )
}
