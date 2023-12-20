import api from '../../api';
import { getToken } from '../user/actions';

export const getBuyerTransaction = async (orderStatus) => {
	console.log('trigerr buyer transaction api', orderStatus);
	const { data } = await api.get(`/invoices-buyer?orderStatus=${orderStatus}`, {
		headers: {
			Authorization: `Bearer ${getToken()}`,
		},
	});
	console.log('data buyer transaction api', data);
	return data;
};
