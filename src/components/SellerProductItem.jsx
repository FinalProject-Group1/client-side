const SellerProductItem = () => {
	return (
		<div className="w-full h-full flex justify-between p-2 rounded-lg backdrop-blur-xl border-[1px] border-violet-primary hover:scale-105 hover:bg-violet-100 hover:shadow-lg hover:shadow-violet-primary transition-all shadow-xl">
			<div className="w-1/2 flex gap-4">
				<img
					src="/potato.jpg"
					alt=""
					className="h-full aspect-square rounded-lg"
				/>
				<div className="w-full h-full flex flex-col justify-center">
					<h5 className="text-md font-bold text-slate-900">Bayam</h5>
					<p className="text-sm text-gray-500 mb-2">stock: 12 kg</p>
					<p className="text-red-primary font-medium">Rp 12.000 / kg</p>
				</div>
			</div>
			<div className="w-1/4 h-full flex gap-2 items-center justify-end px-4">
				<div className="px-[5px] py-[1px] font-bold bg-violet-600 text-slate-50 text-lg rounded-lg cursor-pointer leading-none">
					-
				</div>
				<div className="">
					<input
						type="text"
						name=""
						id=""
						value={0}
						className="bg-transparent outline-none w-[20px] text-center text-violet-800 underline"
					/>
				</div>
				<div className="px-1 py-[2px] font-bold bg-violet-600 text-slate-50 rounded-lg cursor-pointer leading-none">
					+
				</div>
			</div>
		</div>
	);
};

export default SellerProductItem;
