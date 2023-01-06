/**
 * @author Pramod Turakane
 * @company Sai Systems
 * Home Page
 *
 * This is the Home page and gets loaded '/home' route
 *
 */

import React, { useEffect } from "react";
import { Row, Col, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getPostsData, getMultimediaData } from "./actions";
import "../../App.css";
import "./home.css";

const HomePage = () => {
  //use to invoke redux action
  const dispatch = useDispatch();

  //get data from redux store
  const postsData = useSelector((state) => state.homeReducer.postsData);
  const multimediaData = useSelector(
    (state) => state.homeReducer.multimediaData
  );

  useEffect(() => {
    //Invoke redux action to call API from saga
    dispatch(getPostsData());
    dispatch(getMultimediaData());
  }, [dispatch]);
  return (
    <div className="container">
      <Row>
        <Col xs={24} lg={15} className="post-sect">
          <h1>Posts</h1>
          {postsData?.posts ? (
            postsData.posts.map((data) => {
              return (
                <Card
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
        <Col xs={24} lg={1}></Col>
        <Col xs={24} lg={8} className="news-med-sect">
          <h3>News and Multimedia</h3>
          {multimediaData?.posts ? (
            multimediaData.posts.map((data) => {
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

export default HomePage;
