import { createSlice } from '@reduxjs/toolkit';
// import { getProfileApi } from './actions';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		profile: {},
	},
	reducers: {
		// setProfile: (state, action) => {
		// 	state.profile = action.payload;
		// },
	},
});

// export const { setProfile } = userSlice.actions;

// export const profile = () => {
// 	return async (dispatch) => {
// 		console.log('trigerr profile slice');
// 		const data = await getProfileApi();
// 		dispatch(setProfile(data));
// 	};
// };
export default userSlice.reducer;
