/**
 * @author Pramod Turakane
 * @company Sai Systems
 * News Card
 *
 * This is news card big grid variant
 *
 */

import React from "react";
import { Card, Row, Col } from "antd";
import Icon, { ShareAltOutlined } from "@ant-design/icons";
import { updateTextLenght } from "../../utils/helper";
import "./biggridfeature.css";

const BigGridFeature = (props) => {
  return (
    <>
      <Card
        className="news-card big-news-grid"
        title={
          props.title ? (
            <div className="align-text-left">
              {props.titleLogo ? (
                <div className="news-title-logo">
                  <img width={"100%"} src={props.titleLogo} alt={"123"} />{" "}
                </div>
              ) : (
                <></>
              )}{" "}
              {updateTextLenght(props.title, 150)}
            </div>
          ) : (
            ""
          )
        }
        bordered={false}
        headStyle={{ whiteSpace: "normal" }}
        hoverable={true}
        cover={
          props.coverImage ? (
            <img
              alt={props.coverImagetext ? props.coverImagetext : ""}
              src={props.coverImage}
            />
          ) : (
            <></>
          )
        }
        actions={[
          props.newsDate ? (
            <Row className="left-text-align">
              <Col
                offset={1}
                sm={20}
                md={20}
                lg={20}
                xl={20}
                className="date-sect"
              >{`${props.newsDate}  |  ${props.newsTime}`}</Col>

              <Col sm={4} md={4} lg={4} xl={4} className="align-text-end">
                <span>
                  <Icon
                    component={ShareAltOutlined}
                    className="share-icon"
                  ></Icon>
                </span>
              </Col>
            </Row>
          ) : (
            <></>
          ),
        ]}
      >
        <div className="align-text-left">
          {props.description ? updateTextLenght(props.description, 225) : <></>}
          {props.metaTitle ? (
            <Card.Meta
              title={
                <div className="">
                  {props.metaLogo ? (
                    <div className="news-title-logo">
                    <img
                      width={'100%'}                     
                      src={props.metaLogo}
                      alt={"223232"}
                    ></img>
                    </div>
                  ) : (
                    <></>
                  )}
                  {updateTextLenght(props.metaTitle, 150)}
                </div>
              }
              description={updateTextLenght(props.metaDescription, 225)}
            />
          ) : (
            <></>
          )}
        </div>
      </Card>
    </>
  );
};
export default BigGridFeature;
