/**
 * @author Pramod Turakane
 * @company Sai Systems
 * Featured News
 *
 * This is the featured news component
 *
 */

import React from "react";
import { Card, Row, Col } from "antd";
import Icon, { ShareAltOutlined } from "@ant-design/icons";
import { updateTextLenght } from "../../utils/helper";
import "./featurenewscard.css";

const FeatureNewsCard = (props) => {
  return (
    <>
      <Card
        className="news-card feature-news-card"
        title={
          props.title ? (
            <div className="align-text-left">
              {props.titleLogo ? (
                <div className="news-title-logo">
                  <img
                    width={'100%'}
                    src={props.titleLogo}
                    alt={"123"}
                  />{" "}
                </div>
              ) : (
                <></>
              )}{" "}
              {updateTextLenght(props.title, 75)}
            </div>
          ) : (
            ""
          )
        }
        bordered={false}
        headStyle={{ whiteSpace: "normal" }}
        hoverable={true}
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
                    className="share-icon"
                    component={ShareAltOutlined}
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
          {props.description ? updateTextLenght(props.description, 110) : <></>}
        </div>
      </Card>
    </>
  );
};
export default FeatureNewsCard;
