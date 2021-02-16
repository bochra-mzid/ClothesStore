import React, { useState } from 'react'
import { CardColumns, Spinner, Container } from 'react-bootstrap'
import WomenList from '../../components/WomenList/WomenList'
import Footer from '../Footer/Footer'

function WomenClothes() {
    const [loading, setLoading] = useState(true)
    const [Women, setWomen] = useState([])
    fetch('https://fakestoreapi.com/products/category/women%20clothing')
        .then(res => res.json())
        .then(data => {
            setWomen(data)
            setLoading(false)
        })

    if (loading) {
        return (
            <Spinner animation="border" variant="info" />
        )
    }
    return (
        <div>
            <Container >
                <CardColumns >
                    <WomenList Women={Women} />
                </CardColumns>
            </Container>
            <Footer/>
        </div>
    )
}
export default WomenClothes