/**
 * @author Pramod Turakane
 * @company Sai Systems
 * Education Page
 *
 * This is the education page and gets loaded '/education' route
 *
 */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card } from "antd";
import { getEduNewsData } from "./actions";
import "../../App.css";
import "./education.css";

const EducationPage = () => {
  // user to invoke redux actions
  const dispatch = useDispatch();

  //get data from redux store
  const newsData = useSelector((state) => state.educationReducer.newsData);

  useEffect(() => {
    //Invoke action to call API for saga
    dispatch(getEduNewsData());
  }, [dispatch]);
  return (
    <div className="page-body-height">
      <Row>        
        <Col xs={24} lg={16} className="edu-sect">
        <h1>Education Page</h1>
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
        <Col xs={24} lg={8}></Col>
      </Row>
    </div>
  );
};

export default EducationPage;
