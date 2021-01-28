import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';

function App () {
    // get cart from redux store using useSelector
    const cart = useSelector(state => state.cart);
    // decontructure cart to get cartItems
    const {cartItems} = cart;
    //get userInfo from redux store
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    // console.log(userInfo);
    return (
        <BrowserRouter>
            <div className='grid-container'>
                <header className='row'>
                    <div>
                        <Link className='brand' to='/'>
							Zankoo
                        </Link>
                    </div>
                    <div>
                        <Link to='/cart'>
                            Cart
                            {
                                cartItems.length > 0 && (
                                    <span className='badge'>{ cartItems.length }</span>
                                )
                            }  
                        </Link>
                        {
                            userInfo 
                                ? <Link to="#">{userInfo.name} </Link> 
                                : <Link to='/signin'>Sign In</Link>
                        }
                      
                    </div>
                </header>
                <main>                  
                    <Route path='/cart/:id?' component={CartScreen} />
                    <Route path='/product/:id' component={ProductScreen} />
                    <Route path='/signin' component={SigninScreen} />
                    <Route exact path='/' component={HomeScreen} />
                </main>
                <footer className='row center'>All right reserved</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
