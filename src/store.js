import { configureStore } from '@reduxjs/toolkit';
import shopSlice from './features/shop/index';
import userSlice from './features/user/index';
import transactionSlice from './features/transaction/index';

export const store = configureStore({
	reducer: {
		shop: shopSlice,
		user: userSlice,
		transaction: transactionSlice,
	},
});
