import { useEffect, useState } from 'react';
import SellerProductItem from '../components/SellerProductItem';
import ShoppingSumarry from '../components/ShoppingSumarry';
import { useParams } from 'react-router-dom';
import api from '../api';
import { useSelector } from 'react-redux';

const ShopSeller = () => {
	const { sellerId } = useParams();
	const [seller, setSeller] = useState({});
	const selectedProducts = useSelector((state) => state.shop.selectedProducts);

	useEffect(() => {
		const fetchSellerDetail = async () => {
			try {
				const { data } = await api.get(`/user/${sellerId}`);
				setSeller(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchSellerDetail();
	}, []);

	console.log(selectedProducts);

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
					<ShoppingSumarry
						textButton={'Beli'}
						// selectedProducts={selectedProducts}
					/>
				</div>
			</div>
		</div>
	);
};

export default ShopSeller;
