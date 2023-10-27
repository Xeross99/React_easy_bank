import React from 'react';
import logo from '../../images/logo.svg'
import styles from './Header.module.css';
import Button from '../Button/Button';
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <div className={styles.box}>
            <header className={styles.wrapper}>
                <img src={logo} alt="Logo firmy" />

                <nav>
                    <ul className={styles.list}>
                        <motion.li whileHover={{ scale: 1.2 }}>Home</motion.li>
                        <motion.li whileHover={{ scale: 1.2 }}>About</motion.li>
                        <motion.li whileHover={{ scale: 1.2 }}>Contact</motion.li>
                        <motion.li whileHover={{ scale: 1.2 }}>Blog</motion.li>
                        <motion.li whileHover={{ scale: 1.2 }}>Careers</motion.li>
                    </ul>

                </nav>

                <Button title="Request invite" />

            </header>
        </div>
    )
}

export default Header
