import React from 'react'
import styles from './SectionTwo.module.css'
import Card from './Card'

// import icons
import icon1 from '../../images/icon-api.svg'
import icon2 from '../../images/icon-budgeting.svg'
import icon3 from '../../images/icon-online.svg'
import icon4 from '../../images/icon-onboarding.svg'



const SectionTwo = () => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <h2 className={styles.title}>Why choose Easybank?</h2>
                    <p className={styles.txt}>We leverage Open Banking to turn your bank account into your financial hub.<br />Control your finances like never before</p>
                </div>
                <div className={styles.bottom}>
                    <Card icon={icon3} cardTitle="Online Banking" cardText="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world." />
                    <Card icon={icon2} cardTitle="Simple Budgeting" cardText="See exactly where your money goes each month. Recive notifications when you're close to hitting your limits." />
                    <Card icon={icon4} cardTitle="Fast Onboarding" cardText="We don't do branches. Open your account in minutes online and start taking control of your finances right away." />
                    <Card icon={icon1} cardTitle="Open API" cardText="Manage your savings, investments, pension, and much morefrom one account. Tracking your money has never been easier." />
                </div>
            </div>
        </div>
    )
}

export default SectionTwo
