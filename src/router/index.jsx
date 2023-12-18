import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import OrdersList from '../components/seller-components/OrdersList';
import { redirect } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/seller',
		element: <Dashboard />,
		children: [
			{
				path: '',
				loader: () => redirect('/seller/transaction'),
			},
			{
				path: 'transaction',
				element: <OrdersList />,
			},
		],
	},
]);

export default router;
