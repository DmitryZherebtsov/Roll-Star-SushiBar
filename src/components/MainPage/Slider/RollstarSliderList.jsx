import React, { Fragment, useRef } from "react";
import styles from "./RollstarSliderList.module.css";
import { home_page } from "../../../assets/assets";


function RollstarSliderList() {

    const leftButton = useRef();
    const rightButton = useRef();
    const imageList = useRef();

    function clickLeftButtonHandler() {
        const direction = -1;
        const scrollAmount = imageList.current.clientWidth * direction ;
        imageList.current.scrollBy({left: scrollAmount, behavior: "smooth"});
    }

    function clickRightButtonHandler() {
        const direction =  1;
        const scrollAmount = imageList.current.clientWidth * direction ;
        imageList.current.scrollBy({ left: scrollAmount, behavior: "smooth"});
    }

    return (
        <Fragment> 
            <button id="prev-slide" className={styles['slide__button__left']} onClick={clickLeftButtonHandler} ref={leftButton}> <img className='arrow_slider' src={home_page.arrow_right} alt="" /> </button>
            <div className={styles['rollstarSlider__list']} ref={imageList}>
                <img src={home_page.slider_img7} alt="firstSliderImage" className={styles['rollstarSlider__item']}/>
                <img src={home_page.slider_img9} alt="thirdSliderImage" className={styles['rollstarSlider__item']}/>
                <img src={home_page.slider_img8} alt="secondSliderImage" className={styles['rollstarSlider__item']}/>
                <img src={home_page.slider_img10} alt="firstSliderImage" className={styles['rollstarSlider__item']}/>
                <img src={home_page.slider_img11} alt="secondSliderImage" className={styles['rollstarSlider__item']}/>
                <img src={home_page.slider_img3} alt="thirdSliderImage" className={styles['rollstarSlider__item']}/>
                <img src={home_page.slider_img5} alt="secondSliderImage" className={styles['rollstarSlider__item']}/>
                <img src={home_page.slider_img13} alt="firstSliderImage" className={styles['rollstarSlider__item']}/>
                <img src={home_page.slider_img14} alt="secondSliderImage" className={styles['rollstarSlider__item']}/>
                <img src={home_page.slider_img15} alt="thirdSliderImage" className={styles['rollstarSlider__item']}/>
            </div>
            <button id="next-slide" className={styles['slide__button__right']} onClick={clickRightButtonHandler}  ref={rightButton}> <img src={home_page.arrow_left} alt="" /> </button>
        </Fragment>

    )
}

export default RollstarSliderList;