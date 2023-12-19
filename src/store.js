import { configureStore } from '@reduxjs/toolkit';
import shopSlice from './features/shop/index';

export const store = configureStore({
	reducer: {
		shop: shopSlice,
	},
});
