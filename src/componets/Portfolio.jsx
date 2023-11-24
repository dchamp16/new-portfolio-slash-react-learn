import React from 'react';
import { Card, Col, Row } from 'antd';

function Portfolio(props) {
    return (
        <>
        <div className='portfolio'>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </Col>
            </Row>
        </div>
        </>
    );
}

export default Portfolio;