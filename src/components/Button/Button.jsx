import './Button.css';
import { useState } from 'react';

function Button() {
	const [text, setText] = useState('Сохранить');

	const handleClick = () => {
		setText('Закрыть');
	};
	
	return (
		<button onClick={handleClick} className="button accent">{text}</button>
	);
}

export default Button;