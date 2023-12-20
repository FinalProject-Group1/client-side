import { createSlice } from '@reduxjs/toolkit';

const shopSlice = createSlice({
	name: 'shop',
	initialState: {
		selectedProducts: [],
	},
	reducers: {
		addOrRemoveProduct: (state, action) => {
			const { data, quantity } = action.payload;
			const index = state.selectedProducts.findIndex(
				(product) => product.id === data.id
			);

			if (index !== -1) {
				state.selectedProducts.splice(index, 1);
				return;
			}

			state.selectedProducts.push({ ...data, quantity });
		},
		incrementQuantity: ({ selectedProducts }, action) => {
			const { data } = action.payload;
			const index = selectedProducts.findIndex(
				(product) => product.id === data.id
			);

			if (index !== -1) {
				const product = selectedProducts[index];
				product.quantity += product.quantity === product.stock ? 0 : 1;
			}
		},
		decrementQuantity: ({ selectedProducts }, action) => {
			const { data } = action.payload;
			const index = selectedProducts.findIndex(
				(product) => product.id === data.id
			);

			if (index !== -1) {
				const product = selectedProducts[index];
				product.quantity -= product.quantity === 1 ? 0 : 1;
			}
		},
	},
});

export const { addOrRemoveProduct, incrementQuantity, decrementQuantity } =
	shopSlice.actions;
export default shopSlice.reducer;
