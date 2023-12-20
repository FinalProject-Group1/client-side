import api from '../api';
import { getToken } from '../features/user/actions';
import { toRupiah } from '../helpers/currency';
import TransactionProduct from './TransactionProduct';
import PropTypes from 'prop-types';

const TransactionCard = ({ data, fetchTransactions }) => {
	const getTotalPrice = () => {
		const totalPrice = data?.OrderItems?.reduce((total, orderItem) => {
			return total + orderItem?.sellerproduct?.price * orderItem?.quantity;
		}, 0);
		return totalPrice;
	};

	const getStatus = (status) => {
		switch (status) {
			case 'progress':
				return 'Sedang Diproses';
			case 'shipment':
				return 'Dalam Perjalanan';
			case 'done':
				return 'Selesai';
			case 'cancel':
				return 'Dibatalkan';
			default:
				break;
		}
	};

	const handleOnReceive = async () => {
		try {
			const response = await api.put(
				'/buyer-order',
				{
					SellerId: data?.SellerId,
					InvoiceId: data?.id,
				},
				{
					headers: {
						Authorization: `Bearer ${getToken()}`,
					},
				}
			);
			await fetchTransactions();
			console.log(response.data, 'update status invoice');
		} catch (error) {
			console.log(error.response.data.message);
		}
	};

	// console.log(data);

	return (
		<div className="w-full h-full flex flex-col justify-between gap-3 p-6 rounded-lg backdrop-blur-xl border-[1px] border-gray-200 shadow-xl">
			<div className="flex gap-3 items-center">
				<svg
					fill="currentColor"
					viewBox="0 0 16 16"
					height="1.2em"
					width="1.2em"
				>
					<path d="M2.97 1.35A1 1 0 013.73 1h8.54a1 1 0 01.76.35l2.609 3.044A1.5 1.5 0 0116 5.37v.255a2.375 2.375 0 01-4.25 1.458A2.371 2.371 0 019.875 8 2.37 2.37 0 018 7.083 2.37 2.37 0 016.125 8a2.37 2.37 0 01-1.875-.917A2.375 2.375 0 010 5.625V5.37a1.5 1.5 0 01.361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 002.75 0 .5.5 0 011 0 1.375 1.375 0 002.75 0 .5.5 0 011 0 1.375 1.375 0 102.75 0V5.37a.5.5 0 00-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 001 5.37v.255a1.375 1.375 0 002.75 0 .5.5 0 011 0zM1.5 8.5A.5.5 0 012 9v6h1v-5a1 1 0 011-1h3a1 1 0 011 1v5h6V9a.5.5 0 011 0v6h.5a.5.5 0 010 1H.5a.5.5 0 010-1H1V9a.5.5 0 01.5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3zm3 0h-2v3h2v-3z" />
				</svg>
				<p className="font-bold">{data?.seller?.shopName}</p>
			</div>
			<div className="w-full h-full flex flex-col justify-between gap-3">
				{data &&
					data?.OrderItems.map((data) => {
						return <TransactionProduct key={data?.id} data={data} />;
					})}
			</div>
			<div className="w-full flex justify-between pt-3 pr-3  border-t border-t-gray-300">
				<div className="flex-col">
					<div className="text-sm">
						Ongkos Kirim : <span className="font-medium">Rp 9.000</span>
					</div>
					{/* <div className="text-sm">LocalPride</div> */}
				</div>
				<div className="flex flex-col items-end gap-4 ">
					<div className="flex justify-end items-center gap-3">
						<p>Total Pesanan: </p>
						<p className="text-xl text-red-500">
							{toRupiah(getTotalPrice() + 9000)}
						</p>
					</div>
					{data?.orderStatus === 'shipment' ? (
						<button
							onClick={handleOnReceive}
							className="btn px-6 bg-green-primary hover:bg-green-700 text-slate-50 rounded-md"
						>
							Diterima
						</button>
					) : (
						<p
							className={`text-sm font-bold ${
								data?.orderStatus === 'done'
									? 'text-green-primary'
									: data?.orderStatus === 'cancel' && 'text-red-500'
							}`}
						>
							{getStatus(data?.orderStatus)}
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default TransactionCard;

TransactionCard.propTypes = {
	data: PropTypes.object,
	fetchTransactions: PropTypes.func,
};
