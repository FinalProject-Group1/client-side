import { useState } from "react";
import api from "../api";
import CustomInput from "../components/CustomInput";
import SubmitButton from "../components/SubmitButton";
import { useNavigate } from "react-router-dom";
import { getProfileApi } from "../features/user/actions";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("089111111111");
  const [password, setPassword] = useState("12345");

  const handleOnLogin = async (e) => {
    console.log(phoneNumber, password, ">>>>>");
    e.preventDefault();
    try {
      const { data } = await api.post("/login", {
        phoneNumber,
        password,
      });
      console.log(data, "login from server");
      localStorage.setItem("access_token", data.access_token);

      const profileData = await getProfileApi();
      localStorage.setItem("role", profileData.role);

      if (profileData.role === "seller") {
        console.log("trigerr profile login");
        navigate("/seller");
        return;
      }

      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.message}`,
      });
    }
  };

  // console.log(phoneNumber, password);

  return (
    <div className="w-full h-screen py-20 px-20 bg-[url('/bg-terra-2.jpg')]">
      <div className="w-full h-full flex flex-row rounded-2xl">
        <div className="w-1/2 h-full px-20 flex flex-col items-center rounded-s-2xl backdrop-blur-lg bg-opacity-70 bg-slate-100 hover:bg-opacity-100 transition-opacity">
          <form className="w-full h-full py-10 flex flex-col justify-center items-center gap-4 rounded-s-2xl transition-opacity">
            <h1 className="text-4xl font-bold mb-8">Masuk</h1>
            <CustomInput
              id="phoneNumber-form"
              type="text"
              label="Nomor Telepon"
              placeholder="contoh: 089xxx"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            <CustomInput
              id="password-form"
              type="password"
              label="Kata Sandi"
              placeholder="kata sandi"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="mt-8 w-full">
              <SubmitButton text="Masuk" onClick={handleOnLogin} />
            </div>
            <label className="text-sm my-6">
              Belum punya akun?{" "}
              <span className=" text-green-primary font-bold hover:underline cursor-pointer">
                Buat akun
              </span>
            </label>
          </form>
        </div>
        <div className="w-1/2 h-full rounded-e-2xl bg-contain backdrop-blur-xl">
          <img
            src="/Terrarium_Logo_transparent.png"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
