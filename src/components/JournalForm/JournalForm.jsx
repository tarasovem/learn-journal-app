import './JournalForm.css';
import { useState } from 'react';
import Button from '../Button/Button';

function JournalForm() {
	const [inputData, setInputData] = useState('');

	const handleTitleChange = (event) => {
		setInputData(event.target.value);
	};

	const addJournalItem = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
	};

	return (
		<>
			<form className='journal-form' onSubmit={addJournalItem}>
				<input type="text" name='title' />
				<input type="date" name='date' />
				<input type="text" name='tag' onChange={handleTitleChange} value={inputData}/>
				<textarea name="post" id="" cols="30" rows="10"></textarea>
				<Button text='Сохранить'  onClick={() => {console.log('click');}}/>
			</form>
		</>
	);
}

export default JournalForm;
