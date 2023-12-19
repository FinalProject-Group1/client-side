import { useNavigate } from 'react-router-dom';
import CustomInput from './CustomInput';
import SubmitButton from './SubmitButton';
import { useState } from 'react';
import axios from 'axios';

const RegisterFormBuyer = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullname: '',
    phoneNumber: '',
    password: '',
  });

  const register = async () => {
    try {
      const { data } = await axios.post(`http://localhost:3000/register`, user);
      console.log(data);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  function handleFullName(e) {
    setUser({
      ...user,
      fullName: e.target.value,
    });
    console.log(user);
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
    <form className="w-full h-full py-10 flex flex-col justify-center items-center gap-4 rounded-s-2xl transition-opacity">
      <h1 className="text-4xl font-bold mb-8">Daftar Pembeli</h1>
      <CustomInput id="fullName-form" label="Nama Lengkap" placeholder="nama lengkap" onChange={handleFullName} />
      <CustomInput id="phoneNumber-form" type="text" label="Nomor Telepon" placeholder="cth: 6285411111111" onChange={handlePhoneNumber} />
      <CustomInput id="password-form" type="password" label="Kata Sandi" placeholder="kata sandi" onChange={handlePassword} />
      <div className="mt-8 w-full">
        <SubmitButton text="Daftar" onClick={handleSubmit} />
      </div>
      <label className="text-sm my-6">
        Anda punya akun? <span className=" text-green-primary font-bold hover:underline cursor-pointer">Masuk Sekarang</span>
      </label>
    </form>
  );
};

export default RegisterFormBuyer;
