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
		<div className="w-full min-h-screen gap-10 pt-24">
			<div className="w-full flex items-center gap-4 px-10 py-6">
				<div className=" w-16 h-16 bg-green-primary rounded-full aspect-square flex justify-center items-center">
					<svg
						fill="currentColor"
						viewBox="0 0 16 16"
						height="2.5em"
						width="2.5em"
					>
						<path d="M2.97 1.35A1 1 0 013.73 1h8.54a1 1 0 01.76.35l2.609 3.044A1.5 1.5 0 0116 5.37v.255a2.375 2.375 0 01-4.25 1.458A2.371 2.371 0 019.875 8 2.37 2.37 0 018 7.083 2.37 2.37 0 016.125 8a2.37 2.37 0 01-1.875-.917A2.375 2.375 0 010 5.625V5.37a1.5 1.5 0 01.361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 002.75 0 .5.5 0 011 0 1.375 1.375 0 002.75 0 .5.5 0 011 0 1.375 1.375 0 102.75 0V5.37a.5.5 0 00-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 001 5.37v.255a1.375 1.375 0 002.75 0 .5.5 0 011 0zM1.5 8.5A.5.5 0 012 9v6h1v-5a1 1 0 011-1h3a1 1 0 011 1v5h6V9a.5.5 0 011 0v6h.5a.5.5 0 010 1H.5a.5.5 0 010-1H1V9a.5.5 0 01.5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3zm3 0h-2v3h2v-3z" />
					</svg>
				</div>
				<div>
					<h1 className="text-xl text-zinc-900 font-bold">{seller.shopName}</h1>
					<h1 className=" text-zinc-900">{seller.fullname}</h1>
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
