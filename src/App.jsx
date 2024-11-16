import styles from './App.module.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { UserContextProvider } from './context/user.context';
import { useState } from 'react';

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
	const [selectedItem, setSelectedItem] = useState({});

	const addItem = (item) => {
		const mapped = mapItems(items);
		if (!item.id) {
			setItems([...mapped, {
				...item,
				date: new Date(item.date),
				id: mapped.length > 0 ? Math.max(...mapped.map(el => el.id)) + 1 : 1
			}]);
		} else {
			setItems([...mapped.map(el => {
				if (el.id === item.id) {
					return {...item};
				} else {
					return el;
				}
			})]);
		}
	};

	return (
		<UserContextProvider>
			<div className={styles['app']}>
				<LeftPanel>
					<Header/>
					<JournalAddButton/>
					<JournalList items={mapItems(items)} setItem={setSelectedItem}/>
				</LeftPanel>
				<Body>
					<JournalForm onSubmit={addItem} data={selectedItem}/>
				</Body>
			</div>
		</UserContextProvider>
	);
}

export default App;
