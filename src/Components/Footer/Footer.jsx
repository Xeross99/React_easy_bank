import React from 'react'
import styles from './Footer.module.css'
import Button from '../Button/Button'
import logo from '../../images/logo-white.svg'
import fb from '../../images/icon-facebook.svg'
import yt from '../../images/icon-youtube.svg'
import tw from '../../images/icon-twitter.svg'
import pi from '../../images/icon-pinterest.svg'
import ins from '../../images/icon-instagram.svg'


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.wrapper}>

                <div className={styles.sectionOne}>
                    <img src={logo} alt="easybank logo"></img>
                    <div className={styles.socialMedia}>
                        <img src={fb} alt="Facebook"></img>
                        <img src={yt} alt="Youtube"></img>
                        <img src={tw} alt="Twitter"></img>
                        <img src={pi} alt="Pinterest"></img>
                        <img src={ins} alt="Instagram"></img>
                    </div>
                </div>
                <div className={styles.sectionTwo}>
                    <ul className={styles.list}>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className={styles.sectionThree}>
                    <ul className={styles.list}>
                        <li>Careers</li>
                        <li>Support</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className={styles.sectionFour}>
                    <Button title="Request invite" />
                    <p className={styles.rights}>© EasyBank. All Rights Reserved</p>
                </div>

            </div>
        </div>
    )
}

export default Footer
