import React from 'react'
import styles from './SectionThree.module.css'
import Card from './Card'

// images
import img1 from '../../images/image-currency.jpg'
import img2 from '../../images/image-restaurant.jpg'
import img3 from '../../images/image-plane.jpg'
import img4 from '../../images/image-confetti.jpg'


const SectionThree = () => {
    return (
        <div className={styles.color}>
            <div className={styles.container}>
                <h2 className={styles.title}>Latest Articles</h2>
                <div className={styles.cards}>
                    <Card image={img1} by="By Claire Robinson" title="Recive money in any currency with no fees" txt="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ..." />
                    <Card image={img2} by="By Wilson Hutton" title="Treat yourself without worrying about money" txt="Our simple budgeting feature allows you to separate our your spending and set realistic limits each month. That means you ..." />
                    <Card image={img3} by="By Wilson Hutton" title="Take your Easybank card wherever you go" txt="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ..." />
                    <Card image={img4} by="By Claire Robinson" title="Our invite-only Beta accounts are now live!" txt="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ..." />
                </div>
            </div>
        </div>
    )
}

export default SectionThree
