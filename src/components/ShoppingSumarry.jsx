import PropTypes from 'prop-types';
import { toRupiah } from '../helpers/currency';
import { useSelector } from 'react-redux';

const ShoppingSumarry = ({ textButton }) => {
	const selectedProducts = useSelector(({ shop }) => shop.selectedProducts);

	return (
		<div className="w-full flex justify-center">
			<div className="w-full h-max shadow-lg rounded-lg border p-4">
				<h1 className="text-zinc-900 font-bold mb-2">Ringkasan Belanja</h1>
				{Boolean(selectedProducts.length) &&
					selectedProducts.map((data) => {
						return (
							<div key={data.id} className="flex justify-between">
								<h1 className="text-gray-500 text-sm">
									{data.product?.productName} {data.quantity}{' '}
									{data.product?.unit}
								</h1>
								<h1 className="text-gray-500 text-sm">
									{toRupiah(data.price)}
								</h1>
							</div>
						);
					})}
				{textButton === 'Bayar' && (
					<div className="flex justify-between">
						<h1 className="text-gray-500 text-sm">Biaya Pengiriman</h1>
						<h1 className="text-gray-500 text-sm">Rp 2.000</h1>
					</div>
				)}
				<div className="h-[1px] bg-gray-400 my-3"></div>
				<div className="flex justify-between my-3">
					<h1 className="text-zinc-900 font-bold">Total Harga</h1>
					<h1 className="text-zinc-900 font-bold">Rp 24.000</h1>
				</div>
				<button className="w-full py-2 px-8 mt-2 bg-violet-500 rounded-lg text-slate-50 font-bold hover:bg-violet-600">
					{textButton}
				</button>
			</div>
		</div>
	);
};

export default ShoppingSumarry;

ShoppingSumarry.propTypes = {
	textButton: PropTypes.string,
};
