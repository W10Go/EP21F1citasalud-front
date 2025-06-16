"use client";
import Image from "next/image";
import { useState } from "react";
import ShowPasswordButton from "../atoms/ShowPasswordButton";

import { redirectTo } from "../utils/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [data, setData] = useState<User[]>([]);

  const [show2FAPopup, setShow2FAPopup] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  /* type User = {
    id: number;
    token: string;
    email: string;
  };*/

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleLogin = (e: React.FormEvent) => {
    if (!email || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }
    e.preventDefault();

    const fetchLogin = async () => {
      const res = await fetch(
        "https://ep21f1citasalud-back-pruebas.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      const newData = await res.json();
      if (newData.status === "2FA_REQUIRED") {
        setShow2FAPopup(true);
      }
      // setData(newData);

      if (!res.ok) {
        alert("Error al iniciar sesión, por favor verifica tus datos");
        return;
      }
    };
    fetchLogin();
  };

  const verification2FA = async () => {
    const res = await fetch(
      "https://ep21f1citasalud-back-pruebas.onrender.com/api/auth/verify-2fa",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          code: verificationCode,
        }),
      }
    );
    if (res.ok) {
      const verificationData = await res.json();
      localStorage.setItem("token", verificationData.token);
      localStorage.setItem("userId", verificationData.id.toString());

      setShow2FAPopup(false);
      redirectTo("/dashboard"); // Redirigir al dashboard
    } else {
      alert(
        "Código de verificación incorrecto. Por favor, inténtalo de nuevo."
      );
      setVerificationCode(""); // Limpiar el campo de código
    }
  };

  return (
    <main className="flex gap-4 items-center h-screen">
      <section className="w-[60%] bg-gray-30 items-center justify-center hidden md:block ">
        <Image
          src="/citasaludhome.png"
          alt="logo de citasalud"
          width={1000}
          height={500}
        />
      </section>
      <section className="flex flex-col w-screen md:w-[40%] h-screen bg-blue-50 items-center justify-center">
        <Image
          src="/citasaludlogo.png"
          alt="Citasalud logo"
          width={450}
          height={300}
          className="pb-20"
        />

        <div className="w-[80%]">
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Correo Electronico"
              className="w-full px-4 py-2 mb-2 border-b-2 bg-gray-50 focus:outline-none"
              onChange={handleUsernameChange}
              value={email}
            />
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                className="w-full px-4 py-2 mb-2 border-b-2 bg-gray-50 focus:outline-none"
                onChange={handlePasswordChange}
                value={password}
              />
              <ShowPasswordButton
                showPassword={showPassword}
                togglePasswordVisibility={togglePasswordVisibility}
              />
            </div>

            <button className="bg-blue-500 text-white p-2 rounded-md">
              Iniciar sesión
            </button>
            <section className="flex gap-2 items-center justify-center">
              <a href="#" className=" hover:text-blue-500 mr-auto">
                ¿Tienes problemas para iniciar sesión?
              </a>
              <a href="/signup" className="hover:text-blue-500">
                Crear cuenta
              </a>
            </section>
          </form>
        </div>
      </section>
      {show2FAPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded shadow-lg flex flex-col items-center">
            <h2 className="mb-4 text-lg font-bold">Código de verificación</h2>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="mb-4 px-4 py-2 border rounded"
              placeholder="Ingresa el código"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => verification2FA()}
            >
              Verificar
            </button>
            <button
              className="mt-2 text-sm text-gray-500"
              onClick={() => setShow2FAPopup(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
