import { useParams } from 'react-router-dom';
import SellerProductCard from '../components/SellerProductCard';
import { useEffect, useState } from 'react';
import api from '../api';
import { toRupiah } from '../helpers/currency';
import { Link } from 'react-router-dom';

const ListSellerProducts = () => {
	const { productId } = useParams();
	const [products, setProducts] = useState([]);
	const [product, setProduct] = useState({});

	useEffect(() => {
		const fetchProductsSeller = async () => {
			try {
				const { data } = await api.get(
					'/seller-products?productId=' + productId
				);
				setProducts(data);
			} catch (error) {
				console.log(error);
			}
		};
		const fetchCurrentProduct = async () => {
			try {
				const { data } = await api.get(`/products/${productId}`);
				setProduct(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchCurrentProduct();
		fetchProductsSeller();
	}, []);

	// console.log(products);
	// console.log(product);

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
					<p className="font-medium text-red-primary">
						{toRupiah(product?.HER)}
					</p>
				</div>
				<div className="flex flex-col items-center gap-1">
					<p className="font-medium">Normal</p>
					<div className="w-4 h-4 bg-violet-primary rounded-full"></div>
					<p className="font-medium text-red-primary">
						{toRupiah((product?.HER + product?.HET) / 2)}
					</p>
				</div>
				<div className="flex flex-col items-end gap-1">
					<p className="font-medium">Mahal</p>
					<div className="w-4 h-4 bg-violet-primary rounded-full"></div>
					<p className="font-medium text-red-primary">
						{toRupiah(product?.HET)}
					</p>
				</div>
			</div>
			{products.map((data) => {
				return (
					<Link
						to={`/shop/${data.SellerId}`}
						key={data.id}
						className="w-full h-24"
					>
						<SellerProductCard data={data} />
					</Link>
				);
			})}
		</div>
	);
};

export default ListSellerProducts;
