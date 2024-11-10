import styles from './LeftPanel.module.css';

function LeftPanel({ children }) {
	return (
		<div className={styles['left-panel']}>
			{children}
		</div>
	);
}

export default LeftPanel;
