/**
 * @author Pramod Turakane
 * @company Sai Systems
 * Header Page
 *
 * This is the header page consist of menu's for navigating to different pages
 *
 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Input, Col, Row, Button, Select } from "antd";
import { FormattedMessage } from "react-intl";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import BWLogo from "../../images/BW_Logo.svg";
import DownArrow from '../../images/header/down_arrow.svg';
import "./pageheader.css";

//Format items data for menu and submenu in header section
const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

//List of header menu and submenu
const items = [
  getItem(<><FormattedMessage id="menu-key-news" /> <img src={DownArrow} className="hide-arrow-element" alt={'1234'} /></>, "news", null, [
    getItem(<FormattedMessage id="menu-key-sub-anews" />, "4"),
    getItem(<FormattedMessage id="menu-key-sub-mnews" />, "5"),
    getItem(<FormattedMessage id="menu-key-sub-inews" />, "6"),
    getItem(<FormattedMessage id="menu-key-sub-snews" />, "7"),
    getItem(<FormattedMessage id="menu-key-sub-lnews" />, "8"),
    getItem(<FormattedMessage id="menu-key-sub-tae" />, "9"),
  ]),
  getItem(<><FormattedMessage id="menu-key-services" /> <img src={DownArrow} className="hide-arrow-element" alt={'1234'} /></>, "services", null, [
    getItem(<FormattedMessage id="menu-key-sub-services" />, "3"),
  ]),
  getItem(<><FormattedMessage id="menu-ekey-sub-blg" /> <img src={DownArrow} className="hide-arrow-element" alt={'1234'} /></>, "home", null, [
    getItem(<FormattedMessage id="menu-key-sub-home" />, "1"),
    getItem(<FormattedMessage id="menu-key-sub-press" />, "2"),
  ]),

  getItem(<><FormattedMessage id="menu-key-resources" />  <img src={DownArrow} className="hide-arrow-element" alt={'1234'} /></>, "education", null, [
    getItem(<FormattedMessage id="menu-ekey-sub-ovr" />, "10"),
    getItem(<FormattedMessage id="menu-ekey-sub-blg" />, "11"),
    getItem(<FormattedMessage id="menu-ekey-sub-dam" />, "12"),
    getItem(<FormattedMessage id="menu-ekey-sub-fno" />, "15"),
    getItem(<FormattedMessage id="menu-ekey-sub-dsr" />, "16"),
  ]),
  getItem(<><FormattedMessage id="menu-key-contact" /> <img src={DownArrow} className="hide-arrow-element" alt={'1234'} /></>, "aboutus", null, [
    getItem(<FormattedMessage id="menu-aukey-sub-ovr" />, "17"),
    getItem(<FormattedMessage id="menu-aukey-sub-bam" />, "18"),
    getItem(<FormattedMessage id="menu-aukey-sub-cnt" />, "19"),
    getItem(<FormattedMessage id="menu-aukey-sub-crr" />, "20"),
    getItem(<FormattedMessage id="menu-aukey-sub-bwn" />, "21"),
    getItem(<FormattedMessage id="menu-aukey-sub-bwe" />, "22"),
  ]),
];

const PageHeaderComponent = (props) => {
  const [current, setCurrent] = useState("");
  const options = [
    { value: "en-us", label: "EN" },
    { value: "de-de", label: "GE" },
    { value: "fr-ca", label: "FR" },
  ];
  const navigate = useNavigate();
  const onClick = (e) => {
    navigate(e.keyPath[1]);
    setCurrent(e.key);
  };

  const handleChange = (evt) => {
    props.handleChange(evt);
  };

  //navigate to login page
  const onLogin = () => {
    navigate("/login");
  };

  const onLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="header-menu bw-header">
      <Row>
        <Col
          sm={{ span: 1, order: 1 }}
          md={{ span: 1, order: 1 }}
          lg={{ span: 1, order: 1 }}
          xl={{ span: 2, order: 1 }}
        ></Col>
        <Col
          className="left-align"
          sm={{ span: 9, order: 2 }}
          md={{ span: 12, order: 2 }}
          lg={{ span: 5, order: 2 }}
          xl={{ span: 4, order: 2 }}
        >
          <img
            onClick={onLogoClick}
            className="bw-logo"
            src={BWLogo}
            alt="Bw logo"
          />
        </Col>
        <Col
          sm={{ span: 2, order: 7 }}
          md={{ span: 1, order: 6 }}
          lg={{ span: 12, order: 3 }}
          xl={{ span: 11, order: 3 }}
        >
          <div className="header-arrow">
            <Menu
              onClick={onClick}             
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
              triggerSubMenuAction={"click"}
              overflowedIndicator={<MenuOutlined />}
            />
          </div>
        </Col>
        <Col
          className="hide-element"
          sm={{ span: 5, order: 3 }}
          md={{ span: 5, order: 3 }}
          lg={{ span: 1, order: 4 }}
          xl={{ span: 3, order: 4 }}
        >
          <Input
            className="header-search"
            placeholder="Search"
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col
          className="hide-element hide-lang-element"
          sm={{ span: 1, order: 4 }}
          md={{ span: 1, order: 4 }}
          lg={{ span: 1, order: 5 }}
          xl={{ span: 1, order: 5 }}
        >
          <Select
            className="header-select"
            defaultValue="en-us"
            onChange={handleChange}
            options={options}
          />
        </Col>
        <Col
          className="hide-element btn-sect"
          sm={{ span: 5, order: 5 }}
          md={{ span: 5, order: 5 }}
          lg={{ span: 3, order: 6 }}
          xl={{ span: 2, order: 6 }}
        >
          <Button className="header-btn" type="text" onClick={onLogin}>
            <FormattedMessage id="menu-btn-login" />
          </Button>
          <hr className="hr-line" />
          <Button className="header-btn1" type="text">
            <FormattedMessage id="menu-btn-signup" />
          </Button>
        </Col>
       
          
        
        <Col
          sm={{ span: 1, order: 6 }}
          md={{ span: 1, order: 7 }}
          lg={{ span: 1, order: 7 }}
          xl={{ span: 1, order: 7 }}
        >
          <div className="show-search">
            <SearchOutlined />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PageHeaderComponent;
