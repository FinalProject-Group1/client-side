const ShipmentProduct = () => {
	return (
		<div className="w-full h-full flex flex-col justify-between gap-2 p-3 rounded-lg backdrop-blur-xl border-[1px] border-gray-200 shadow-xl">
			<div className="w-full h-2/3 flex">
				<div className="w-1/2 flex gap-4">
					<img
						src="/potato.jpg"
						alt=""
						className="h-full aspect-square rounded-lg"
					/>
					<div className="w-full h-full flex flex-col justify-center">
						<h5 className="text-md font-bold text-slate-900">Bayam</h5>
						<p className="text-zinc-900">Rp 12.000 x 2 kg</p>
					</div>
				</div>
			</div>
			<div className="">
				<div className="h-[1px] bg-gray-300"></div>
			</div>
			<div className="w-full flex justify-between text-zinc-900 font-bold">
				<h1>Subtotal</h1>
				<h1>Rp 24.000</h1>
			</div>
		</div>
	);
};

export default ShipmentProduct;
