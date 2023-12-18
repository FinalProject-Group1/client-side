import SellerProductItem from '../components/SellerProductItem';

const ShopSeller = () => {
	return (
		<div className="w-full min-h-screen gap-10">
			<div className="w-full flex items-center gap-4 px-10 py-6">
				<div className=" w-14 h-14 bg-violet-primary rounded-full aspect-square"></div>
				<div>
					<h1 className="text-xl text-zinc-900 font-bold">Shop Name</h1>
					<h1 className=" text-zinc-900">Seller Name - 089xxxxxxx</h1>
					<p className="text-zinc-900">Alamat</p>
				</div>
			</div>
			<div className="w-full flex">
				<div className="w-2/3 px-10 py-6 flex flex-col gap-4">
					<div className="w-full h-24 flex">
						<SellerProductItem />
						<div className="w-1/6 h-full flex items-center justify-center">
							<input
								id="purple-checkbox"
								type="checkbox"
								value=""
								className="w-1/3 h-1/3"
							></input>
						</div>
					</div>
					<div className="w-full h-24 flex">
						<SellerProductItem />
						<div className="w-1/6 h-full flex items-center justify-center">
							<input
								id="purple-checkbox"
								type="checkbox"
								value=""
								className="w-1/3 h-1/3"
							></input>
						</div>
					</div>
					<div className="w-full h-24 flex">
						<SellerProductItem />
						<div className="w-1/6 h-full flex items-center justify-center">
							<input
								id="purple-checkbox"
								type="checkbox"
								value=""
								className="w-1/3 h-1/3"
							></input>
						</div>
					</div>
				</div>
				<div className="w-1/3 flex justify-center py-6">
					<div className="w-3/4 h-max shadow-lg rounded-lg border p-4">
						<h1 className="text-zinc-900 font-bold mb-2">Ringkasan Belanja</h1>
						<div className="flex justify-between">
							<h1 className="text-gray-500 text-sm">Kentang 2 kg</h1>
							<h1 className="text-gray-500 text-sm">Rp 12.000</h1>
						</div>
						<div className="flex justify-between">
							<h1 className="text-gray-500 text-sm">Bayam 2 ikat</h1>
							<h1 className="text-gray-500 text-sm">Rp 12.000</h1>
						</div>
						<div className="h-[1px] bg-gray-400 my-3"></div>
						<div className="flex justify-between my-3">
							<h1 className="text-zinc-900 font-bold">Total Harga</h1>
							<h1 className="text-zinc-900 font-bold">Rp 24.000</h1>
						</div>
						<button className="w-full py-2 px-8 mt-2 bg-violet-500 rounded-lg text-slate-50 font-bold hover:bg-violet-600">
							Beli
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShopSeller;
