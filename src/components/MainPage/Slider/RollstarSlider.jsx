//import React, { useRef } from "react";

import styles from "./RollstarSlider.module.css";
import RollstarSliderList from "./RollstarSliderList";

function RollstarSlider() {

    return (
        <div className={styles['rollstarSlider__container']}>
            <div className={styles['rollstarSlider__inner']}>
                <RollstarSliderList />
            </div>
        </div>
    )
}

export default RollstarSlider;