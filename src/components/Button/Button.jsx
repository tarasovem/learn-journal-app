import './Button.css';

function Button() {
	const handleClick = () => {
		console.log('hello');
	};
	
	return (
		<button onClick={handleClick} className="button accent">Сохранить</button>
	);
}

export default Button;