import React from 'react' 
import { Switch, Route } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import MenPage from './Pages/Men/MenPage'
import ProductPage from './Pages/ProductPage/ProductPage'
import WomenPage from './Pages/Women/WomenPage'


function MainRouter(){
    return(
        <Switch>
            <Route exact path='/'>{HomePage}</Route>
            <Route exact path ='/Home'>{HomePage}</Route>
            <Route exact path ='/men'>{MenPage}</Route>
            <Route exact path='/women'>{WomenPage}</Route>
            <Route  path="/products/:id">
                <ProductPage />
            </Route>
        </Switch>
    )
}
export default MainRouter