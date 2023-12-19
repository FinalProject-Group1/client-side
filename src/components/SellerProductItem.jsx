import PropTypes from 'prop-types';
import { toRupiah } from '../helpers/currency';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	addOrRemoveProduct,
	decrementQuantity,
	incrementQuantity,
} from '../features/shop';

const SellerProductItem = ({ data }) => {
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();

	// console.log(quantity, 'quantity');

	return (
		<div className="w-full h-full flex">
			<div className="w-full h-full flex justify-between p-2 rounded-lg backdrop-blur-xl border-[1px] border-violet-primary hover:scale-105 hover:bg-violet-100 hover:shadow-lg hover:shadow-violet-primary transition-all shadow-xl">
				<div className="w-1/2 flex gap-4">
					<img
						src="/potato.jpg"
						alt=""
						className="h-full aspect-square rounded-lg"
					/>
					<div className="w-full h-full flex flex-col justify-center">
						<h5 className="text-md font-bold text-slate-900">
							{data.product.productName}
						</h5>
						<p className="text-sm text-gray-500 mb-2">
							stock: {data.stock} {data.product.unit}
						</p>
						<p className="text-red-primary font-medium">
							{toRupiah(data.price)} / {data.product.unit}
						</p>
					</div>
				</div>
				<div className="w-1/4 h-full flex gap-2 items-center justify-end px-4">
					<button
						onClick={() => {
							dispatch(decrementQuantity({ data }));
							setQuantity((prev) => {
								if (prev === 1) return 1;
								return prev - 1;
							});
						}}
						className={`px-[5px] py-[1px] font-bold text-slate-50 text-lg rounded-lg cursor-pointer leading-none ${
							quantity === 1 ? 'disabled bg-violet-300' : 'bg-violet-600'
						}`}
					>
						-
					</button>
					<div className="">
						<input
							type="text"
							name=""
							id=""
							value={quantity}
							className="bg-transparent outline-none w-[20px] text-center text-violet-800 underline"
						/>
					</div>
					<button
						onClick={() => {
							dispatch(incrementQuantity({ data }));
							setQuantity((prev) => {
								if (prev === data.stock) return data.stock;
								return prev + 1;
							});
						}}
						className={`px-1 py-[2px] font-bold bg-violet-600 text-slate-50 rounded-lg cursor-pointer leading-none ${
							quantity === data.stock
								? 'disabled bg-violet-300'
								: 'bg-violet-600'
						}`}
					>
						+
					</button>
				</div>
			</div>
			{/* checkbox */}
			<div className="w-1/6 h-full flex items-center justify-center">
				<input
					onClick={() => {
						dispatch(addOrRemoveProduct({ data, quantity }));
					}}
					id="purple-checkbox"
					type="checkbox"
					value=""
					className="w-1/3 h-1/3"
				/>
			</div>
		</div>
	);
};

export default SellerProductItem;

SellerProductItem.propTypes = {
	data: PropTypes.object,
};
