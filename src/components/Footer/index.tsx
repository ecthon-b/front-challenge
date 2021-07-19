import styles from './styles.module.scss';

export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <p>Testando suas habilidades em HTML, CSS e JS. <br />
                    Linx Impulse <br />
                    2021</p>
            </div>
        </footer>
    )
}