import React from 'react'
import { Card } from 'react-bootstrap';
import './Photo.css'

function Photo(props) {
    return (
        <Card>
            <Card.Body>
                <Card.Text>
                    {props.title}</Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={props.image} className="photo"/>
        </Card>
    )
}
export default Photo