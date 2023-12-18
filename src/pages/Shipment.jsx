import ShipmentProduct from '../components/ShipmentProduct';
import ShoppingSumarry from '../components/ShoppingSumarry';

const Shipment = () => {
	return (
		<div className="w-full min-h-screen gap-10 bg-slate-50 px-20 py-10">
			<div className="text-3xl font-bold text-zinc-900 mb-10">Checkout</div>
			<div className="w-full flex">
				<div className="w-2/3 flex-col">
					<div className="w-full flex-col items-center gap-4 leading-6">
						<h1 className="text-lg text-zinc-900 font-bold">
							Alamat Pengiriman
						</h1>
						<div className="h-[1px] bg-gray-300 my-3"></div>
						<h1 className="text-md text-zinc-900 font-bold">Buyer Name</h1>
						<h1 className=" text-zinc-900">089xxxxxxx</h1>
						<p className="text-zinc-900">Alamat</p>
						<div className="h-[1px] bg-gray-300 my-3"></div>
					</div>
					<div className="w-full flex flex-col gap-4 mt-6">
						<h1 className="text-xl font-bold text-zinc-900">Barang</h1>
						<div className="w-full h-36 flex">
							<ShipmentProduct />
						</div>
						<div className="w-full h-36 flex">
							<ShipmentProduct />
						</div>
					</div>
					<div className="w-full flex justify-between items-center mt-10 text-zinc-900 border p-4 rounded-lg shadow-lg">
						<h1 className="font-bold">Pengiriman</h1>
						<select className="select bg-slate-50 w-full border px-8 py-2 border-violet-primary max-w-xs text-violet-600 ring-0 rounded-xl">
							<option selected>LocalPride - Rp. 2.000</option>
						</select>
					</div>
				</div>
				<div className="w-1/3 pl-20">
					<ShoppingSumarry />
				</div>
			</div>
		</div>
	);
};

export default Shipment;
