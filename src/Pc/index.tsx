/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './index.css';

const Pc = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand">
            <a className="navbar-brand my-0 font-weight-normal logo" href="/"></a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="menu" href="https://www.toponad.com/zh-cn">
                  主页
                  <div className="menu--active__underline"></div>
                </a>
              </li>

              <li className="nav-item dropdown">
                <a className="menu dropdown-toggle dropdown-toggle--solution" aria-haspopup="true" aria-expanded="false">
                  <span>
                    高效聚合
                  </span>
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item transition3" href="https://www.toponad.com/zh-cn/mediation">聚合管理</a>
                  <a className="dropdown-item transition3" href="https://www.toponad.com/zh-cn/statistics">数据赋能</a>
                  <a className="dropdown-item transition3"
                    href="https://www.toponad.com/zh-cn/solution/enterprise-level">企业服务</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="menu" href="https://www.toponad.com/zh-cn/solution/game">
                  游戏变现
                </a>
              </li>
              <li className="nav-item">
                <a className="menu" href="https://www.toponad.com/zh-cn/solution/app">
                  网服变现
                </a>
              </li>


              <li className="nav-item">
                <a className="menu" href="https://www.toponad.com/zh-cn/posts">
                  活动资讯
                </a>
              </li>
              <li className="nav-item">
                <a className="menu scroll-to--about-topon" href="javascript:void(0)">
                  联系我们
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="menu" target="_blank" href="https://app.toponad.com/m/login" rel="noreferrer">
                  登录
                </a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="menu menu--register transition3" target="_blank" href="https://app.toponad.com/m/register" rel="noreferrer">
                  免费注册
                </a>
              </li>

              <li className="nav-item dropdown d-flex align-items-center">
                <a className="dropdown-toggle dropdown-toggle--lang" aria-haspopup="true" aria-expanded="false">
                  <span>
                    中文
                  </span>
                </a>
                <div className="dropdown-menu">


                  <a className="dropdown-item transition3" href="https://www.toponad.com/zh-cn">中文</a>
                  <a className="dropdown-item transition3" href="https://www.toponad.com/en">EN</a>
                </div>
              </li>

            </ul>
          </nav>
        </div>

        <div className="notice-container">
          <input id="notice-switch" type="checkbox" />
          <div className="notice transition5">
            <span className="notice__icon">!</span>
            <p className="notice__content">重磅 | TopOn《2022上半年网服APP广告变现报告》正式发布</p>
            <a className="notice__link" href="https://www.toponad.com/zh-cn/report/218.html">查阅</a>
            <div className="notice__filler"></div>
            <label className="notice__close" htmlFor="notice-switch"></label>
          </div>
        </div>
      </header>
      <div className="page-body">
        <div className="wrapper" id="top">
          <div className="box-1 clearfix">
            <div className="container clearfix wow fadeInUp">
              <div className="row">
                <div className="col-6">
                  <h1>
                    您的移动广告<br /><span className="h1--highlight">变现收益</span>提升工具
                  </h1>
                  <a className="btn-get-started" href="https://app.toponad.com/login" target="_blank" rel="noreferrer">
                    立即体验
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper box-2">
          <div className="container text-left">
            <div className="row wow fadeInUp">
              <div className="col-6 box-2__img"></div>
              <div className="col-1"></div>
              <div className="col-5 box-2__intro">
                <h2>一站式广告聚合平台</h2>
                <p>
                  快速便捷轻量的SDK<br />全球优质广告资源配置<br />行业领先的广告样式<br />稳定的全球化部署支持
                </p>
                <div className="mt-5">
                  <a href="/zh-cn/solution/game" className="btn-more">
                    游戏变现
                  </a>
                  <a href="/zh-cn/solution/app" className="btn-more ml-3">
                    网服变现
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper box-3">
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-1"></div>
              <div className="col-5 box-3__intro text-left">
                <h2>智能高效的聚合管理功能</h2>
                <p>高效便捷的精细化运营管理功能，基于真实用户行为动态调整广告请求排序，借助大数据算法使每次曝光得到高度优质的收益填充</p>
                <div className="mt-5">
                  <a href="/zh-cn/mediation" className="btn-more">
                    了解更多
                  </a>
                </div>
              </div>
              <div className="col-6 box-3__img"></div>
            </div>
          </div>
        </div>

        <div className="wrapper box-4">
          <div className="container text-left">
            <div className="row wow fadeInUp">
              <div className="col-6 box-4__img"></div>
              <div className="col-1"></div>
              <div className="col-5 box-4__intro">
                <h2>真实透明的数据洞察</h2>
                <p>
                  提供广告收益、DAU、eCPM、LTV、留存等关键数据<br />支持日期、应用、地区、广告平台等多维度组合查询<br />直观对比各家广告平台API数据
                </p>
                <div className="mt-5">
                  <a href="/zh-cn/statistics" className="btn-more">
                    了解更多
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper box-8">
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-5 box-8__intro text-left">
                <h1>透明可信赖的SDK</h1>
                <p>一站集成全球顶级广告平台，开源代码逻辑清晰可见，真正做到安全、透明、可信赖</p>
                <div className="mt-5">
                  <a href="http://app.toponad.com/login" target="_blank" className="btn-get-started" rel="noreferrer">
                    获取SDK
                  </a>
                </div>
              </div>
              <div className="col-1"></div>
              <div className="col-6 box-8__img"></div>
            </div>
          </div>
        </div>

        <div className="wrapper box-26">
          <div className="container text-left">
            <div className="row wow fadeInUp">
              <div className="col-6 px-3">
                <div className="box-26-content shadow bg-white rounded">
                  <div className="box-26-top box-26-game-top">
                    <h1>游戏变现</h1>
                    <h2>基于游戏玩法复杂性，分析不同类型游戏广告变现相关数据，针对 不同游戏品类变现需求，定制移动游戏商业化变现解决方案。</h2>
                  </div>
                  <div className="box-26-bottom">
                    <div className="card game-card">
                      <div className="card-content">
                        <p className="maohao"></p>
                        <p className="desc">TopOn是我们在全球市场变现的的核心合作伙伴之一，团队积极主动地为我们提供了专业、透明的服务，我们期待与TopOn一起取得更大的成功！</p>
                        <p className="icon"><img src="/image/icon-jp.png" /></p>
                        <p className="name">JoyPac Games</p>
                      </div>
                      <div className="point">
                        <ul>
                          <li className="current"></li>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a href="/zh-cn/solution/game" className="btn-more">
                        了解更多
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="box-26-content shadow bg-white rounded">
                  <div className="box-26-top box-26-app-top">
                    <h1>网服变现</h1>
                    <h2>针对网服应用广告变现接入成本高、可展示广告场景少、广告收益 低等痛点，通过精细化运营策略，助力开发者提高广告收益。</h2>
                  </div>
                  <div className="box-26-bottom">
                    <div className="card app-card">
                      <div className="card-content">
                        <p className="maohao"></p>
                        <p className="desc">
                          TopOn的SDK简单易用，后台运营操作直观简洁，对接工作流畅给力，为我们提供了许多针对性和专业性都极强的商业化变现策略，从产品开发到持续增长的每一步，TopOn平台都发挥着不可替代的作用。
                        </p>
                        <p className="icon"><img src="/image/icon-mdd.png" /></p>
                        <p className="name">埋堆堆</p>
                      </div>
                      <div className="point">
                        <ul>
                          <li className="current"></li>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a href="/zh-cn/solution/app" className="btn-more ml-3">
                        了解更多
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper box-7 wow fadeInUp">
          <div className="box-7__news">
            <h2 className="box-7__title">新闻资讯</h2>
            <a className="box-7__news__item" href="https://www.toponad.com/zh-cn/posts/231.html">
              <div className="box-7__news__item__img"
                style={{ backgroundImage: "url('https://img.toponad.com/posts/2022/10/20/b6891f9a28c378458e2c2dcdb564501c.png')" }}>
              </div>
              <div className="box-7__news__item__content">
                <h3 className="box-7__news__item__content__title transition3">活动报名 | 快手联盟 x TopOn 品类解读系列沙龙第二期，解读泛娱乐类产品的增长想象空间
                </h3>
                <p className="box-7__news__item__content__description"></p>
              </div>
              <div className="box-7__news__item__time">
                <div className="box-7__news__item__time__day">20</div>
                <div className="box-7__news__item__time__month">10</div>
              </div>
            </a>
            <a className="box-7__news__item" href="https://www.toponad.com/zh-cn/posts/227.html">
              <div className="box-7__news__item__img" style={{ backgroundImage: "url('https://img.toponad.com/posts/2022/10/08/7748f965318e9aab8d9f43b3464c9c09.png')" }}>
              </div>
              <div className="box-7__news__item__content">
                <h3 className="box-7__news__item__content__title transition3">宝藏功能 | 广告变现运营如何巧妙解放双手？看看这几款便捷功能</h3>
                <p className="box-7__news__item__content__description"></p>
              </div>
              <div className="box-7__news__item__time">
                <div className="box-7__news__item__time__day">08</div>
                <div className="box-7__news__item__time__month">10</div>
              </div>
            </a>
            <a className="box-7__news__item" href="https://www.toponad.com/zh-cn/posts/223.html">
              <div className="box-7__news__item__img"
                style={{ backgroundImage: "url('https://img.toponad.com/posts/2022/10/08/027fac835ee60ef8b9f5d4276582fee1.png')" }}>
              </div>
              <div className="box-7__news__item__content">
                <h3 className="box-7__news__item__content__title transition3">重磅功能 | TopOn聚合实现一键创建同步广告源 ——已支持优量汇、Mintegral平台
                </h3>
                <p className="box-7__news__item__content__description"></p>
              </div>
              <div className="box-7__news__item__time">
                <div className="box-7__news__item__time__day">08</div>
                <div className="box-7__news__item__time__month">10</div>
              </div>
            </a>
            <a className="box-7__news__item" href="https://www.toponad.com/zh-cn/posts/225.html">
              <div className="box-7__news__item__img"
                style={{ backgroundImage: "url('https://img.toponad.com/posts/2022/09/23/e2f33a50a4a8aeaee5e18555ce7da356.jpg')" }}>
              </div>
              <div className="box-7__news__item__content">
                <h3 className="box-7__news__item__content__title transition3">活动报名 | 航海新时代，TopOn携手HUAWEI Ads破局游戏出海难题，探索增长变现痛点
                </h3>
                <p className="box-7__news__item__content__description">活动报名 | 航海新时代，TopOn携手HUAWEI Ads破局游戏...</p>
              </div>
              <div className="box-7__news__item__time">
                <div className="box-7__news__item__time__day">23</div>
                <div className="box-7__news__item__time__month">9</div>
              </div>
            </a>
            <a className="box-7__news__btn transition5" href="https://www.toponad.com/zh-cn/posts">查看更多</a>
          </div>
        </div>
      </div>
      <footer id="footer">
        <div className="qrcode-wrapper hidden">
          <img className="qrcode" src="https://www.toponad.com/image/topon_wechat_qrcode.jpg" alt="Wechat QRCode" />
        </div>
        <div className="footer-main">
          <div className="footer-main__graphics">
            <a className="logo"></a>
            <a className="footer-main__graphics__btn transition3" href="https://www.toponad.com/zh-cn/contact">咨询留言</a>
            <div className="footer-main__graphics__icons">
              <a className="footer-main__graphics__icons--facebook transition3" target="_blank" title="facebook"
                href="https://www.facebook.com/TopOn-2202518406639775/?ref=bookmarks" rel="noreferrer"></a>
              <div className="footer-main__graphics__icons--wechat transition3" title="wechat"></div>
              <a className="footer-main__graphics__icons--linkedin transition3" target="_blank" title="linkedin"
                href="https://www.linkedin.com/company/14823889/admin/" rel="noreferrer"></a>
              <a className="footer-main__graphics__icons--jianshu transition3" target="_blank" title="jianshu"
                href="https://www.jianshu.com/u/7576a64acf16" rel="noreferrer"></a>
              <a className="footer-main__graphics__icons--facebook--loader" hidden></a>
              <a className="footer-main__graphics__icons--wechat--loader" hidden></a>
              <a className="footer-main__graphics__icons--linkedin--loader" hidden></a>
              <a className="footer-main__graphics__icons--jianshu--loader" hidden></a>
            </div>
          </div>
          <div className="footer-main__split-line"></div>
          <div className="footer-main__about">
            <h2 id="about-topon">关于 TopOn</h2>
            <a className="footer-main__about__item" href="https://www.toponad.com/zh-cn/mediation">高效聚合</a>
            <a className="footer-main__about__item" href="https://www.toponad.com/zh-cn/solution/game">游戏变现</a>
            <a className="footer-main__about__item" href="https://www.toponad.com/zh-cn/solution/app">网服变现</a>
            <a className="footer-main__about__item" href="https://www.toponad.com/zh-cn/posts">活动资讯</a>
          </div>
          <div className="footer-main__about footer-main__contact">
            <h2>联系方式</h2>
            <div className="footer-main__about__item">
              <span>公司地址</span>
              <a className="footer-main__about__item__addr" href="https://j.map.baidu.com/00/h8t" target="_blank" rel="noreferrer">
                广州市天河区珠江新城珠光·新城国际中心A座1103号
              </a>
            </div>
            <div className="footer-main__about__item">
              <span>商务合作</span>
              <a href="mailto:business@toponad.com" target="_blank" rel="noreferrer">business@toponad.com</a>
            </div>
            <div className="footer-main__about__item">
              <span>市场合作</span>
              <a href="mailto:lawrence@toponad.com" target="_blank" rel="noreferrer">lawrence@toponad.com</a>
            </div>
            <div className="footer-main__about__item">
              <span>技术支持</span>
              <a href="mailto:support@toponad.com" target="_blank" rel="noreferrer">support@toponad.com</a>
            </div>
            <div className="footer-main__about__item">
              <span>QQ &amp; 微信</span>
              <a>188108875(Harry)</a>
            </div>
          </div>
        </div>
        <div className="footer-split-line"></div>
        <div className="footer-friend-links">
          <a className="footer-friend-links__title text-unselectable">友情链接</a>
          <a href="https://www.baijingapp.com/" target="_blank" rel="noreferrer">白鲸出海 </a>
          <a href="https://www.youxituoluo.com/" target="_blank" rel="noreferrer">游戏陀螺</a>
          <a href="http://www.nadianshi.com/" target="_blank" rel="noreferrer">手游那点事</a>
          <a href="http://www.youxichaguan.com/" target="_blank" rel="noreferrer">游戏茶馆</a>
          <a href="https://www.gameres.com/" target="_blank" rel="noreferrer">游资网</a>
          <a href="https://www.tec-do-service.com/uniagency" target="_blank" rel="noreferrer">钛动科技</a>
        </div>
        <div className="footer-copy-right">
          © 2022 Hafo Technology Limited. TopOn All Rights Reserved.
          <a href="https://www.toponad.com/zh-cn/privacy-policy">Privacy Policy</a>
          |
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">粤ICP备19006229号</a>
        </div>
      </footer>
    </>
  );
};

export default Pc;