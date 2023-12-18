import SideBar from '../components/SideBar';
import ListSellerProducts from './ListSellerProducts';
import ShopSeller from './ShopSeller';

const Home = () => {
	return (
		<div className="w-full min-h-screen flex flex-row bg-slate-50">
			{/* <div className="w-1/4">
				<SideBar />
			</div> */}
			{/* <div className="w-full h-full grid grid-cols-5 gap-20 p-10 justify-start items-start flex-wrap">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div> */}
			{/* <ListSellerProducts /> */}
			<ShopSeller />
		</div>
	);
};

export default Home;
