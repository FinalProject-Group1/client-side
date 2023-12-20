import api from '../../api';

export const isLogin = () => {
	return getToken() ? true : false;
};

export const getToken = () => {
	return localStorage.getItem('access_token');
};

export const getRole = () => {
	return localStorage.getItem('role');
};

export const getProfileApi = async () => {
	console.log('trigerr profile api');
	const { data } = await api.get('/profile', {
		headers: {
			Authorization: `Bearer ${getToken()}`,
		},
	});
	// console.log('data profile api', data);
	return data;
};
