import styles from './JournalForm.module.css';
import buttonStyles from '../Button/Button.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useEffect, useReducer, useRef } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JourtalForm.state';

function JournalForm({onSubmit}) {
	const [formState, dispathForm] = useReducer(formReducer, INITIAL_STATE);
	const {values, isValid, isFormReadyToSubmit} = formState;
	const titleRef = useRef();
	const dateRef = useRef();
	const textRef = useRef();

	const focusError = (isValid) => {
		switch (true) {
		case !isValid.title:
			titleRef.current.focus();
			break;
		case !isValid.date:
			dateRef.current.focus();
			break;
		case !isValid.text:
			textRef.current.focus();
			break;
		}
	};

	useEffect(() => {
		let timerId;
		if (!isValid.title || !isValid.text || !isValid.date) {
			timerId = setTimeout(() => {
				focusError(isValid);
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
	}, [isFormReadyToSubmit, onSubmit, values]);

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
				<Input type="text" ref={titleRef} value={values.title} onChange={handleChange} isValid={isValid.title} name='title' appearance='title' placeholder='Название' />
				<Input type="date" ref={dateRef} value={values.date} onChange={handleChange} isValid={isValid.date} name='date' appearance='date' />
				<Input type="text" value={values.tag} onChange={handleChange} name='tag' appearance='tag' placeholder='Тег'/>
				<textarea ref={textRef} name="text" id="" cols="30" rows="10" value={values.text} onChange={handleChange} className={cn(styles['input'], styles['text'], {
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
