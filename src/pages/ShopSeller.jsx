import { useEffect, useState } from 'react';
import SellerProductItem from '../components/SellerProductItem';
import ShoppingSumarry from '../components/ShoppingSummary';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';
import { useSelector } from 'react-redux';
import { getToken } from '../features/user/actions';

const ShopSeller = () => {
	const navigate = useNavigate();
	const { sellerId } = useParams();
	const [seller, setSeller] = useState({});
	const selectedProducts = useSelector((state) => state.shop.selectedProducts);

	useEffect(() => {
		const fetchSellerDetail = async () => {
			try {
				const { data } = await api.get(`/user/${sellerId}`);
				setSeller(data);
			} catch (error) {
				console.log(error.response.data.message);
			}
		};
		fetchSellerDetail();
	}, []);

	// console.log(selectedProducts);

	const handleOnBuy = async () => {
		try {
			// const test = selectedProducts.map((product) => {
			// 	return {
			// 		id: product.id,
			// 		quantity: product.quantity,
			// 	};
			// });
			// console.log(test, 'testtttt');
			if (!selectedProducts.length) {
				return;
			}

			if (!getToken()) {
				navigate('/login');
			}

			const { data } = await api.post(
				`/order`,
				{
					SellerId: sellerId,
					products: selectedProducts.map((product) => {
						return {
							SellerProductId: product.id,
							quantity: product.quantity,
						};
					}),
				},
				{
					headers: {
						Authorization: `Bearer ${getToken()}`,
					},
				}
			);
			// console.log(data, 'create invoice');
			navigate(`/checkout/${data.invoiceId}`);
		} catch (error) {
			console.log(error.response.data.message);
		}
	};

	return (
		<div className="w-full min-h-screen gap-10 bg-slate-50">
			<div className="w-full flex items-center gap-4 px-10 py-6">
				<div className=" w-16 h-16 bg-violet-primary rounded-full aspect-square"></div>
				<div>
					<h1 className="text-xl text-zinc-900 font-bold">{seller.shopName}</h1>
					<h1 className=" text-zinc-900">
						{seller.fullname} - {seller.phoneNumber}
					</h1>
					<p className="text-zinc-900">{seller.address}</p>
				</div>
			</div>
			<div className="w-full flex py-8">
				<div className="w-2/3 px-10 flex flex-col gap-4">
					{seller?.products?.map((data) => {
						return (
							<div key={data.id} className="w-full h-24">
								<SellerProductItem data={data} />
							</div>
						);
					})}
				</div>
				<div className="w-1/3 flex pr-20 justify-center">
					<ShoppingSumarry textButton={'Beli'} onClick={handleOnBuy} />
				</div>
			</div>
		</div>
	);
};

export default ShopSeller;
