import { useNavigate } from 'react-router-dom';
import CustomInput from './CustomInput';
import SubmitButton from './SubmitButton';
import { useState } from 'react';
import api from '../api';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const RegisterFormBuyer = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		fullname: '',
		address: '',
		city: '',
		phoneNumber: '',
		password: '',
	});

	const register = async () => {
		try {
			const { data } = await api.post(`/register`, user);
			console.log(data);
			navigate('/login');
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: `${error.response.data.message}`,
			});
		}
	};

	function handleFullName(e) {
		setUser({
			...user,
			fullname: e.target.value,
		});
		// console.log(user);
	}
	function handleAddress(e) {
		setUser({
			...user,
			address: e.target.value,
		});
		// console.log(user);
	}
	function handleCity(e) {
		setUser({
			...user,
			city: e.target.value,
		});
		// console.log(user);
	}
	function handlePhoneNumber(e) {
		setUser({
			...user,
			phoneNumber: e.target.value,
		});
	}
	function handlePassword(e) {
		setUser({
			...user,
			password: e.target.value,
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();
		await register();
	}

	return (
		<form className="w-full h-full py-2 flex flex-col justify-end items-center gap-2 transition-opacity">
			<h1 className="text-2xl font-bold">Daftar</h1>
			<CustomInput
				id="fullName-form"
				label="Nama Lengkap"
				placeholder="Nama lengkap"
				onChange={handleFullName}
			/>

			<label htmlFor="city" className="w-full">
				Alamat Lengkap
			</label>
			<textarea
				className="textarea w-full py-2 rounded-md focus:border-green-primary border-solid input input-bordered h-20"
				onChange={handleAddress}
				placeholder="Alamat lengkap"
			></textarea>

			<label htmlFor="city" className="w-full flex flex-col gap-1">
				Kota / Kabupaten
			</label>
			<select
				className="w-full  py-2 px-6 rounded-md focus:border-green-primary border-solid input input-bordered"
				onChange={handleCity}
			>
				<option disabled selected>
					Pilih
				</option>
				<option>Jakarta Utara</option>
				<option>Jakarta Barat</option>
				<option>Jakarta Timur</option>
				<option>Jakarta Pusat</option>
				<option>Jakarta Selatan</option>
			</select>
			<div className="flex gap-4 items-end">
				<CustomInput
					id="phoneNumber-form"
					type="text"
					label="Nomor Handphone"
					placeholder="contoh: 6284319283921"
					onChange={handlePhoneNumber}
				/>
				<CustomInput
					id="password-form"
					type="password"
					label="Kata Sandi"
					placeholder="Kata sandi"
					onChange={handlePassword}
				/>
			</div>
			<div className="mt-5 w-full">
				<SubmitButton text="Daftar" onClick={handleSubmit} />
			</div>
			<label className="text-sm my-4">
				Anda punya akun?{' '}
				<Link
					to={'/login'}
					className=" text-green-primary font-bold hover:underline cursor-pointer"
				>
					Masuk Sekarang
				</Link>
			</label>
		</form>
	);
};

export default RegisterFormBuyer;
