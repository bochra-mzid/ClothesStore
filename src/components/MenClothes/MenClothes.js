import React, { useState } from 'react'
import { CardColumns, Spinner, Container } from 'react-bootstrap'
import MenList from '../../components/MenList/MenList'
import Footer from '../Footer/Footer'

function MenClothes() {
    const [loading, setLoading] = useState(true)
    const [Men, setMen] = useState([])
    fetch('https://fakestoreapi.com/products/category/men%20clothing')
        .then(res => res.json())
        .then(data => {
            setMen(data)
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
                    <MenList Men={Men} />
                </CardColumns>
            </Container>
            <Footer/>
        </div>
    )
}
export default MenClothes