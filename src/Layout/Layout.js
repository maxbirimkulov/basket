import React, {useState} from 'react';
import Header from "./Header/Header";
import {Routes, Route} from 'react-router-dom'
import Home from "../pages/Home/Home";
import Buy from "../pages/Buy/Buy";
import Favourites from "../pages/Favourites/Favourites";
import styles from './layout.module.css'
import Cart from "./Cart/Cart";

const Layout = () => {

    const [isCart, setIsCart] = useState(false);

    return (
        <div className={styles.layout}>
           <Header isCart={isCart} setIsCart={setIsCart}/>
           <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/buy' element={<Buy/>}/>
               <Route path='/favourites' element={<Favourites/>}/>
           </Routes>
            <Cart isCart={isCart} setIsCart={setIsCart}/>
        </div>
    );
};

export default Layout;