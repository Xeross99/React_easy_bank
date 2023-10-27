import React from 'react'
import Button from '../Button/Button'
import styles from './SectionOne.module.css'
import background from '../../images/bg-intro-desktop.svg'
import telephones from '../../images/image-mockups.png'
import { motion } from "framer-motion"

const SectionOne = () => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>

                <motion.div className={styles.left}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1.5 }}>
                    <h1 className={styles.maintxt}>Next generation digital banking</h1>
                    <p className={styles.txt}>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <Button title="Request invite" className={styles.btn}/>
                </motion.div>
                <motion.div className={styles.images}>
                    <motion.img className={styles.background} src={background} alt='BackgroundImg'
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}></motion.img>
                    <motion.img className={styles.telephones} src={telephones} alt='BackgroundTelephones'
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}></motion.img>
                </motion.div>
            </div>
        </div>
    )
}

export default SectionOne