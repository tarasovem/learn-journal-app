import './Button.css';

function Button() {
	return (
		<button onClick={() => console.log('hello')} className="button accent">Сохранить</button>
	);
}

export default Button;