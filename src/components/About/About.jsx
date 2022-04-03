import React from "react";
import styles from './About.module.css';
import {Block} from "./Blocks/Block";


export const About = () => {
    return (
        <div className={styles.BlockContainer}>
            <h1 className={styles.Header}>О проекте</h1>
            <Block/>
            <Block/>
            <Block/>
        </div>
    )
}