import axios from 'axios';

export default axios.create({
	baseURL: 'http://localhost:3000',
	// baseURL: 'https://5dbf-103-144-175-166.ngrok-free.app',
});
