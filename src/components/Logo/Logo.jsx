import styles from './Logo.module.css';

function Logo({src}) {
	return <img className={styles.logo} src={src} alt="Логотип журнала" />;
}

export default Logo;
