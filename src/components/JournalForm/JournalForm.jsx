import './JournalForm.css';
import Button from '../Button/Button';

function JournalForm({onSubmit}) {

	const addJournalItem = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		onSubmit({...formProps, date: new Date(formProps.date)});
	};

	return (
		<>
			<form className='journal-form' onSubmit={addJournalItem}>
				<input type="text" name='title' />
				<input type="date" name='date' />
				<input type="text" name='tag'/>
				<textarea name="text" id="" cols="30" rows="10"></textarea>
				<Button text='Сохранить' />
			</form>
		</>
	);
}

export default JournalForm;
