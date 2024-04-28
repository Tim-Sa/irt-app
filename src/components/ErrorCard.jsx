import React from 'react';
import { Col, Row, Statistic } from 'antd';

const ErrorCard = ({ error }) => {

    const modelError = error;

    return  ( 
    <Row gutter={35}>
        <Col span={30}>
            <Statistic title="Rasch model error" value={modelError} precision={4}/>
        </Col>
  </Row>
);
};


export default ErrorCard;