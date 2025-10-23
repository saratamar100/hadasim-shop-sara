import styles from './Header.module.css';

//Header component
export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Hadasim Shop</h1>
            <img className={styles.logo} src="/images/hadasim_logo.png" alt="Hadasim Logo" />
        </header>
    );
}
