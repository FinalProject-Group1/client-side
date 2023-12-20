
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import OrdersList from '../components/seller-components/OrdersList';
import OrderDetails from '../components/seller-components/OrderDetails';
import AddProduct from '../components/seller-components/AddProduct';
import ProductsList from '../components/seller-components/ProductsList';
import EditProduct from '../components/seller-components/EditProduct';
import SellerEditAccount from '../components/seller-components/SellerEditAccount';
import { redirect } from 'react-router-dom';
import ListSellerProducts from '../pages/ListSellerProducts';
import ShopSeller from '../pages/ShopSeller';
import Shipment from '../pages/Shipment';

const router = createBrowserRouter([
	{
		path: '/',
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: '/products/:productId',
				element: <ListSellerProducts />,
			},
			{
				path: 'shop/:sellerId',
				element: <ShopSeller />,
			},
			{
				path: 'checkout/:invoiceId',
				element: <Shipment />,
			},
			{
				path: 'transaction',
				element: <OrdersList />,
			},
		],
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
			{
				path: 'transaction/:id',
				element: <OrderDetails />,
			},
			{
				path: 'add-product',
				element: <AddProduct />,
			},
			{
				path: 'products',
				element: <ProductsList />,
			},
			{
				path: 'products/:id',
				element: <EditProduct />,
			},
			{
				path: 'account',
				element: <SellerEditAccount />,
			},
		],
	},
]);

export default router;
