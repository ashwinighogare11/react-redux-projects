/**
 * @author Pramod Turakane
 * @company Sai Systems
 * News Page
 *
 * This is the news page and gets loaded '/news' route
 *
 */

import React, { useEffect } from "react";
import { Row, Col, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getNewsData, getAutomotiveData } from "./actions";
import "../../App.css";
import "./news.css";

const NewsPage = () => {
  //use to invoke redux action 
  const dispatch = useDispatch();
  
  //get data from redux store
  const newsData = useSelector((state) => state.newsReducer.newsData);
  const automotiveData = useSelector(
    (state) => state.newsReducer.automotiveData
  );
  useEffect(() => {
    //Invoke redux action to fetch API data from saga
    dispatch(getNewsData());
    dispatch(getAutomotiveData());
  }, [dispatch]);

  return (
    <div>
      <Row>
        <Col xs={24} lg={15} className="news-sect"> 
          <h1>All News</h1>
          {newsData?.posts ? (
            newsData.posts.map((data) => {
              return (
                <Card
                  key={data.title}
                  style={{ marginBottom: "10px", marginLeft: "10px" }}
                  title={data.title}
                >
                  <div
                    className="post-content"
                    dangerouslySetInnerHTML={{ __html: data.content }}
                  ></div>
                </Card>
              );
            })
          ) : (
            <></>
          )}
        </Col>
        <Col xs={24} lg={1}></Col>
        <Col xs={24} lg={8} className="auto-sect">
          <h3>Automotive</h3>
          {automotiveData?.posts ? (
            automotiveData.posts.map((data) => {
              return (
                <Card
                  headStyle={{ fontWeight: "800" }}
                  bodyStyle={{
                    height: "300px",
                    overflow: "auto",
                    width: "500px",
                  }}
                  bordered={false}
                  key={data.title}
                  style={{ marginBottom: "10px" }}
                  title={data.title}
                >
                  <div
                    className="post-content"
                    dangerouslySetInnerHTML={{ __html: data.content }}
                  ></div>
                </Card>
              );
            })
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default NewsPage;
