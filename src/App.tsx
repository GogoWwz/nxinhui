import React, { useState } from 'react'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Roll from 'react-reveal/Roll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import {
  HeaderConfig,
  Section1Config,
  Section2Config,
  Section3Config,
  Section4Config,
  Section5Config,
  Section6Config,
  FooterConfig
} from './config';
import Img1 from './assets/index/bg_banner@2x.png';
import PrevImg from './assets/index/prev.png'
import NextImg from './assets/index/next.png'
import IconArrow from './assets/index/icon_arrow.png'
import 'swiper/swiper.css';
import './App.scss'

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleOnClick = (index: number) => {
    setActiveIndex(index);
    const dom = document.getElementById(`section-${index}`)
    window.scrollTo({
      top: dom?.offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <div className='app'>
      {/* 头部 */}
      <header id="section-0" className='header'>
        <nav className='header-nav'>
          <img className='header-nav-logo' src={HeaderConfig.logo} alt="" />
          <div className='header-nav-tabs'>
            {
              HeaderConfig.tabs.map((tab, index) => {
                return (
                  <div className={`header-nav-tab ${index === activeIndex ? 'active' : ''}`} key={index} onClick={() => handleOnClick(index)}>
                    {tab}
                  </div>
                )
              })
            }
          </div>
        </nav>

        <div className='header-wrapper'>
          <img src={Img1} alt="" />
          <div className='header-info'>
            <div>歆会广告</div>
            <div>让广告变现更有效率</div>
            <div>歆会广告联盟创立于2016年，建有国内响应速度快、容量高、技术先进的移动广告网络交易中心与大数据计算平台，全面支持开屏、横幅、插屏、原生、激励视频等各种主流的移动广告形式。</div>
          </div>
        </div>
      </header>

      {/* 正文1 */}
      <Fade>
        <section id="section-1" className='section1'>
          <h1>{Section1Config.title}</h1>
          <div className='section1-content'>
            {
              Section1Config.content.map((item, index) => {
                const { img, title, desc } = item;
                return (
                  <Zoom key={index}>
                    <div className='section1-item'>
                      <img src={img} alt="" />
                      <div>{title}</div>
                      <div>{desc}</div>
                    </div>
                  </Zoom>
                );
              })
            }
          </div>
        </section>
      </Fade>

      {/* 正文2 */}
      <Fade>
        <section className='section2'>
          <h1>{Section2Config.title}</h1>
          <div className='section2-content'>
            {
              Section2Config.content.map((item, index) => {
                const { img, title, desc } = item;
                return (
                  <Zoom key={index}>
                    <div className='section2-item' key={index}>
                      <img src={img} alt="" />
                      <div>{title}</div>
                      <div>{desc}</div>
                    </div>
                  </Zoom>
                );
              })
            }
          </div>
        </section>
      </Fade>

      {/* 正文3 */}
      <Zoom>
        <section className='section3'>
          <div className='section3-part1'>
            {
              Section3Config.content.map((item, index) => {
                const { title, img, desc } = item;
                return (
                  <div className="section3-part1-item" key={index}>
                    <img src={img} alt="" />
                    <div>{title}</div>
                    <div>{desc}</div>
                  </div>
                )
              })
            }
          </div>

          <div className='section3-title'>{Section3Config.title}</div>

          <div className='section3-carousel'>
            <img className='swiper-button-prev' src={PrevImg} alt="" />
            <div className='section3-carousel-wrapper'>
              <Swiper
                loop
                slideToClickedSlide
                spaceBetween={20}
                slidesPerView={6}
                modules={[Navigation]}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                effect="coverflow"
                coverflowEffect={{
                  rotate: 0,
                  modifier: 1,
                  slideShadows: true,
                  stretch: 131,
                  depth: 300,
                }}
              >
                {
                  [...Section3Config.banners, ...Section3Config.banners].map((item, index) => {
                    return (
                      <SwiperSlide key={index}><img src={item} /></SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </div>
            <img className='swiper-button-next' src={NextImg} alt="" />
          </div>
        </section>
      </Zoom>

      {/* 正文4 */}
      <Fade>
        <section id="section-2" className='section4'>
          <div className="section4-wrapper">
            <Flip>
              <div>{Section4Config.title}</div>
            </Flip>
            <Flip>
              <div>{Section4Config.desc}</div>
            </Flip>
          </div>
        </section>
      </Fade>

      {/* 正文5 */}
      <Zoom>
        <section className='section5'>
          <div className="section5-part1">
            <div className="section5-title">{Section5Config.part1.title}</div>
            <div className="section5-part1-content">
              {
                Section5Config.part1.content.map((item, index) => {
                  const { title, img, desc } = item;
                  return (
                    <div className="section5-part1-item" key={index}>
                      <img src={img} alt="" />
                      <div>{title}</div>
                      <div dangerouslySetInnerHTML={{ __html: desc }} />
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="section5-part2">
            <div className="section5-title">{Section5Config.part2.title}</div>
            <div className="section5-subTitle">{Section5Config.part2.subTitle}</div>
            <div className="section5-part2-content">
              {
                Section5Config.part2.content.map((item, index) => {
                  const { img, desc } = item;
                  return (
                    <React.Fragment key={index}>
                      <div className="section5-part2-item">
                        <img src={img} alt="" />
                        <div>{desc}</div>
                      </div>
                      {
                        index < Section5Config.part2.content.length - 1 &&
                        <img width={34} height={34} src={IconArrow} alt="" />
                      }
                    </React.Fragment>
                  )
                })
              }
            </div>
          </div>
          <div className="section5-part3">
            <div className="section5-title">{Section5Config.part3.title}</div>
            <div className='section5-part3-content'>
              {
                Section5Config.part3.content.map((item, index) => {
                  const { img, desc } = item;
                  return (
                    <div className="section5-part3-item" key={index}>
                      <img src={img} alt="" />
                      <div>{desc}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
      </Zoom>

      {/* 正文6 */}
      <Fade>
        <section className='section6'>
          <div className="section6-title">{Section6Config.title}</div>
          <div className="section6-content">
            {
              Section6Config.content.map((item, index) => {
                const { img, desc, info, icon } = item;
                return (
                  <div className="section6-item" key={index}>
                    <div className="section6-item-top">
                      <img src={img} alt="" />
                      <div>{info}</div>
                    </div>

                    <div className="section6-item-bottom">
                      <img src={icon} alt="" />
                      <div>{desc}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </section>
      </Fade>

      {/* 底部 */}
      <footer id="section-3" className='footer'>
        <div className="footer-wrapper">
          <img src={FooterConfig.logo} className="footer-logo" />
          <div className="footer-about">
            <div className="footer-about-title">{FooterConfig.about.title}</div>
            <div className="footer-about-content">
              {
                FooterConfig.about.content.map((item, index) => {
                  return (
                    <div key={index} className='footer-about-item'>
                      {item}
                    </div>
                  );
                })
              }
            </div>
          </div>
          <div className="footer-connect">
            <div className="footer-connect-title">{FooterConfig.connect.title}</div>
            <div className="footer-connect-content">
              {
                FooterConfig.connect.content.map((item, index) => {
                  const { icon, text } = item;
                  return (
                    <div key={index} className='footer-connect-item'>
                      <img src={icon} alt="" />
                      <span>{text}</span>
                    </div>
                  );
                })
              }
              <div className='footer-privacy' onClick={() => window.open('/privacy')}>隐私政策</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
