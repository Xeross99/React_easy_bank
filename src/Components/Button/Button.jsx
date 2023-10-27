import React from 'react'
import style from './Button.module.css'


const Button = (props) => {
    return (

        <button className={style.btn}>{props.title}</button>

    )
}

export default Button
