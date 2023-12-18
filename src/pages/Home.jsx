import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import SideBar from '../components/SideBar';
import ListSellerProducts from './ListSellerProducts';
import api from '../api';

const Home = () => {
	const [products, setProducts] = useState([]);
	const [category, setCategory] = useState('');

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const { data } = await api.get('/products?category=' + category);
				// console.log(data);
				setProducts(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchProducts();
	}, [category]);

	return (
		<div className="w-full min-h-screen flex flex-row bg-slate-50">
			<div className="w-1/4 h-full">
				<SideBar setCategory={setCategory} />
			</div>
			<div className="w-full h-full grid grid-cols-6 gap-14 p-10 justify-start items-start flex-wrap">
				{products?.map((data) => {
					return <ProductCard key={data.id} data={data} />;
				})}
			</div>
			{/* <ListSellerProducts /> */}
		</div>
	);
};

export default Home;
