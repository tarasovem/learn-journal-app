import './CardButton.css';

function CardButton({ children }) {
	return (
		<button onClick={() => console.log('Hello!')} className={'card-button'}>
			{children}
		</button>
	);
}

export default CardButton;