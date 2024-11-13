import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
	const [data, setData] = useState(initialValue);

	useEffect(() => {
		const res = JSON.parse(localStorage.getItem(key));
		if (res) {
			setData(res);
		}
	}, []);

	const saveData = (newData) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};

	return [data, saveData];
}
