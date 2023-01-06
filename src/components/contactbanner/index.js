import React from 'react'
import { Card, Button, Row, Col } from "antd";
import './contactbanner.css';



const ContactCard = (props) => {

    return (
        <div>

            <div className="contact-banner">
                <div className="contact-banner-align">
                    <Row>
                        <Col sm={24} md={24} lg={24} xl={24}>
                            <Row>
                                <Card className="contact-banner-style" bordered={true} style={{ shadowColor: 'white', shadowOffset: { width: 0, height: 30 } }}>
                                    <div className="contact-banner-content">

                                        <Col >
                                            <Row>
                                            {/* title={
                                                  props.title ? ( */}
                                                <Col sm={{ span: 24 }} md={{ span: 24}} lg={{ span: 12 }} xl={{ span: 10 }}>
                                                    <div className="contact-banner-text1"> Interested in Our Product, Services & Pricing Information?</div>
                                                </Col>
                                                {/* //   ):(<></>)} */}
                                                   {/* {" "} */}
                                                     {/* {updateTextLenght(props.title, 75)} */}
{/* 
                                                 <Col sm={{ span: 24 }} md={{ span: 13}} lg={{ span: 12 }} xl={{ span: 10}}> */}
{/*                                                    
                                              {/*  description={   props.Description
                                              ?( */}
                                                        <Col sm={{ span: 24 }} md={{ span: 24}} lg={{ span: 12}} xl={{ span: 10}}> 
                                                        <div className="contact-banner-text2">
                                                        <p> Contact a <b>Business Wire </b>account representative to set up an account or to speak to us. It all starts by starting the form below.</p>
                                                  
                                                    {/* updateTextLenght(props.metaDescription, 200)
                                                     */}
                                                    <Button type="primary" shape="round" className="btn-base" >
                                                            <div className="btn-base-text">Contact Us</div>
                                                        </Button>
                                                        </div>
                                                        </Col>
                                                            {/* // ):(<></>)} */}
                                                                                                          
                                                        
                                                   
                                               {/* </Col> */}
                                            </Row>
                                        </Col>
                                    </div>
                                </Card>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default ContactCard


