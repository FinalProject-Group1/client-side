import PropTypes from 'prop-types';
import { toRupiah } from '../helpers/currency';

const SellerProductCard = ({ data }) => {
	return (
		<div className="w-full h-full flex justify-between p-2 rounded-lg backdrop-blur-xl border-[1px] border-green-primary hover:shadow-sm hover:shadow-green-primary transition-all shadow-xl">
			<div className="w-1/2 flex gap-4">
				<img
					src={data?.product?.imageUrl}
					alt=""
					className="h-full aspect-square rounded-lg"
				/>
				<div className="w-full h-full flex flex-col justify-center">
					<h5 className="text-sm font-medium text-slate-900">
						{data.seller.shopName}{' '}
						<span className=" font-normal">- {data.seller.address}</span>
					</h5>
					<p className="text-sm text-gray-500 mb-2">
						stock: {data.stock} {data.product.unit}
					</p>
					<p className="text-red-primary font-medium">
						{toRupiah(data.price)} / {data.product.unit}
					</p>
				</div>
			</div>
			<div className="w-1/4 h-full flex items-center justify-end px-4">
				<button className="py-2 px-8 bg-green-primary rounded-lg text-slate-50 hover:bg-green-600 hover:border hover:border-green-primary">
					Beli
				</button>
			</div>
		</div>
	);
};

export default SellerProductCard;

SellerProductCard.propTypes = {
	data: PropTypes.object,
};
