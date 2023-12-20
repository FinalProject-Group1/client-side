// import axios from 'axios';
// import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import api from '../../api';
import { useEffect, useState } from 'react';

export default function OrdersList() {
  const [transactions, setTransactions] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [dataSeller, setDataSeller] = useState('');

  // const { id } = useParams();
  const token = searchParams.get('token');

  const fetch = async () => {
    try {
      const { data } = await api.get('/invoices-seller', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDataSeller(data);
      const newData = data.seller.map((el) => {
        if (el.orderStatus === 'progress') {
          el.orderStatus = 'Di proses';
        } else if (el.orderStatus === 'shipment') {
          el.orderStatus = 'Di Kirim';
        } else {
          el.orderStatus = 'Telah di terima';
        }
        return el;
      });
      setTransactions(newData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <section id="orders-list" className="p-8 mb-10">
      <h1 className="text-xl font-bold mb-2">Daftar Pesanan</h1>
      <div className="overflow-x-auto"></div>
      {transactions.map((el, index) => {
        return (
          <div className="card bg-base-100 shadow mb-4" key={index}>
            <div className="card-body">
              <div className="grid lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-2 gap-4">
                <div className="grid grid-rows-2 gap-1">
                  <h2 className="card-title text-xs">Nomor Pesanan</h2>
                  <span>{el.OrderId}</span>
                </div>
                <div className="grid grid-rows-2 gap-1">
                  <h2 className="card-title text-xs">Tanggal</h2>
                  <span>19/12/2024</span>
                </div>
                <div className="grid grid-rows-2 gap-1">
                  <h2 className="card-title text-xs">Nama Toko</h2>
                  <span>{dataSeller.shopName}</span>
                </div>
                <div className="grid grid-rows-2 gap-1">
                  <h2 className="card-title text-xs">Total Pembayaran</h2>
                  <span>Rp{el.pendingAmount}</span>
                </div>
                <div className="grid grid-rows-2 gap-1">
                  <h2 className="card-title text-xs">Status Pembayaran</h2>
                  <span>{el.paymentStatus === 'paid' ? 'Lunas' : 'Belum dibayar'}</span>
                </div>
                <div className="grid grid-rows-2 gap-1">
                  <h2 className="card-title text-xs">Status Pesanan</h2>
                  <span>{el.orderStatus}</span>
                </div>
                <div className="grid grid-rows-2 gap-1">
                  <Link to="/seller/transaction/:id">
                    <button className="w-full btn btn-xs bg-green-primary truncate md:text-clip">Lihat Detail</button>
                  </Link>
                  <button className="w-full btn btn-xs bg-yellow-primary truncate md:text-clip">Kirim Pesanan</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
