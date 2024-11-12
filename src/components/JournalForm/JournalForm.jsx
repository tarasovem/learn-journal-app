import styles from './JournalForm.module.css';
import buttonStyles from '../Button/Button.module.css';
import Button from '../Button/Button';
import { useEffect, useReducer } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JourtalForm.state';

function JournalForm({onSubmit}) {
	const [formState, dispathForm] = useReducer(formReducer, INITIAL_STATE);
	const {values, isValid, isFormReadyToSubmit} = formState;


	useEffect(() => {
		let timerId;
		if (!isValid.title || !isValid.text || !isValid.date) {
			timerId = setTimeout(() => {
				dispathForm({type: 'RESET_VALIDITY'});
			}, 2000);
		}

		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values);
			dispathForm({type: 'CLEAR'});
		}       
	}, [isFormReadyToSubmit]);

	const addJournalItem = (event) => {
		event.preventDefault();
		dispathForm({type: 'SUBMIT'});
	};

	const handleChange = (event) => {
		const {name, value} = event.target;
		dispathForm({type: 'SET_VALUES', payload: {name, value}});
	};

	return (
		<>
			<form className={styles['journal-form']} onSubmit={addJournalItem}>
				<input type="text" value={values.title} onChange={handleChange} name='title' className={cn(styles['input'], styles['title'], {
					[styles['invalid']]: !isValid.title
				})} placeholder='Название' />
				<input type="date" value={values.date} onChange={handleChange} name='date' className={cn(styles['input'], styles['date'], {
					[styles['invalid']]: !isValid.date
				})} />
				<input type="text" value={values.tag} onChange={handleChange} name='tag' className={cn(styles['input'], styles['tag'])} placeholder='Тег'/>
				<textarea name="text" id="" cols="30" rows="10" value={values.text} onChange={handleChange} className={cn(styles['input'], styles['text'], {
					[styles['invalid']]: !isValid.text
				})} placeholder='Текст'></textarea>
				<Button 
					text='Сохранить' 
					className={cn(
						buttonStyles.buttonAccent, 
						buttonStyles.buttonSubmit
					)}
				/>
			</form>
		</>
	);
}

export default JournalForm;
