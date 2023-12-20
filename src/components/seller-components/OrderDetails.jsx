import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import api from '../../api';

export default function OrderDetails() {
  const [transactions, setTransactions] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const [orderStatus, setOrderStatus] = useState('Di proses');
  const [subTotal, setSubTotal] = useState(0);
  const { id } = useParams();
  const token = searchParams.get('token');

  const fetch = async () => {
    setSubTotal(0);
    try {
      const { data } = await api.get(`/invoice/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      setTransactions(data);
      if (data.orderStatus === 'progress') {
        setOrderStatus('Di proses');
      } else if (data.orderStatus === 'shipment') {
        setOrderStatus('Sedang di kirim');
      } else if (data.orderStatus === 'cancel') {
        setOrderStatus('Di batalkan');
      } else {
        setOrderStatus('Telah di terima');
      }
      let resultPrice = 0;
      data.OrderItems.forEach((el) => {
        resultPrice = resultPrice + el.sellerproduct.price * el.quantity;
      });
      setSubTotal(resultPrice);
    } catch (error) {
      console.log(error);
    }
  };

  const changeStatus = async () => {
    try {
      const { data } = await api.put(
        '/seller-order',
        { BuyerId: transactions.buyer.id, InvoiceId: transactions.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeStatusCancel = async () => {
    try {
      const { data } = await api.put(
        '/seller-order-cancel',
        { BuyerId: transactions.buyer.id, InvoiceId: transactions.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  async function handleChangeStatus() {
    await changeStatus();
    await fetch();
  }
  async function handleChangeStatusCancel() {
    await changeStatusCancel();
    await fetch();
  }
  return (
    <section id="order-details" className="p-8 mb-10">
      <h1 className="text-xl font-bold mb-3">Details Pesanan</h1>
      <div className="mb-3">
        Status Pesanan: <span className="font-bold">{orderStatus}</span>
        <button className="btn btn-xs bg-yellow-primary ml-3" onClick={handleChangeStatus}>
          Kirim Pesanan
        </button>
        <button className="btn btn-xs bg-red-primary ml-3" onClick={handleChangeStatusCancel}>
          Batalkan Pesanan
        </button>
      </div>
      <div className="grid lg:grid-cols-2 gap-3">
        <div className="card-normal bg-gray-100 rounded">
          <div className="card-body">
            <h2 className="card-title text-lg">Informasi Pesanan</h2>
            {transactions?.OrderItems?.map((el, index) => {
              return (
                <div className="grid grid-cols-4 gap-3 text-sm" key={index}>
                  <p>{el.sellerproduct.product.productName}</p>
                  <p className="grid justify-items-end">Rp{el.sellerproduct.price}</p>
                  <p className="grid justify-items-center">x {el.quantity}</p>
                  <p className="grid justify-items-end">Rp{el.sellerproduct.price * el.quantity}</p>
                </div>
              );
            })}
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p>Subtotal</p>
              <p className="grid justify-items-end">Rp{subTotal}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p>Ongkos Kirim</p>
              <p className="grid justify-items-end">Rp9000</p>
            </div>
            <div className="grid grid-cols-2 gap-3 font-bold text-sm">
              <p>Jumlah Pembayaran</p>
              <p className="grid justify-items-end">Rp{transactions?.pendingAmount}</p>
            </div>
          </div>
        </div>
        <div className="card-normal bg-gray-100 rounded">
          <div className="card-body">
            <h2 className="card-title text-lg">Informasi Pembeli</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p>Nama</p>
              <p>{transactions?.buyer?.fullname}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p>Nomor Handphone</p>
              <p>{transactions?.buyer?.phoneNumber}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p>Alamat</p>

              <p>{transactions?.buyer?.address}</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/seller">
        {' '}
        <button className="btn bg-red-primary text-white mt-3">Kembali</button>
      </Link>
    </section>
  );
}
