import React from 'react'
import { Card } from 'react-bootstrap'
import './HomeCard.css'

function HomeCard() {
    return (
        <div>
            <Card className="Card">
                <Card.Body>
                    <Card.Title>Clothes Store</Card.Title>
                    <Card.Text>
                    Welcome To the the #N°1 Selling Clothes store in Tunisia.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
export default HomeCard