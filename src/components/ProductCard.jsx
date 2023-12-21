import PropTypes from 'prop-types';

const ProductCard = ({ data }) => {
	return (
		<div className="w-full h-[200px] text-center flex flex-col gap-2 cursor-pointer">
			<img
				src={data?.imageUrl}
				// src="/potato.jpg"
				alt=""
				className="rounded-full aspect-square hover:scale-110 hover:border-4 hover:border-green-primary transition-all"
			/>
			<p className="text-md font-medium text-zinc-900">
				{/* {data.category} */}
				{data.productName}
			</p>
		</div>
	);
};

export default ProductCard;

ProductCard.propTypes = {
	data: PropTypes.object,
};
