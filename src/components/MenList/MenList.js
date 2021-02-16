import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import './MenList.css'
import { Link } from 'react-router-dom'

function MenList(props) {
    return (
        <div>
            {(props.Men).map((item) => {
                return (
                    <Col md="150px">
                        <Card >
                            <Card.Img variant="top" src={item.image} className="item" />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Card.Text className="Price">Price: {item.price}</Card.Text>
                                <Button variant="info">
                                    <Link to={`/products/${item.id}`}>more details</Link></Button>
                                <Button variant="info">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </div>
    )
}
export default MenList