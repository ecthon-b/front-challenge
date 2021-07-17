import { NavigationBar } from '../NavigationBar';
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <p className={styles.paragraph}>uma sessão de produtos</p>
                <p className={styles.big}>especial para você</p>
                <p className={styles.small}>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
                <NavigationBar />
            </div>
        </header>
    )
}