/**
 * @author Pramod Turakane
 * @company Sai Systems
 * Service Page
 *
 * This is the dashboard page and gets loaded '/home' route
 *
 */

import React from "react";
import { Row, Col } from "antd";
import BigGridFeature from "../../components/biggridfeature";
import FeatureNewsCard from "../../components/featurenewscard";
import FeatureNews from "../../components/featurenews";
import { latestNews, newsData, trendingNews } from "./data";
import "../../App.css";
import "./dashboard.css";

const DashboardPage = () => {
  return (
    <div className="dashboard-sect">
      <Row>
        <Col
          sm={{ span: 23, order: 1 }}
          md={{ span: 1, order: 1 }}
          lg={{ span: 1, order: 1 }}
          xl={{ span: 2, order: 1 }}
        ></Col>
        <Col
          sm={{ span: 23, order: 3 }}
          md={{ span: 8, order: 2 }}
          lg={{ span: 6, order: 2 }}
          xl={{ span: 5, order: 2 }}
          className="div-margin"
        >
          <div>
            <h2 className="left-text-align heading-bottom-margin news-title">
              Latest News
            </h2>
            <div className="left-text-align heading-desc">
              Stay on top of industry news
            </div>
          </div>
          {latestNews ? (
            latestNews.map((data) => {
              return (
                <FeatureNewsCard
                  key={data.title}
                  newsDate={data.newsDate}
                  newsTime={data.newsTime}
                  title={data.title}
                  description={data.description}
                  titleLogo={data.logo}
                ></FeatureNewsCard>
              );
            })
          ) : (
            <></>
          )}
        </Col>
        <Col
          sm={{ span: 23, order: 2 }}
          md={{ span: 14, order: 3 }}
          lg={{ span: 10, order: 3 }}
          xl={{ span: 10, order: 3 }}
          className="div-margin"
        >
          <div>
            <h2 className="left-text-align heading-bottom-margin news-title">
              Latest News with Multimedia{" "}
            </h2>
            <div className="left-text-align heading-desc">
              Stay on top of industry trends with our <b>latest News Resources</b>
            </div>
          </div>
          {newsData ? (
            newsData.map((data) => {
              return (
                <BigGridFeature
                  key={data.metaTitle}
                  newsDate={data.newsDate}
                  newsTime={data.newsTime}
                  metaTitle={data.metaTitle}
                  metaDescription={data.metaDescription}
                  coverImage={data.coverImage}
                  metaLogo={data.metaLogo}
                ></BigGridFeature>
              );
            })
          ) : (
            <></>
          )}
        </Col>
        <Col
          sm={{ span: 23, order: 4 }}
          md={{ span: 23, order: 4 }}
          lg={{ span: 5, order: 4 }}
          xl={{ span: 5, order: 4 }}
          className="div-margin"
        >
          <Row>
            <Col
              sm={24}
              md={{ span: 23, offset: 1 }}
              lg={{ span: 23, offset: 1 }}
              xl={24}
            >
              <h2 className="left-text-align heading-bottom-margin news-title">
                Trending News 
              </h2>
            </Col>
            <Col
              sm={24}
              md={{ span: 23, offset: 1 }}
              lg={{ span: 23, offset: 1 }}
              xl={24}
            >
              <div className="left-text-align heading-desc">
                Stay on top of industry trends news
              </div>
            </Col>
            {trendingNews ? (
              trendingNews.map((data) => {
                return (
                  <>
                    <Col sm={1} md={1} lg={1} xl={24}></Col>
                    <Col sm={24} md={{ span: 11 }} lg={{ span: 24 }} xl={24}>
                      <FeatureNews
                        newsDate={data.newsDate}
                        newsTime={data.newsTime}
                        metaTitle={data.metaTitle}
                        coverImage={data.coverImage}
                        metaLogo={data.metaLogo}
                        metaDescription={data.metaDescription}
                      ></FeatureNews>
                    </Col>
                  </>
                );
              })
            ) : (
              <></>
            )}
          </Row>
        </Col>
        <Col
          sm={{ span: 23, order: 5 }}
          md={{ span: 1, order: 5 }}
          lg={{ span: 2, order: 5 }}
          xl={{ span: 2, order: 5 }}
        ></Col>
      </Row>
      <Row className="more-div" justify={"center"} gutter={[8, 32]}>
        <Col>View More News</Col>
      </Row>
    </div>
  );
};

export default DashboardPage;
