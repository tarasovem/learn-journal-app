import styles from './Input.module.css';
import cn from 'classnames';
import { forwardRef, useEffect } from 'react';

const Input = forwardRef(({ className, isValid = true, appearance, ...props }, ref) => {

	useEffect(() => {
		console.log(appearance === 'title');
	}, [appearance]);

	return (
		<input {...props} ref={ref} className={cn(className, styles['input'], {
			[styles['invalid']]: !isValid,
			[styles['title']]: appearance === 'title',
			[styles['date']]: appearance === 'date',
			[styles['tag']]: appearance === 'tag'
		})} placeholder='Название' />
	);
});

Input.displayName = 'Input';

export default Input;
