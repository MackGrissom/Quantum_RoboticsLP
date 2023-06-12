import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function HeroHeader() {

    const slide=[
        {
            img:"1.jpg",
            header:"We are more than industrial company",
            content:"The foundations and aspirations of our business remain true to those established by our visionary founders, and their innovation and energy continue to be our inspiration. Our passion and entrepreneurial culture will ensure that we deliver for our customers in safety, quality and assurance – today and in the future."

        },
        {
            img:"4.jpg",
            header:"We are more than industrial company",
            content:"The foundations and aspirations of our business remain true to those established by our visionary founders, and their innovation and energy continue to be our inspiration. Our passion and entrepreneurial culture will ensure that we deliver for our customers in safety, quality and assurance – today and in the future."

        },
        {
            img:"5.jpg",
            header:"We are more than industrial company",
            content:"The foundations and aspirations of our business remain true to those established by our visionary founders, and their innovation and energy continue to be our inspiration. Our passion and entrepreneurial culture will ensure that we deliver for our customers in safety, quality and assurance – today and in the future."

        },
        {
            img:"7.jpg",
            header:"We are more than industrial company",
            content:"The foundations and aspirations of our business remain true to those established by our visionary founders, and their innovation and energy continue to be our inspiration. Our passion and entrepreneurial culture will ensure that we deliver for our customers in safety, quality and assurance – today and in the future."

        },
        {
            img:"8.jpg",
            header:"We are more than industrial company",
            content:"The foundations and aspirations of our business remain true to those established by our visionary founders, and their innovation and energy continue to be our inspiration. Our passion and entrepreneurial culture will ensure that we deliver for our customers in safety, quality and assurance – today and in the future."

        },
]
    return (
        <>
            <div className="glax_tm_hero_header_wrap">
                <div className="slider_total_wrap">
                    <div className="swiper-container swiper-container-horizontal">
                        <Swiper
                            navigation={{
                                prevEl: ".tm_prev_button",
                                nextEl: ".tm_next_button",
                            }}
                            pagination= {{
                                el: '.swiper-pagination',
                                type: 'fraction',
                                formatFractionCurrent: function (number) {
                                    return '0' + number;
                                }
                              }}
                            autoplay={{
                                "delay": 3000,
                                "disableOnInteraction": false
                            }}
                            modules={[Pagination, Navigation]}
                            className="swiper-wrapper"
                        >
                            {slide.map((item, i) => (

                            <SwiperSlide className="image_wrap" key={i}>
                                <div className="bg_img" style={{"backgroundImage":`url(img/slider/${item.img})`}} />
                                <div className="swiper_content">
                                    <div className="texts_wrap">
                                        <h3>{item.header}</h3>
                                        <p>{item.content}</p>
                                    </div>
                                    
                                </div>
                            </SwiperSlide>
                            ))}
                        </Swiper>
                        
                    </div>
                </div>
                <div className="glax_tm_swiper_content">
                    <div className="container">
                        <div className="swiper_content">
                            <div className="texts_wrap">
                                <h3>We are more than just a robotics company </h3>
                                <p>As a renowned manufacturer of automation machinery for factories, our business is built upon the foundations and aspirations set by our visionary founders. Their innovative spirit and boundless energy serve as an ongoing inspiration for us. Our unwavering passion and entrepreneurial culture ensure that we consistently deliver outstanding results for our customers in terms of safety, quality, and assurance—both today and in the years ahead.</p>
                            </div>
                            <div className="switches">
                                <div className="prev_next">
                                    <div className="tm_next_button" />
                                    <div className="tm_prev_button" />
                                </div>
                                <div className="swiper-pagination my_swiper_pagination pagination-custom" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper_overlay" />
            </div>
        </>
    )
}
