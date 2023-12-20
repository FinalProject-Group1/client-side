import TransactionCard from '../components/TransactionCard';
import { useEffect, useState } from 'react';
import { getBuyerTransaction } from '../features/transaction/actions';

const Transaction = () => {
	const [transactions, setTransactions] = useState({});
	const [status, setStatus] = useState('');

	const fetchTransactions = async () => {
		try {
			const data = await getBuyerTransaction(status);
			setTransactions(data);
		} catch (error) {
			console.log(error.response.data.message);
		}
	};

	useEffect(() => {
		fetchTransactions();
	}, [status]);

	// console.log(transactions?.buyer?.length, 'buyer transaction');
	// console.log(transactions, 'buyer transaction');

	return (
		<div className="w-full min-h-screen">
			<div className="w-full h-full px-32 py-10">
				<div className="flex gap-8 mb-10">
					<button
						onClick={() => setStatus('')}
						className={`btn btn-sm rounded-md px-10  text-slate-50 ${
							!status
								? 'bg-green-primary hover:bg-green-700'
								: 'text-zinc-500 border border-gray-300'
						}`}
					>
						Semua
					</button>
					<button
						onClick={() => setStatus('progress')}
						className={`btn btn-sm rounded-md px-10  text-slate-50 ${
							status === 'progress'
								? 'bg-green-primary hover:bg-green-700'
								: 'text-zinc-500 border border-gray-300'
						}`}
					>
						Diproses
					</button>
					<button
						onClick={() => setStatus('shipment')}
						className={`btn btn-sm rounded-md px-10  text-slate-50 ${
							status === 'shipment'
								? 'bg-green-primary hover:bg-green-700'
								: 'text-zinc-500 border border-gray-300'
						}`}
					>
						Dalam Perjalanan
					</button>
					<button
						onClick={() => setStatus('done')}
						className={`btn btn-sm rounded-md px-10  text-slate-50 ${
							status === 'done'
								? 'bg-green-primary hover:bg-green-700'
								: 'text-zinc-500 border border-gray-300'
						}`}
					>
						Selesai
					</button>
					<button
						onClick={() => setStatus('cancel')}
						className={`btn btn-sm rounded-md px-10  text-slate-50 ${
							status === 'cancel'
								? 'bg-green-primary hover:bg-green-700'
								: 'text-zinc-500 border border-gray-300'
						}`}
					>
						Dibatalkan
					</button>
				</div>
				<div className="w-full flex flex-col gap-8">
					{transactions?.buyer &&
						transactions?.buyer.map((data) => {
							return (
								<TransactionCard
									key={data?.id}
									data={data}
									fetchTransactions={fetchTransactions}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default Transaction;
