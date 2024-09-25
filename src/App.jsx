import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';

function App() {
	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			date: new Date(),
			text: 'Сегодня провёл весь день за...'
		},
		{
			title: 'Поход в годы',
			date: new Date(),
			text: 'Думал, что очень много време...'
		},
		{
			title: 'Подготовка к обновлению курсов',
			date: new Date(),
			text: 'Создал первую заметку, чтобы ...'
		}
	];

	return (
		<>
			<h1>Заголовок</h1>
			<p>Какой-то текст</p>
			<Button/>
			{data.map((item) => (
				<CardButton key={item.id}>
					<JournalItem
						title={item.title}
						date={item.date}
						text={item.text}
					/>
				</CardButton>
			))}
		</>
	);
}

export default App;
