import SelectUser from '../SelectUser/SelectUser';
import Logo from '../Logo/Logo';

function Header() {
	return (
		<>
			<Logo src={'/logo.svg'} />
			<SelectUser/>
		</>
	);
}

export default Header;
