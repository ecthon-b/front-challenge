import styles from './styles.module.scss';

export function NavigationBar() {
    return (
        <div className={styles.divContainer}>
            <nav className={styles.navContent}>
                <a className={styles.navButton} href="#">Conheça a Linx</a>
                <a className={styles.navButton} href="#">Ajude o algorítmo</a>
                <a className={styles.navButton} href="#">Seus produtos</a>
                <a className={styles.navButton} href="#">Compartilhe</a>
            </nav>
        </div>
    )
}