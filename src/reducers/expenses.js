//Expenses Reducer
const expensesReducerDefaultState = [];
const expenseReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.expense];
		case 'REMOVE_EXPENSE':
			return state.filter((item) => item.id !== action.expense.id);
		case 'EDIT_EXPENSE':
			return state.map((item) => {
				if (item.id === action.id) {
					return {
						...item,
						...action.updates,
					};
				} else {
					return item;
				}
			});
		default:
			return state;
	}
};

export default expenseReducer;
