/**
 * @author Pramod Turakane
 * @company Sai Systems
 * Header Page
 *
 * This is the header slider component for showing images and its description
 *
 */

import React from "react";
import { Carousel, Row, Col, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./heroslider.css";
import { updateTextLenght } from "../../utils/helper";
import { carouselData } from './data';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "white",
        fontSize: "24px",
        lineHeight: "1.5715",
      }}
      onClick={onClick}
    >
      {" "}
      <RightOutlined className={"arrow-icon"} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "white",
        fontSize: "24px",
        lineHeight: "1.5715",
      }}
      onClick={onClick}
    >
      <LeftOutlined className={"arrow-icon"} />
    </div>
  );
};

const HeroSlider = (props) => {
  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  
  return (
    <div className="hero-slider">
      <Carousel dots={{ className: "slider-dots" }} arrows {...settings}>
        {carouselData ? carouselData.map((data) => {
          return (
          <div className="slider-div" key={data.title}>
            <Row>
              <Col sm={24} md={2} lg={2} xl={2}></Col>
              <Col sm={24} md={8} lg={9} xl={12}></Col>
              <Col sm={24} md={12} lg={11} xl={8}>
                <Row className="slider-content">
                  <Col className="slider-title" span={24}>
                    {data.title ? updateTextLenght(data.title, 45) : ''}
                  </Col>
                  <Col className="slider-desc" span={24}>
                    {data.description ? updateTextLenght(data.description, 175) :''}
                  </Col>
                  <Col span={24}>
                    <Button className="slider-btn">{data.btnText}</Button>{" "}
                  </Col>
                </Row>
              </Col>
              <Col sm={24} md={2} lg={2} xl={2}></Col>
            </Row>
          </div>)
        }) : <></>}
      </Carousel>
    </div>
  );
};

export default HeroSlider;
