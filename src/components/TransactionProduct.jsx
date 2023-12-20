import PropTypes from 'prop-types';
import { toRupiah } from '../helpers/currency';

const TransactionProduct = ({ data }) => {
	return (
		<div className="w-full flex flex-col gap-3">
			<div className="">
				<div className="h-[1px] bg-gray-300"></div>
			</div>
			<div className="w-full h-2/3 flex">
				<div className="w-full h-14 flex gap-4">
					<img
						src="/potato.jpg"
						alt=""
						className="h-full aspect-square rounded-lg"
					/>
					<div className="w-full h-full flex flex-row justify-between">
						<div className="flex-1 flex-col">
							<h5 className="text-lg font-medium text-slate-900">
								{data?.sellerproduct?.product?.productName}
							</h5>
							<p className="text-zinc-600">
								x {data?.quantity} {data?.sellerproduct?.product?.unit}
							</p>
						</div>
						<div className="flex items-center px-3">
							<p className="text-zinc-900 w-max ">
								{toRupiah(data?.sellerproduct?.price)}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TransactionProduct;

TransactionProduct.propTypes = {
	data: PropTypes.object,
};
