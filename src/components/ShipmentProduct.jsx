import PropTypes from 'prop-types';
import { toRupiah } from '../helpers/currency';

const ShipmentProduct = ({ data }) => {
	return (
		<div className="w-full h-full flex flex-col justify-between gap-2 p-3 rounded-lg backdrop-blur-xl border-[1px] border-gray-200 shadow-xl">
			<div className="w-full h-2/3 flex">
				<div className="w-1/2 flex gap-4">
					<img
						src={data?.sellerproduct?.product?.imageUrl}
						alt=""
						className="h-full aspect-square rounded-lg"
					/>
					<div className="w-full h-full flex flex-col justify-center">
						<h5 className="text-md font-bold text-slate-900">
							{data?.sellerproduct?.product?.productName}
						</h5>
						<p className="text-zinc-900">
							{toRupiah(data?.sellerproduct?.price)} x {data?.quantity}{' '}
							{data?.sellerproduct?.product?.unit}
						</p>
					</div>
				</div>
			</div>
			<div className="">
				<div className="h-[1px] bg-gray-300"></div>
			</div>
			<div className="w-full flex justify-between text-zinc-900 font-bold">
				<h1>Subtotal</h1>
				<h1>{toRupiah(data?.sellerproduct?.price * data?.quantity)}</h1>
			</div>
		</div>
	);
};

export default ShipmentProduct;

ShipmentProduct.propTypes = {
	data: PropTypes.object,
};
