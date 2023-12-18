import SellerProductCard from '../components/SellerProductCard';

const ListSellerProducts = () => {
	return (
		<div className="w-full min-h-screen px-10 py-6 flex flex-col gap-4">
			<div>
				<h1 className="text-3xl font-bold">Potato</h1>
			</div>
			<div className="w-full flex justify-between relative my-6">
				<div className="absolute top-[34px] w-full h-1 bg-violet-primary rounded-full"></div>
				<div className="flex flex-col items-start gap-1">
					<p className="font-medium">Murah</p>
					<div className="w-4 h-4 bg-violet-primary rounded-full"></div>
					<p className="font-medium text-red-primary">Rp 12.000</p>
				</div>
				<div className="flex flex-col items-center gap-1">
					<p className="font-medium">Normal</p>
					<div className="w-4 h-4 bg-violet-primary rounded-full"></div>
					<p className="font-medium text-red-primary">Rp 15.000</p>
				</div>
				<div className="flex flex-col items-end gap-1">
					<p className="font-medium">Mahal</p>
					<div className="w-4 h-4 bg-violet-primary rounded-full"></div>
					<p className="font-medium text-red-primary">Rp 17.000</p>
				</div>
			</div>
			<div className="w-full h-24">
				<SellerProductCard />
			</div>
			<div className="w-full h-24">
				<SellerProductCard />
			</div>
			<div className="w-full h-24">
				<SellerProductCard />
			</div>
		</div>
	);
};

export default ListSellerProducts;
