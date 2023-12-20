import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		detail: {},
	},
	reducers: {},
});

// export const { isLogin } = userSlice.actions;
export default userSlice.reducer;
