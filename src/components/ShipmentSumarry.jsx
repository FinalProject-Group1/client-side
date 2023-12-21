import PropTypes from 'prop-types';
import { toRupiah } from '../helpers/currency';

const ShipmentSummary = ({ textButton, onClick, dataProducts }) => {
	const getTotalPrice = () => {
		const totalPrice = dataProducts?.reduce((total, data) => {
			return total + data?.sellerproduct?.price * data.quantity;
		}, 0);
		return totalPrice;
	};

	return (
		<div className="w-full flex justify-center">
			<div className="w-full h-max shadow-lg rounded-lg border p-4">
				<h1 className="text-zinc-900 font-bold mb-2">Ringkasan Belanja</h1>
				{Boolean(dataProducts?.length) &&
					dataProducts.map((data) => {
						return (
							<div key={data.id} className="flex justify-between">
								<h1 className="text-gray-500 text-sm">
									{data?.sellerproduct?.product?.productName} {data.quantity}{' '}
									{data?.sellerproduct?.product?.unit}
								</h1>
								<h1 className="text-gray-500 text-sm">
									{toRupiah(data?.sellerproduct?.price * data?.quantity)}
								</h1>
							</div>
						);
					})}
				{textButton === 'Bayar' && (
					<div className="flex justify-between">
						<h1 className="text-gray-500 text-sm">Biaya Pengiriman</h1>
						<h1 className="text-gray-500 text-sm">Rp 9.000</h1>
					</div>
				)}
				<div className="h-[1px] bg-gray-400 my-3"></div>
				<div className="flex justify-between my-3">
					<h1 className="text-zinc-900 font-bold">Total Harga</h1>
					<h1 className="text-zinc-900 font-bold">
						{toRupiah(getTotalPrice() + 9000)}
					</h1>
				</div>
				<button
					onClick={onClick}
					className="w-full py-2 px-8 mt-2 bg-green-500 rounded-lg text-slate-50 font-bold hover:bg-green-600"
				>
					{textButton}
				</button>
			</div>
		</div>
	);
};

export default ShipmentSummary;

ShipmentSummary.propTypes = {
	textButton: PropTypes.string,
	onClick: PropTypes.func,
	dataProducts: PropTypes.array,
};
