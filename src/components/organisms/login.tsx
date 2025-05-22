"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ShowPasswordButton from "../atoms/ShowPasswordButton";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState<User[]>([]);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  type User = {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    documento: string;
    celular: string;
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const userFound = data.find((user) => user.email === username);
    if (!userFound) {
      alert(
        "usuario o contraseña incorrectas, por favor verifica tus datos e intenta nuevamente"
      );
    } else {
      // Aquí puedes agregar lógica adicional para validar la contraseña si lo deseas
      if (userFound.password === password) {
        alert("Inicio de sesión exitoso");
        // Redirigir a la página de inicio o realizar otra acción
        alert("Bienvenido " + userFound.nombre);
        // Aquí puedes redirigir al usuario a la página de inicio
        window.location.href = "/";
      } else {
        alert(
          "usuario o contraseña incorrectas, por favor verifica tus datos e intenta nuevamente"
        );
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/api/usuarios");
      const newData = await res.json();
      setData(newData);
      console.log(newData);
    };
    fetchData();
  }, []);

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
              value={username}
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
    </main>
  );
}
