import styles from './JournalList.module.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import { UserContext } from '../../context/user.context.jsx';
import { useContext } from 'react';

function JournalList({ items }) {
	const {userId} = useContext(UserContext);

	if (items.length === 0) {
		return <p className={styles['no-items']}>Записей пока нет, добавьте первую!</p>;
	}

	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	};

	return (
		<>
			{items
				.filter(el => el.userId === userId)
				.sort(sortItems)
				.map(el => (
					<CardButton key={el.id}>
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
