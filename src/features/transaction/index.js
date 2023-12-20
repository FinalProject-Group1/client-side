import { createSlice } from '@reduxjs/toolkit';
import { getBuyerTransaction } from './actions';

const transactionSlice = createSlice({
	name: 'transaction',
	initialState: {
		buyerTransactions: {},
	},
	reducers: {
		setBuyerTransaction: (state, action) => {
			state.buyerTransactions = action.payload;
		},
	},
});

export const { setBuyerTransaction } = transactionSlice.actions;
export const buyerTransaction = (orderStatus) => {
	return async (dispatch) => {
		// console.log('trigerr buyer transaction slice');
		const data = await getBuyerTransaction(orderStatus);
		dispatch(setBuyerTransaction(data));
	};
};
export default transactionSlice.reducer;
