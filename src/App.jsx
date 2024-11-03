import './App.css';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
function App() {
	const data = [
		{
			id: 1,
			title: 'Подготовка к обновлению курсов',
			date: new Date(),
			text: 'Сегодня провёл весь день за...'
		},
		{
			id: 2,
			title: 'Поход в годы',
			date: new Date(),
			text: 'Думал, что очень много време...'
		},
		{
			id: 3,
			title: 'Подготовка к обновлению курсов',
			date: new Date(),
			text: 'Создал первую заметку, чтобы ...'
		}
	];

	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList>
					<CardButton>
						<JournalItem
							title={data[0].title}
							text={data[0].text}
							date={data[0].date}
						/>
					</CardButton>
					<CardButton>
						<JournalItem
							title={data[1].title}
							text={data[1].text}
							date={data[1].date}
						/>
					</CardButton>
				</JournalList>
			</LeftPanel>
			<Body>
				Body
			</Body>
		</div>
	);
}

export default App;
