import './JournalItem.css';

function JournalItem() {
	const title = 'Подготовка к обновлению курсов';
	const date = new Date();
	const text = 'Сегодня провёл весь день за...';
	
	return (
		<div className="journal-item">
			<h2 className="journal-item__header">{title}</h2>
			<div className="journal-item__body">
				<div className="journal-item__date">{date.toLocaleDateString('ru-RU')}</div>
				<div className="journal-item__text">{text}</div>
			</div>
		</div>
	);
}

export default JournalItem;