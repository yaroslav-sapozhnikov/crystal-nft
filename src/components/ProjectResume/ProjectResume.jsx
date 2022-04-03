import React from "react";
import styles from './ProjectResume.module.css';

export const ProjectResume = () => {

    const onClick = () => {}

    return (
        <div className={styles.ProjectResume}>

            <div className={styles.SocialMediaIconsBlock}>

                <img className={styles.SocialMediaIcon} src={"https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/0fdef751204647a3bbd7eaa2827ed4f9.webp"}/>
                <img className={styles.SocialMediaIcon} src={"https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/c7d035ba85f6486680c2facedecdcf4d.webp"}/>
                <img className={styles.SocialMediaIcon} src={"https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp"}/>
                <img className={styles.SocialMediaIcon} src={"https://static.wixstatic.com/media/78aa2057f0cb42fbbaffcbc36280a64a.png/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01/78aa2057f0cb42fbbaffcbc36280a64a.webp"}/>

            </div>

            <h1 className={styles.ProjectName}>НАЗВАНИЕ ПРОЕКТА</h1>

            <p className={styles.ProjectDescription}>
                Краткое текстовое описание проекта
            </p>

            <button className={styles.PurchaseButton} onClick={onClick}> Купить NFT</button>

        </div>
    )
}