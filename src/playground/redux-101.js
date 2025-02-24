import { createStore } from 'redux';

//Action Generators - function that returns action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy,
});

const setCount = ({ count }) => ({
	type: 'SET',
	count,
});

const resetCount = () => ({
	type: 'RESET',
});

//Redicers
const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy,
			};
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy,
			};
		case 'RESET':
			return {
				count: 0,
			};
		case 'SET':
			return {
				count: action.count,
			};
		default:
			return state;
	}
};
const store = createStore(countReducer);
const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decrementCount({ decrementBy: 5 }));
store.dispatch(setCount({ count: 5 }));
store.dispatch(resetCount());
