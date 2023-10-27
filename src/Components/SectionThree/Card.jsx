import React from 'react'
import styles from './Card.module.css'

const Card = (props) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={props.image} alt="Ikona" width={310} height={250} />
            <p className={styles.by}>{props.by}</p>
            <h2 className={styles.title}>{props.title}</h2>
            <article className={styles.txt}>{props.txt}</article>
        </div>
    )
}

export default Card
