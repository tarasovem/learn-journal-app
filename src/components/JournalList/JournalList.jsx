import styles from './JournalList.module.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import { UserContext } from '../../context/user.context.jsx';
import { useContext, useMemo } from 'react';

function JournalList({ items, setItem }) {
	const {userId} = useContext(UserContext);
	
	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	};
		
	const filteredItems = useMemo(() => items
		.filter(el => el.userId === userId)
		.sort(sortItems), [items, userId]);

	if (items.length === 0) {
		return <p className={styles['no-items']}>Записей пока нет, добавьте первую!</p>;
	}

	return (
		<>
			{filteredItems.map(el => (
				<CardButton key={el.id} onClick={() => setItem(el)}>
					<JournalItem
						title={el.title}
						text={el.text}
						date={el.date}
					/>
				</CardButton>
			))}
		</>
	);
}

export default JournalList;
