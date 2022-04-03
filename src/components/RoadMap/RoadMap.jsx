import React from 'react';
import styles from './RoadMap.module.css'
import {Block} from "./Blocks/Block";


export const RoadMap = () => {
    return (
        <div className={styles.RoadMap}>
            <h1 className={styles.Header}>Дорожная карта</h1>
            <div className={styles.Content}>
                <div className={styles.Line}/>
                <div>
                    <Block/>
                    <Block/>
                    <Block/>
                    <Block/>
                    <Block/>
                    <Block/>
                </div>
            </div>

        </div>
    )
}
