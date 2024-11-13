import styles from './Input.module.css';
import cn from 'classnames';
import { forwardRef } from 'react';

const Input = forwardRef(({ className, isValid = true, appearance, ...props }, ref) => {
	return (
		<input {...props} ref={ref} className={cn(className, styles['input'], {
			[styles['invalid']]: !isValid,
			[styles['title']]: appearance === 'title',
			[styles['date']]: appearance === 'date',
			[styles['tag']]: appearance === 'tag'
		})} />
	);
});

Input.displayName = 'Input';

export default Input;
