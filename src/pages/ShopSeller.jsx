import SellerProductItem from '../components/SellerProductItem';
import ShoppingSumarry from '../components/ShoppingSumarry';

const ShopSeller = () => {
	return (
		<div className="w-full min-h-screen gap-10 bg-slate-50">
			<div className="w-full flex items-center gap-4 px-10 py-6">
				<div className=" w-14 h-14 bg-violet-primary rounded-full aspect-square"></div>
				<div>
					<h1 className="text-xl text-zinc-900 font-bold">Shop Name</h1>
					<h1 className=" text-zinc-900">Seller Name - 089xxxxxxx</h1>
					<p className="text-zinc-900">Alamat</p>
				</div>
			</div>
			<div className="w-full flex py-8">
				<div className="w-2/3 px-10 flex flex-col gap-4">
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
				<div className="w-1/3 flex pr-20 justify-center">
					<ShoppingSumarry />
				</div>
			</div>
		</div>
	);
};

export default ShopSeller;
