import React from 'react';
import styles from './Slider.module.css'
import slideLogo from '../../../assets/slideLogo.png'
import sliderImage from '../../../assets/sliderImage.png'
import {MdKeyboardArrowRight} from 'react-icons/md'

const Slider = () => {
const {slider,sliderLeft,sliderTitle,sliderBtn,sliderContent,sliderInfo,sliderArrowRight,sliderArrowIcon} = styles;
    return (
        <section className={slider}>
                <div className={sliderContent}>
                    <div className={sliderLeft}>
                        <img src={slideLogo} alt=""/>
                        <div className={sliderInfo}>
                            <h2 className={sliderTitle}><span>Stan Smith</span>,
                                Forever!</h2>
                            <button className={sliderBtn} type='button'>Купить</button>
                        </div>
                    </div>
                    <div>
                        <img src={sliderImage} alt=""/>
                    </div>
                    <div className={sliderArrowRight}>
                        <span className={sliderArrowIcon}><MdKeyboardArrowRight/></span>
                    </div>
                </div>
        </section>
    );
};

export default Slider;