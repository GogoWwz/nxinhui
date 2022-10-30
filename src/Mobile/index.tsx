/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
// import './index.css';

const Mobile = () => {
  return (
    <>
      <header>
        <div className="header">
          <a className="header__logo" href="https://www.toponad.com"></a>
          <div className="header__spread"></div>
          <input id="lang-btn" type="checkbox" />
          <label className="header__lang" htmlFor="lang-btn">
            CN
            <a className="header__lang__item" href="https://www.toponad.com/change-language?lang=zh-cn">CN</a>
            <a className="header__lang__item" href="https://www.toponad.com/change-language?lang=en">EN</a>
          </label>
          <a className="header__login" href="http://app.toponad.com/m/login"></a>
          <input id="menu-btn" type="checkbox" />
          <label className="menu-btn-label" htmlFor="menu-btn">
            <span className="menu-btn-label__white-bar"></span>
            <span className="menu-btn-label__white-bar"></span>
            <span className="menu-btn-label__white-bar"></span>
            <span className="menu-btn-label__white-bar"></span>
          </label>
          <label className="nav-bg" htmlFor="menu-btn"></label>
          <div className="nav-bar">
            <a className="nav-item nav-active" href="https://www.toponad.com">
              主页
            </a>
            <a className="nav-item " style={{ marginBottom: 30 }}>
              高效聚合
              <a className="sub-nav-item" href="https://www.toponad.com/zh-cn/mediation">
                聚合管理
              </a>
              <a className="sub-nav-item" href="https://www.toponad.com/zh-cn/statistics">
                数据赋能
              </a>
              <a className="sub-nav-item" href="https://www.toponad.com/zh-cn/solution/enterprise-level"
                style={{ marginBottom: 58 }}>
                企业服务
              </a>
            </a>
            <a className="nav-item " href="https://www.toponad.com/zh-cn/solution/game">
              游戏变现
            </a>
            <a className="nav-item " href="https://www.toponad.com/zh-cn/solution/app">
              网服变现
            </a>
            <a className="nav-item " href="https://www.toponad.com/zh-cn/posts">
              活动资讯
            </a>
            <a className="nav-item " href="https://www.toponad.com/zh-cn/contact">
              联系我们
            </a>
          </div>
        </div>
      </header>
      <section className="page-body">
        <div className="box-1 banner">
          <h1 className="box-1__h1 banner__title">您的移动广告<br /><span className="h1--highlight">变现收益</span>提升工具</h1>
          <a className="btn__get-started" href="http://app.toponad.com/login" target="_blank" rel="noreferrer">立即体验</a>
        </div>
        <div className="box-2">
          <h2 className="box-2__h2">一站式广告聚合平台</h2>
          <div className="box-2__img"></div>
          <p className="box-2__p">
            <span>快速便捷轻量的SDK</span><span>全球优质广告资源配置</span><br /><span>行业领先的广告样式</span><span>稳定的全球化部署支持</span></p>
          <a className="btn__view-more" href="/zh-cn/monetization">了解更多</a>
        </div>
        <div className="box-3">
          <h2 className="box-3__h2">智能高效的聚合管理功能</h2>
          <div className="box-3__img"></div>
          <p className="box-3__p">高效便捷的精细化运营管理功能，基于真实用户行为动态调整广告请求排序，借助大数据算法使每次曝光得到高度优质的收益填充</p>
          <a className="btn__view-more" href="/zh-cn/mediation">了解更多</a>
        </div>
        <div className="box-4">
          <h2 className="box-4__h2">真实透明的数据洞察</h2>
          <div className="box-4__img"></div>
          <p className="box-4__p">提供广告收益、DAU、eCPM、LTV、留存等关键数据<br />支持日期、应用、地区、广告平台等多维度组合查询<br />直观对比各家广告平台API数据</p>
          <a className="btn__view-more" href="/zh-cn/statistics">了解更多</a>
        </div>
        <div className="box-25">
          <h2>透明可信赖的SDK</h2>
          <p>一站集成全球顶级广告平台，开源代码逻辑清晰可见，真正做 到安全、透明、可信赖。</p>
          <a className="btn__get-started" href="http://app.toponad.com/login" target="_blank" rel="noreferrer">获取SDK</a>
          <div className="box-25__img"></div>
        </div>

        <div className="box-26">
          <div className="box-26-body box-26-game">
            <div className="box-26-top">
              <h1>游戏变现</h1>
              <p>基于游戏玩法复杂性，分析不同类型游戏广告变现相关数据，针对不同游戏品类变现需求，定制移动游戏商业化变现解决方案。</p>
            </div>
            <div className="box-26-content">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <p className="desc">TopOn是我们在全球市场变现的的核心合作伙伴之一，团队积极主动地为我们提供了专业、透明的服务，我们期待与TopOn一起取得更大的成功！</p>
                    <p className="icon"><img src="/image/index-mobile/icon-jp.png" /></p>
                    <p className="name">JoyPac Games</p>
                  </div>
                  <div className="swiper-slide">
                    <p className="desc">如果你是追求长期用户收益的开发者，我们强烈推荐TopOn，后台运营面板直观简洁，核心数据一应俱全，而且团队各项支持属性点满，非常给力。</p>
                    <p className="icon"><img src="/image/index-mobile/icon-qc.png" /></p>
                    <p className="name">青瓷游戏</p>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>

          <div className="box-26-body box-26-app">
            <div className="box-26-top">
              <h1>网服变现</h1>
              <p>针对网服应用广告变现接入成本高、可展示广告场景少、广告收益低等痛点，通过精细化运营策略，助力开发者提高广告收益。</p>
            </div>
            <div className="box-26-content">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <p className="desc">
                      TopOn的SDK简单易用，后台运营操作直观简洁，对接工作流畅给力，为我们提供了许多针对性和专业性都极强的商业化变现策略，从产品开发到持续增长的每一步，TopOn平台都发挥着不可替代的作用。</p>
                    <p className="icon"><img src="/image/index-mobile/icon-mdd.png" /></p>
                    <p className="name">埋堆堆</p>
                  </div>
                  <div className="swiper-slide">
                    <p className="desc">TopOn一直以来都是恋爱记的重要合作伙伴，便捷的集成设置、出色的运营支持、专业的变现建议，让我们能够将所有精力和时间集中在产品开发和内容营销上。</p>
                    <p className="icon"><img src="/image/index-mobile/icon-laj.png" /></p>
                    <p className="name">恋爱记</p>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-7">
          <h2 className="box-7__h2">新闻资讯</h2>
          <div className="box-7__news">
            <a className="box-7__news__title" href="https://www.toponad.com/zh-cn/posts/231.html">活动报名 | 快手联盟 x TopOn
              品类解读系列沙龙第二期，解读泛娱乐类产品的增长想象空间</a>
            <p className="box-7__news__description"></p>
            <p className="box-7__news__date">10/20</p>
          </div>
          <div className="box-7__news">
            <a className="box-7__news__title" href="https://www.toponad.com/zh-cn/posts/227.html">宝藏功能 |
              广告变现运营如何巧妙解放双手？看看这几款便捷功能</a>
            <p className="box-7__news__description"></p>
            <p className="box-7__news__date">10/08</p>
          </div>
          <div className="box-7__news">
            <a className="box-7__news__title" href="https://www.toponad.com/zh-cn/posts/223.html">重磅功能 | TopOn聚合实现一键创建同步广告源
              ——已支持优量汇、Mintegral平台</a>
            <p className="box-7__news__description"></p>
            <p className="box-7__news__date">10/08</p>
          </div>
          <a className="btn__more" href="https://www.toponad.com/zh-cn/posts">查看更多</a>
        </div>
      </section>
      <input id="qrcode-toggle" type="checkbox" />
      <footer>
        <label className="qrcode" htmlFor="qrcode-toggle"></label>
        <div className="footer-graphics">
          <a className="footer-graphics__logo" href="https://www.toponad.com/zh-cn"></a>
          <div className="footer-graphics__btns">
            <a className="footer-graphics__btns__btn" href="https://www.toponad.com/zh-cn/contact">咨询留言</a>
            <div className="footer-graphics__btns__icons">
              <a className="footer-graphics__btns__icons--facebook" target="_blank"
                href="https://www.facebook.com/TopOn-2202518406639775/?ref=bookmarks" rel="noreferrer"></a>
              <label className="footer-graphics__btns__icons--wechat" htmlFor="qrcode-toggle"></label>
              <a className="footer-graphics__btns__icons--linkedin" target="_blank"
                href="https://www.linkedin.com/company/14823889/admin/" rel="noreferrer"></a>
              <a className="footer-graphics__btns__icons--jianshu" target="_blank"
                href="https://www.jianshu.com/u/7576a64acf16" rel="noreferrer"></a>
            </div>
          </div>
        </div>
        <div className="footer-about">
          <h2>关于 TopOn</h2>
          <p>
            <a className="footer-about__nav" href="https://www.toponad.com/zh-cn/mediation">高效聚合</a>
            <a className="footer-about__nav" href="https://www.toponad.com/zh-cn/solution/game">游戏变现</a>
          </p>
          <p>
            <a className="footer-about__nav" href="https://www.toponad.com/zh-cn/solution/app">网服变现</a>
            <a className="footer-about__nav" href="https://www.toponad.com/zh-cn/posts">活动资讯</a>
          </p>
        </div>
        <div className="footer-contact">
          <h2>联系方式</h2>
          <p>
            <span className="footer-contact__title">公司地址</span>
            <a href="https://j.map.baidu.com/07/Obd">广州市天河区珠江新城珠光·新城国际中心A座1103号</a>
          </p>
          <p>
            <span className="footer-contact__title">商务合作</span>
            <a href="mailto:business@toponad.com">business@toponad.com</a>
          </p>
          <p>
            <span className="footer-contact__title">市场合作</span>
            <a href="mailto:lawrence@toponad.com">lawrence@toponad.com</a>
          </p>
          <p>
            <span className="footer-contact__title">技术支持</span>
            <a href="mailto:support@toponad.com">support@toponad.com</a>
          </p>
          <p>
            <span className="footer-contact__title">QQ &amp; 微信</span>
            <a href="">188108875(Harry)</a>
          </p>
        </div>
      </footer>
      <link rel="stylesheet" href="https://www.toponad.com/css/subscribe.css" />
      <div className="subscribe-btn transition3">
        <div className="subscribe-btn__icon">
          <div className="subscribe-btn__icon__dot"></div>
          <div className="subscribe-btn__icon__dot"></div>
          <div className="subscribe-btn__icon__dot"></div>
        </div>
      </div>
      <div className="subscribe-window mobile transition10">
        <div className="subscribe-window__text text-unselectable">
          <label htmlFor="subscribe-email">欢迎订阅，获得最新广告资讯</label>
        </div>
        <form className="subscribe-window__main transition5" id="form">
          <input type="hidden" name="_token" value="vDcrsbuaYoKtiz2XRYAhWKEIQs2JSZoNtx4dWoGO" />
          <input className="" id="subscribe-email" type="email" name="email"
            pattern="^[\w.-]+@([1-9]|[a-z]|[A-Z])+(\.[A-Za-z]{2,4}){1,4}$" placeholder="Email" />
          <br />
          <input className="transition3" name="submit" value="订阅" type="submit" />
        </form>
      </div>
    </>
  );
};

export default Mobile;