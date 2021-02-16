import React,{useState} from 'react' 
import {useParams} from 'react-router-dom'
import {Button, Spinner} from 'react-bootstrap'
import './ProductPage.css'

function Product(){
    const [loading,setLoading] = useState(true)
    const [product,setProduct]=useState({})
    const {id}=useParams()
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(data=> {
        setProduct(data)
        setLoading(false)})
    if(loading){
        return(
            <Spinner animation="border" variant="info" />
        )
    }
    return(
        <div className="product">
            <img src={product.image} className="image" ></img>
            <div >
                <h1>{product.title}</h1>
                <div>{product.description}</div>
                <div className="price">Price {product.price}</div>
                <Button variant="info" size="lg">Add to cart</Button>
            </div>  
        </div>
    )
}
export default Product