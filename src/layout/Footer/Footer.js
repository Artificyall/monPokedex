import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.main}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3 className={styles.title}>About</h3>

                    <ul className={styles.list}>
                        <li className={styles.link}>About us</li>
                        <li className={styles.link}>Contact us</li>
                        <li className={styles.link}>Privacy policy</li>
                    
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3 className={styles.title}>About</h3>

                    <ul className={styles.list}>
                        <li className={styles.link}>About us</li>
                        <li className={styles.link}>Contact us</li>
                        <li className={styles.link}>Privacy policy</li>
                    
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3 className={styles.title}>About</h3>

                    <ul className={styles.list}>
                        <li className={styles.link}>About us</li>
                        <li className={styles.link}>Contact us</li>
                        <li className={styles.link}>Privacy policy</li>
                    
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;