import SelectUser from '../SelectUser/SelectUser';
import Button from '../Button/Button';
import { useState } from 'react';
import Logo from '../Logo/Logo';

const logos = ['/logo.svg', '/vite.svg'];

function Header() {
	const [logoIndex, setLogoIndex] = useState(0);

	const toggleLogo = () => {
		setLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
	};

	return (
		<>
			<Logo src={logos[logoIndex]} />
			<SelectUser/>
			<Button onClick={toggleLogo} text="Переключить лого" />
		</>
	);
}

export default Header;
