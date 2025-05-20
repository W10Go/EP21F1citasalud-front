"use client";
import Image from "next/image";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

/*
type User = {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    documento: string;
    celular: string;
  };*/

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [document, setDocument] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          nombre: name,
          apellido: lastName,
          email: email,
          documento: document,
          tipoDocumento: 1,
          telefono: cellphone,
          fechaRegistro: new Date(),
          ultimoAcceso: new Date(),
          password: password,
          estado: 1,
        }),
      });
      if (response.ok) {
        alert("Registro exitoso");
        // Puedes redirigir o limpiar el formulario aquí si lo deseas
      } else {
        alert("Error al registrar usuario");
      }
    } catch (error) {
      alert(error + "Error de conexión");
    }
  };

  return (
    <main>
      <div className="relative flex items-center justify-center h-screen bg-white">
        <Image
          src="/citasaludlogo.png"
          alt="Citasalud Logo"
          width={1200}
          height={500}
          className="opacity-50"
        />
        <div className="absolute w-4/5 md:w-3/5 max-h-[90vh] overflow-y-auto py-5 px-4 md:px-18 z-10 border-2 border-black bg-white rounded-md shadow-md">
          <section className="flex items-center justify-center w-full pb-15">
            <h1 className="text-[42px] font-bold" style={{ color: "#2C3E50" }}>
              Unete a CITASalud
            </h1>
          </section>
          <form
            className="flex flex-col md:flex-row md:flex-wrap items-center justify-between gap-10 w-full"
            onSubmit={handleRegister}
          >
            <div className="w-full  lg:w-2/5">
              <label className="text-[18px] font-bold">Nombre/s</label>
              <label className="text-red-700"> *</label>
              <br />
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="w-full px-4 py-2 mb-2 border-b-2 bg-gray-50 focus:outline-none"
              />
            </div>
            <div className="w-full  lg:w-2/5">
              <label className="text-[18px] font-bold">Apellido/s </label>
              <label className="text-red-700"> *</label>
              <br />
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                className="w-full px-4 py-2 mb-2 border-b-2 bg-gray-50 focus:outline-none"
              />
            </div>
            <div className="w-full  lg:w-2/5">
              <label className="text-[18px] font-bold">
                Documento de identidad{" "}
              </label>
              <label className="text-red-700"> *</label>
              <br />
              <input
                type="number"
                onChange={(e) => setDocument(e.target.value)}
                value={document}
                className="w-full px-4 py-2 mb-2 border-b-2 bg-gray-50 focus:outline-none"
              />
            </div>
            <div className="w-full  lg:w-2/5">
              <label className="text-[18px] font-bold">
                Correo electrónico{" "}
              </label>
              <label className="text-red-700"> *</label>
              <br />
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full px-4 py-2 mb-2 border-b-2 bg-gray-50 focus:outline-none"
              />
            </div>
            <div className="w-full lg:w-2/5">
              <label className="text-[18px] font-bold">Celular </label>
              <label className="text-red-700"> *</label>
              <br />
              <select
                defaultValue={"option1"}
                className="w-[17%] py-2 mr-2 mb-2 border-b-2"
              >
                <option value={"option1"}>+57</option>
              </select>
              <input
                type="number"
                onChange={(e) => setCellphone(e.target.value)}
                value={cellphone}
                className="w-[80%] px-4 py-2 mb-2 border-b-2 bg-gray-50 focus:outline-none"
              />
            </div>
            <div className="relative w-full lg:w-2/5">
              <label className="text-[18px] font-bold">Contraseña </label>
              <label className="text-red-700"> *</label>
              <input
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-full px-4 py-2 mb-2 border-b-2 bg-gray-50 focus:outline-none"
              />
              <br />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            <section className="flex gap-2 items-center justify-center mt-[-20px] w-full">
              <input
                type="checkbox"
                onChange={() => {
                  setTermsAccepted((prev) => !prev);
                  console.log(termsAccepted);
                }}
              ></input>
              <p>Aceptar</p>
              <a href="#" className="hover:text-blue-500">
                TyC
              </a>
            </section>
            <section className="flex items-center justify-center mt-[-23px] w-full">
              <button
                disabled={!termsAccepted}
                className={`${
                  termsAccepted
                    ? "bg-blue-500 cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed"
                } text-[20px] text-white p-2 rounded-md w-2/3 h-15`}
              >
                Registrarse
              </button>
            </section>
            <section className="flex gap-2 items-center justify-center mt-[-30px] w-full">
              <a href="#">¿Ya tienes una cuenta?</a>
              <a href="/login" className="hover:text-blue-500">
                Iniciar sesión
              </a>
            </section>
          </form>
        </div>
      </div>
    </main>
  );
}
