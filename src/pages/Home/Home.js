import React, {useEffect, useContext} from 'react';
import {CustomContext} from "../../context";
import Slider from "./Slider/Slider";
import styles from './home.module.css'
import {BsHeart} from 'react-icons/bs'

const Home = () => {

    const {getAllShoes, shoes, addShoesInCart, cart,deleteShoesInCart,  getFavorites} = useContext(CustomContext);

    useEffect(() => {
            getAllShoes()
    },[]);

    return (
        <section>
            <Slider/>
            <h2 className={styles.title}>Все кроссовки</h2>

            <div className={styles.row}>
                {shoes.map((item) => (
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
                ))}
            </div>

        </section>
    );
};

export default Home;