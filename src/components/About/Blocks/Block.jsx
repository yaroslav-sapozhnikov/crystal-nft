import React from "react";
import styles from './Block.module.css'

export const Block = () => {
    return (
        <div className={styles.Block}>
            <div className={styles.TextBlock}>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
            </div>

            <div>
                <img src={"src/components/About/Blocks/resources/img1.jpg"} className={styles.ImageNFT}/>
            </div>

        </div>

    )
}