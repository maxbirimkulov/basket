import React, {useContext} from 'react';
import styles from './order.module.css'
import {CustomContext} from "../../context";
import {useNavigate} from 'react-router-dom'

const Order = () => {

    const {cart, deleteShoesInCart, postOrders, setCart} = useContext(CustomContext);

    const navigate = useNavigate();

    const createOrder = (e) => {
        e.preventDefault();
        postOrders({
            name: e.target[0].value,
            tel: e.target[1].value,
            city: e.target[2].value,
            street: e.target[3].value,
            info: e.target[4].value ? e.target[4].value : 'no info',
            pay: e.target[5].value,
            money: e.target[6].value,
            order: cart,
            price: cart.reduce((acc, rec) => acc + rec.price , 0),
            nds: Math.ceil(cart.reduce((acc, rec) => acc + rec.price , 0) / 100 * 5),
            change: e.target[5].value - cart.reduce((acc, rec) => acc + rec.price , 0),
        });
        e.target[0].value = '';
        e.target[1].value = '';
        e.target[2].value = '';
        e.target[3].value = '';
        e.target[4].value = '';
        e.target[5].value = '';
        e.target[6].value = '';

        setCart([]);
        navigate('/buy')
    };

    return (
        <section>
            <h2 className={styles.title}>Заказ</h2>

            <div className={styles.row}>
                <form  className={styles.form} onSubmit={createOrder}>
                    <div className={styles.formItem}>
                        <label className={styles.formLabel} htmlFor="name">Имя *</label>
                        <input required className={styles.formInput} type="text" name='name'/>
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.formLabel} htmlFor="tel">Телефон *</label>
                        <input required className={styles.formInput} type="tel" name='tel'/>
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.formLabel} htmlFor="city">Город *</label>
                        <input required className={styles.formInput} type="text" name='city'/>
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.formLabel} htmlFor="street">Улица *</label>
                        <input required className={styles.formInput} type="text" name='street'/>
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.formLabel} htmlFor="info">Дополнительная информация *</label>
                        <textarea className={styles.formTextArea} name='info'/>
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.formLabel} htmlFor="pay">Способ оплаты *</label>
                        <select required name="pay" id="" className={styles.formSelect}>
                            <option value="Наличными">Наличными</option>
                            <option value="Demir bank">Demir bank</option>
                            <option value="Optima bank">Optima bank</option>
                        </select>
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.formLabel} htmlFor="money">Вносимая сумма *</label>
                        <input min={cart.reduce((acc, rec) => acc + rec.price , 0)} required className={styles.formInput} type="number" name='money'/>
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.formLabel} htmlFor="money">Условия *</label>
                        <div className={styles.checkboxBlock}>
                            <input required className={styles.checkbox} type="checkbox" name='money'/>
                            <span className={styles.checkboxText}>С условиями доставки согласен *</span>
                        </div>

                    </div>

                    <button type='submit' className={styles.formBtn}>Заказать</button>
                </form>
                <div className={styles.right}>
                    <ul className={styles.list}>
                        {cart.map((el) => (
                            <li key={el.id} className={styles.item}>
                                <img className={styles.itemImg} src={el.imageUrl} alt=""/>
                                <div className={styles.itemCenter}>
                                    <h4 className={styles.itemTitle}>{el.title}</h4>
                                    <p className={styles.itemPrice}>{el.price} руб.</p>
                                </div>
                                <button className={styles.itemBtn} onClick={() => deleteShoesInCart(el.id)}>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z" fill="#B5B5B5"/>
                                    </svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.cartFooterItem}>
                        <p className={styles.cartFooterTitle}>Итого</p>
                        <div  className={styles.cartFooterLine}/>
                        <p className={styles.itemPrice}>{cart.reduce((acc, rec) => acc + rec.price , 0)} руб. </p>
                    </div>
                    <div className={styles.cartFooterItem}>
                        <p className={styles.cartFooterTitle}>Налог 5 %</p>
                        <div className={styles.cartFooterLine}/>
                        <p className={styles.itemPrice}>{Math.ceil(cart.reduce((acc, rec) => acc + rec.price , 0) / 100 * 5)} руб. </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Order;