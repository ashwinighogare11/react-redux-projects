import React from "react";
import { Col, Row } from "antd";
import ContactCard from '../contactbanner/index.js';
import "./pagefooter.css";
import footerimg from "../../images/footerImg.png";
import facebookimg from "../../images/facebook 1.svg";
import linkedinimg from "../../images/linkedin 1.svg";
import twitterimg from "../../images/twitter 1.svg";
import youtubeimg from "../../images/youtube (1) 1.svg";
import instagramimg from "../../images/instagram 1.svg";
import useWindowDimensions from "./getWindowDimensions";

const PageFooter = () => {
  const { width } = useWindowDimensions();

  const footerMenu = [
    {
      title: "News",
      data: [
        "News by Multimedia",
        "News by Industry",
        "News by Subject",
        "News by Language",
        "Tradeshows & Events",
      ],
    },
    {
      title: "Service",
      data: [
        "Public Relations",
        "Investor Relations",
        "Distribution & Analytics",
        "Media & Journalist Tool",
      ],
    },
    {
      title: "Resources",
      data: [
        "Whitepapers & Distribution Lists",
        "Customer testimonials",
        "Sample Press Release",
        "Find Your News Online",
        "Find Your News Online",
        "Disclosure Resources",
      ],
    },
    {
      title: "Blog",
      data: ["Contact", "Login", "Sign Up", "Request Demo"],
    },
    {
      title: "All",
      data: [
        "English",
        "Deutsch",
        "Español",
        "Français",
        "Italiano",
        "简体中文",
        "繁體中文",
        "日本語",
      ],
    },
  ];
  return (
    <>
   <ContactCard />

      <div className="footer">
        <Row gutter={18} className="column-layout">
          {footerMenu.map((footer, i) => (
            <Col
              
              sm={i === 4 ? 24 : 12}
              md={i === 4 ? 24 : 12}
              lg={width < 1024 ? i === 4 ? 24 : 6 : 4}
              xl={5}
              xxl={4}
              key={footer}
            >
              {width >= 360 && width <= 768 && i === 4 ? (
                <div className="footer-alt-title xs-footer-title">
                  {footer.title}<br></br>
                  <Row>
                    {footer.data.map((item, ikey) => (
                      <Col key={item} sm={8} className="footer-alt-link xs-alt-link">
                        {item}
                      </Col>
                    ))}
                  </Row>
                </div>
              ) : width <= 1023 && width >= 768 && i === 4 ? (
                <div className="footer-alt-title">
                  {/* three col */}
                  <Row gutter={16}>
                    {footer.data.map((item, ikey) => (
                      <Col key={item} className="footer-alt-link">
                        {ikey === 0 ? footer.title : ''} &nbsp;&nbsp;{item}
                      </Col>
                      // <div
                      //   className={
                      //     i === 3
                      //       ? "footer-link"
                      //       : i === 4
                      //         ? "footer-alt-link"
                      //         : "footer-items"
                      //   }
                      //   key={item}
                      // >
                      //   {item}
                      // </div>
                    ))}
                  </Row>
                </div>
              ) : width <= 1920 && width >1023 && i === 4 ? (
                <div className={i === 4 ? "footer-alt-title" : "footer-title"}>
                  <div>
                    {footer.title}
                    {footer.data.map((item, ikey) => (
                      <div
                        className={
                          i === 3
                            ? "footer-link"
                            : i === 4
                              ? "footer-alt-link xl-alt-link "
                              : "footer-items"
                        }
                        key={item}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className={i === 4 ? "footer-alt-title" : "footer-title"}>
                  <div>
                    {footer.title}
                    {footer.data.map((item, ikey) => (
                      <div
                        className={
                          i === 3
                            ? "footer-link"
                            : i === 4
                              ? "footer-alt-link xxl-alt-link "
                              : "footer-items"  
                        }
                        key={item}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Col>
          ))}
        </Row>
      </div>
      <div className="horizontal-line"></div>
      <div className="next-footer-container">
        <Row gutter={14}>
          <Col xl={6} lg={8} md={12} sm={24}>

            <div className="logo-footer">
              <img src={footerimg} alt="BW" height={61} />
              <div className="logo-text" >
                Business Wire connects organizations and their audiences with
                the most reliable news distribution network around.
              </div>
            </div>
          </Col>
          <Col xl={12} lg={14} md={12} sm={18} className={"footer-link-cointainer"}>
            <Row gutter={3}>
              <Col xl={{ span: 4, order: 3 }} lg={{ span: 4, order: 3 }} md={8} sm={12}>
                <div className="footer-nav">Site Map</div>
              </Col>
              <Col xl={{ span: 6, order: 4 }} lg={{ span: 6, order: 4 }} md={8} sm={12}>
                <div className="footer-nav">Terms of Use</div>
              </Col>
              <Col xl={{ span: 6, order: 2 }} lg={{ span: 6, order: 2 }} md={8} sm={12}>
                <div className="footer-nav">Privacy Policy</div>
              </Col>

              <Col xl={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }} md={8} sm={12}>
                <div className="footer-nav">Careers</div>
              </Col>
              <Col xl={{ span: 4, order: 0 }} lg={{ span: 4, order: 0 }} md={8} sm={12}>
                <div className="footer-nav">About Us</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="copyright">
        <div className="copyright-content">
          <Row >
            <Col style={{ width: 167 }}/*xl={16}*/ xl={{span:16,offset:2}} lg={{span:16,offset:2}} md={{span:13,offset:2}} sm={{span:11,offset:2}}>
              &copy; 2022 Business Wire, Inc.
            </Col>
            <Col /*xl={8} */ xl={{span:5,offset:1}} lg={{span:4,offset:1}} md={{span:7,offset:1}} sm={{span:9,offset:1}}>
              <div className="social">
                <Row >
                  <Col className="fb" style={{ width: 30 }} >
                    <img src={facebookimg} alt="BW" height={19} width={19} />
                  </Col>
                  <Col className="linked" style={{ width: 30 }} >
                    <img src={linkedinimg} alt="BW" height={20} width={20} />
                  </Col>
                  <Col className="twit" style={{ width: 30 }} >
                    <img src={twitterimg} alt="BW" height={20} width={20} />
                  </Col>
                  <Col className="yt" style={{ width: 30 }}>
                    <img src={youtubeimg} alt="BW" height={23} width={23} />
                  </Col>
                  <Col className="instra" style={{ width: 30 }}>
                    <img src={instagramimg} alt="BW" height={18} width={18} />
                  </Col>
                </Row>
              </div>
            </Col>

          </Row>

        </div>
      </div>
    </>
  );
};
export default PageFooter;
