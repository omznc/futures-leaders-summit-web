import styles from './Footer.module.css';

export function Footer() {
    // 2 columns, 1 double width.
    return (
        <footer className={styles.footer}>
            <div className={styles.info}></div>
            <div className={styles.social}></div>
        </footer>
    );
}
