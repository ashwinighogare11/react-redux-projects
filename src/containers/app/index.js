/**
 * @author Pramod Turakane
 * @company Sai Systems
 * Landing Page
 *
 * This is the landing page when webapp gets loaded '/' route
 *
 */

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../home";
import EducationPage from "../education";
import NewsPage from "../news";
import ServicePage from "../service";
import NotFound from "../NotFound";
import { Layout, ConfigProvider } from "antd";
import PageHeaderComponent from "../../components/pageheader";
import AboutUsPage from "../aboutus";
import PageFooter from "../../components/pagefooter";
import Login from "../login/login";
import DashboardPage from "../dashboard";
import Dialog from "../DialogBox";
import HeroSlider from "../../components/heroslider";
import { I18Provider, LOCALES } from "../../i18n";
import "../../App.css";
import "./apppage.css";

const { Header, Footer, Content } = Layout;
const App = () => {  
  const [lang, setLang] = useState(LOCALES.ENGLISH);
  useEffect(() => {
    const interval = setInterval(() => {
      const expIn = localStorage.getItem("exp");
      if (expIn !== null) {
        const expTime = new Date(expIn * 1000);
        const currentTime = new Date();

        if (expTime < currentTime) {
          window.confirm("Session Expired!");
          localStorage.clear();
          sessionStorage.clear();
          window.location.href = "/";
        }
      }
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const onHandleChangeEvt = (evt) => {
    setLang(evt);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          screenSM: 360,
          screenSMMin: 360,
          screenSMMax: 768,
          screenMD: 768,
          screenMDMin: 768,
          screenMDMax: 1024,
          screenLG: 1024,
          screenLGMin: 1024,
          screenLGMax: 1920,
          screenXLMin: 1920,
          screenXLMax: 8000,
          screenXL: 1920,        
        }
      }}
    >
      <div className="App app-page">
        <I18Provider locale={lang}>
          <BrowserRouter>
            <Layout>
              <Header>
                <PageHeaderComponent handleChange={onHandleChangeEvt} />
                <HeroSlider />
              </Header>
              <Content>
                <Routes>
                  {/* <Route path="/" element={<HomePage />} /> */}
                  <Route path="/" element={<DashboardPage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/education" element={<EducationPage />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/services" element={<ServicePage />} />
                  <Route path="/aboutus" element={<AboutUsPage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/dialog" element={<Dialog />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Content>
              <Footer>
                <PageFooter />
              </Footer>
            </Layout>
          </BrowserRouter>
        </I18Provider>
      </div>
    </ConfigProvider>
  );
};

export default App;
