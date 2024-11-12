export const INITIAL_STATE = {
	isValid: {
		title: true,
		text: true,
		date: true
	},
	values: {
		title: '',
		text: '',
		date: '',
		tag: ''
	},
	isFormReadyToSubmit: false
};

export const formReducer = (state, action) => {
	switch(action.type) {
	case 'SET_VALUES':
		return {...state, values: {...state.values, [action.payload.name]: action.payload.value}};
	case 'CLEAR':
		return {...state, values: INITIAL_STATE.values, isFormReadyToSubmit: false};
	case 'RESET_VALIDITY':
		return {
			...state,
			isValid: INITIAL_STATE.isValid
		};
	case 'SUBMIT': {
		const titleValidity = state.values.title?.trim().length > 0;
		const textValidity = state.values.text?.trim().length > 0;
		const dateValidity = !!state.values.date;
		return {
			...state,
			isValid: {
				title: titleValidity,
				text: textValidity,
				date: dateValidity
			},
			isFormReadyToSubmit: titleValidity && textValidity && dateValidity
		};
	}
	}
};
