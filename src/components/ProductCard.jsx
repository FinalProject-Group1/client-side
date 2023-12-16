const ProductCard = () => {
	return (
		<div className="w-full h-[200px] text-center flex flex-col gap-2 cursor-pointer">
			<img
				src="/potato.jpg"
				alt=""
				className="rounded-full aspect-square hover:scale-110 hover:border-4 hover:border-green-primary transition-all"
			/>
			<p className="text-xl font-medium">Potato</p>
		</div>
	);
};

export default ProductCard;
