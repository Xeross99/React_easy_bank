import React from 'react'
import styles from './Card.module.css'

const Card = (props) => {
    return (
        <div className={styles.card}>

            <img src={props.icon} alt="Ikona" className={styles.icon}/>

            <h3 className={styles.cardTitle}>{props.cardTitle}</h3>

            <p className={styles.cardText}>{props.cardText}</p>

        </div>
    )
}

export default Card
