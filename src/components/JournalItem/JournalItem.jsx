import './JournalItem.css';

function JournalItem({title, date, text, id}) {
	const formatter = new Intl.DateTimeFormat('ru-RU');
	const FormattedDate = formatter.format(date);

	return (
		<>
			<h2 className="journal-item__header">{title}</h2>
			<div className="journal-item__body">
				<div className="journal-item__date">{FormattedDate}</div>
				<div className="journal-item__text">{text}</div>
			</div>
		</>
	);
}

export default JournalItem;