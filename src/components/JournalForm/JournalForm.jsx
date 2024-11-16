import styles from './JournalForm.module.css';
import buttonStyles from '../Button/Button.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useEffect, useReducer, useRef, useContext } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JourtalForm.state';	
import { UserContext } from '../../context/user.context.jsx';

function JournalForm({onSubmit, data, onDelete}) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const {values, isValid, isFormReadyToSubmit} = formState;
	const titleRef = useRef();
	const dateRef = useRef();
	const textRef = useRef();
	const {userId} = useContext(UserContext);

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
		if (!data) {
			dispatchForm({type: 'CLEAR'});
			dispatchForm({type: 'SET_VALUES', payload: {userId}});
		} else {
			dispatchForm({type: 'SET_VALUES', payload: {...data}});
		}
	}, [data, userId]);

	useEffect(() => {
		let timerId;
		if (!isValid.title || !isValid.text || !isValid.date) {
			timerId = setTimeout(() => {
				focusError(isValid);
				dispatchForm({type: 'RESET_VALIDITY'});
			}, 2000);
		}

		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values);
			dispatchForm({type: 'CLEAR'});
			dispatchForm({type: 'SET_VALUES', payload: {name: 'userId', value: userId}});
		}       
	}, [isFormReadyToSubmit, onSubmit, values, userId]);

	const addJournalItem = (event) => {
		event.preventDefault();
		dispatchForm({type: 'SET_VALUES', payload: {name: 'userId', value: userId}});
		dispatchForm({type: 'SUBMIT'});
	};

	const handleChange = (event) => {
		const {name, value} = event.target;
		dispatchForm({type: 'SET_VALUES', payload: {[name]: value}});
	};

	const deleteJournalItem = () => {
		onDelete(data.id);
		dispatchForm({type: 'CLEAR'});
		dispatchForm({type: 'SET_VALUES', payload: {userId}});
	};

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div className={styles['journal-form__row']}>
				<Input type="text" ref={titleRef} value={values.title} onChange={handleChange} isValid={isValid.title} name='title' appearance='title' placeholder='Название' />
				{ data?.id &&<button className={styles['delete']} type='button' onClick={deleteJournalItem}>
					<img src="/archive.svg" alt="Кнопка удалить" />
				</button>}
			</div>
			<div className={styles['journal-form__row']}>
				<label htmlFor="date" className={styles['journal-form__label']}>
					<img src='/calendar.svg' alt='Иконка календаря'/>
					<span>Дата</span>
				</label>
				<Input type="date" ref={dateRef} value={values.date ? new Date(values.date).toISOString().slice(0, 10) : ''} onChange={handleChange} isValid={isValid.date} name='date' appearance='date' />
			</div>
			<div className={styles['journal-form__row']}>
				<label htmlFor="tag" className={styles['journal-form__label']}>
					<img src='/folder.svg' alt='Иконка папки'/>
					<span>Метки</span>
				</label>
				<Input type="text" value={values.tag} onChange={handleChange} name='tag' appearance='tag' placeholder='Тег'/>
			</div>
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
	);
}

export default JournalForm;
