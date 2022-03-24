import React, {createContext, useState} from 'react'
import axios from "axios";

export const CustomContext = createContext();

export const Context = (props) => {

    const [shoes, setShoes] = useState([]);
    const [cart, setCart] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const getAllShoes = () => {
        axios('http://localhost:8080/sneakers')
            .then(({data}) => setShoes(data))
            .catch((err)  => console.log('Произошла ошибка') )
    };

    const getFavorites = (id) => {
        let res = shoes.filter(el => el.id === id);
        let title = res[0].title,
            price = res[0].price,
            imageUrl = res[0].imageUrl;
        axios.post('http://localhost:8080/favorites', {
            title,
            price,
            imageUrl
        })
    };

    const addShoesInCart = (id) => {
        let idx = shoes.findIndex((item) => item.id === id);
        setCart([...cart, shoes[idx]])
    };

    const deleteShoesInCart = (id) => {
        setCart(cart.filter((item) => {
            return item.id !== id
        }))
    };



   const value = {
       shoes,
       setShoes,
       getAllShoes,
       cart,
       setCart,
       addShoesInCart,
       deleteShoesInCart,
       getFavorites,
       favorites,
       setFavorites

   };

    return <CustomContext.Provider value={value}>
              {props.children}
    </CustomContext.Provider>
};