import React, {useContext, useEffect} from 'react';
import {CustomContext} from "../../context";
import axios from "axios";
import styles from "../Favourites/favourites.module.css";
import {BsHeart} from "react-icons/bs";
import {Link} from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'

const Favourites = () => {

    const {favorites, setFavorites, cart, deleteShoesInCart, addShoesInCart, getFavorites} = useContext(CustomContext);

    useEffect(() => {
       axios.get('http://localhost:8080/favorites')
           .then(({data}) => setFavorites(data))
           .catch((err) => console.log('Error'))
    }, []);

    return (
        <section>
            <div className={styles.back}>
                <Link to='/' style={{color: '#C8C8C8'}}>
                    <div className={styles.arrow}><AiOutlineArrowLeft/></div>
                </Link>
                <h2 className={styles.title}>Мои избранные</h2>
            </div>

            <div className={styles.row}>
            {
                favorites.map(item => (

                            <div className={styles.card} key={item.id}>
                                <button className={styles.cardLike} type='button' onClick={() => getFavorites(item.id)}><BsHeart/></button>
                                <img className={styles.cardImg}  src={item.imageUrl} alt={item.title}/>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <div className={styles.cardFooter}>
                                    <div className={styles.cardPrice}>
                                        <h4 className={styles.cardPriceTitle}>Цена :</h4>
                                        <p className={styles.cardPriceNum}>{item.price.toString().slice(0,-3)},{item.price.toString().substr(-3,)} руб.</p>
                                    </div>

                                    {
                                        cart.filter((el) => el.id === item.id ).length
                                            ?  <button type='button' style={{background: 'linear-gradient(180deg, #89F09C 0%, #3CC755 100%)', color: 'white'}} className={styles.cardBtn} onClick={() => deleteShoesInCart(item.id)}>✔</button>
                                            :  <button type='button' className={styles.cardBtn} onClick={() => addShoesInCart(item.id)}>+</button>
                                    }
                                </div>
                            </div>

                ))
            }
            </div>
        </section>
    );
};

export default Favourites;