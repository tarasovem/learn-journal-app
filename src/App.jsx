import styles from './App.module.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/use-localstorage.hook';

const mapItems = (items) => {
	if (!items) {
		return [];
	}

	return items.map(el => ({
		...el,
		date: new Date(el.date)
	}));
};

function App() {
	const [items, setItems] = useLocalStorage('data');

	const addItem = (item) => {
		const mappedItems = mapItems(items);
		setItems([...mappedItems, {
			text: item.text,
			title: item.title,
			date: new Date(item.date),
			id: mappedItems.length > 0 ? Math.max(...mappedItems.map(el => el.id)) + 1 : 1
		}]);
	};

	return (
		<div className={styles['app']}>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList items={mapItems(items)}/>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem}/>
			</Body>
		</div>
	);
}

export default App;
