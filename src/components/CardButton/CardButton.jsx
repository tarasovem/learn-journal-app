import styles from './CardButton.module.css';
import cn from 'classnames';
function CardButton({ children, className }) {

	return (
		<button className={cn(styles['card-button'], className)}>
			{children}
		</button>
	);
}

export default CardButton;