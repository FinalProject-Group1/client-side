import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: {
			access_token: '',
		},
	},
	reducers: {},
});

// export const { isLogin } = userSlice.actions;
export default userSlice.reducer;
