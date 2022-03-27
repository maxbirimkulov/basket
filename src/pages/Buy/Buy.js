import React, {useEffect, useContext} from 'react';
import styles from './buy.module.css'
import {CustomContext} from "../../context";
import {Link} from "react-router-dom";
import {AiOutlineArrowLeft} from 'react-icons/ai'

const Buy = () => {

    const {orders, getAllOrders} = useContext(CustomContext);

    useEffect(() => {
        getAllOrders()
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.back}>
                <Link to='/' style={{color: '#C8C8C8'}}>
                    <div className={styles.arrow}><AiOutlineArrowLeft/></div>
                </Link>
                <h2 className={styles.title}>Мои покупки</h2>
            </div>
            <div className={styles.row}>
                {orders.map((item) => (
                    <div className={styles.card} key={item.id}>
                        <h3 className={styles.id}>Номер заказа : {item.id}</h3>
                        <p className={styles.date}>Дата заказа : {item.date}</p>
                        <ul className={styles.list}>
                            {item.order.map((el) => (
                                <li className={styles.listItem} key={el.title}>
                                    <img className={styles.listItemImg} src={el.imageUrl} alt={el.title}/>
                                    <div className={styles.listItemInfo}>
                                        <p className={styles.listItemTitle}>{el.title}</p>
                                        <p className={styles.listItemPrice}>{el.price} руб.</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <p className={styles.price}>Сумма : {item.price} руб.</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Buy;