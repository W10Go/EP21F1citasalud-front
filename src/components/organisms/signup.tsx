"use client";
import Image from "next/image";
import { useState } from "react";

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <main>
            <div className="relative flex items-center justify-center h-screen bg-white">
                <Image
                    src="/LogoCITASalud.png"
                    alt="Citasalud Logo"
                    width={1200}
                    height={500}
                    className="opacity-50"
                />
                <div className="absolute w-4/5 md:w-3/5 max-h-[90vh] overflow-y-auto py-5 px-4 md:px-18 z-10 border-2 border-black bg-white rounded-md shadow-md">
                    <section className="flex items-center justify-center w-full pb-15">
                        <h1 className="text-[42px] font-bold" style={{ color: '#2C3E50' }}>
                            Unete a CITASalud
                        </h1>
                    </section>
                    <form className="flex flex-col md:flex-row md:flex-wrap items-center justify-between gap-10 w-full">
                        <div className="w-full  lg:w-2/5" >
                            <label className="text-[18px] font-bold">Nombre/s</label><label className="text-red-700"> *</label>
                            <br />
                            <input
                                type="text"
                                className="w-full px-4 py-2 mb-2 border-b-2 bg-gray-50 focus:outline-none"
                            />
                        </div>
                        <div className="w-full  lg:w-2/5">
                            <label className="text-[18px] font-bold">Apellido/s </label><label className="text-red-700"> *</label>
                            <br />
                            <input
                                type="text"
                                className="w-full px-4 py-2 mb-2 border-b-2 bg-gray-50 focus:outline-none"
                            />
                        </div>
                        <div className="w-full  lg:w-2/5">
                            <label className="text-[18px] font-bold">Documento de identidad </label><label className="text-red-700"> *</label>
                            <br />
                            <input
                                type="number"
                                className="w-full px-4 py-2 mb-2 border-b-2 bg-gray-50 focus:outline-none"
                            />
                        </div>
                        <div className="w-full  lg:w-2/5">
                            <label className="text-[18px] font-bold">Correo electrónico </label><label className="text-red-700"> *</label>
                            <br />
                            <input
                                type="email"
                                className="w-full px-4 py-2 mb-2 border-b-2 bg-gray-50 focus:outline-none"
                            />
                        </div>
                        <div className="w-full lg:w-2/5">
                            <label className="text-[18px] font-bold">Celular </label><label className="text-red-700"> *</label>
                            <br />
                            <select defaultValue={"option1"} className="w-[17%] py-2 mr-2 mb-2 border-b-2">
                                <option value={"option1"}>+57</option>
                            </select>
                            <input
                                type="number"
                                className="w-[80%] px-4 py-2 mb-2 border-b-2 bg-gray-50 focus:outline-none"
                            />
                        </div>
                        <div className="relative w-full lg:w-2/5">
                            <label className="text-[18px] font-bold">Contraseña </label><label className="text-red-700"> *</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full px-4 py-2 mb-2 border-b-2 bg-gray-50 focus:outline-none"
                            />
                            <br />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? "Ocultar" : "Mostrar"}
                            </button>
                        </div>
                        <section className="flex gap-2 items-center justify-center mt-[-20px] w-full">
                            <input type="checkbox"></input>
                            <a href="#">
                                Aceptar
                            </a>
                            <a href="#" className="hover:text-blue-500">
                                TyC
                            </a>
                        </section>
                        <section className="flex items-center justify-center mt-[-23px] w-full">
                            <button className="bg-blue-500 text-[20px] text-white p-2 rounded-md w-2/3 h-15">
                                Registrarse
                            </button>
                        </section>
                        <section className="flex gap-2 items-center justify-center mt-[-30px] w-full">
                            <a href="#">
                                ¿Ya tienes una cuenta?
                            </a>
                            <a href="/login" className="hover:text-blue-500">
                                Iniciar sesión
                            </a>
                        </section>
                    </form>
                </div>
            </div>
        </main>
    )
}