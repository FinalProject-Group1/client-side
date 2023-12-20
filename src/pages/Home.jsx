import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import SideBar from '../components/SideBar';
// import ListSellerProducts from './ListSellerProducts';
import api from '../api';
import { Link, useParams, useSearchParams } from 'react-router-dom';

const Home = () => {
	const [searchParams, setSearchParams] = useSearchParams('category');
	const [products, setProducts] = useState([]);
	// const [category, setCategory] = useState('');

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const { data } = await api.get(
					'/products?category=' + searchParams.get('category')
				);
				// console.log(data);
				setProducts(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchProducts();
	}, [searchParams]);

	// console.log(profileData, 'profile data');
	console.log(searchParams.get('category'), 'params');

	return (
		<div className="w-full grid grid-cols-6 gap-14 p-10 justify-start items-start flex-wrap">
			{Boolean(products.length) &&
				products?.map((data) => {
					return (
						<Link to={`/products/${data.id}`} key={data.id}>
							<ProductCard data={data} />
						</Link>
					);
				})}
		</div>
		// <div className="w-full min-h-screen flex flex-row bg-slate-50">
		// 	{/* <div className="w-1/4 h-full">
		// 		<SideBar setCategory={setCategory} />
		// 	</div> */}
		// 	<div className="w-full h-full grid grid-cols-6 gap-14 p-10 justify-start items-start flex-wrap">
		// 		{Boolean(products.length) &&
		// 			products?.map((data) => {
		// 				return (
		// 					<Link to={`/products/${data.id}`} key={data.id}>
		// 						<ProductCard data={data} />
		// 					</Link>
		// 				);
		// 			})}
		// 	</div>
		// 	{/* <ListSellerProducts /> */}
		// </div>
	);
};

export default Home;
