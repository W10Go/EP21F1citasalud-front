import React from "react";

export default function LoginPage() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  return (
    <>
      <main className="flex gap-4 items-center h-screen">
        <section className="flex w-[60%] h-screen bg-gray-30 items-center justify-center ">
          <img src="/citasaludhome.png" alt="logo de citasalud" />
          {
            //<Image />
          }
        </section>
        <section className="flex flex-col w-[40%] h-screen bg-blue-100 items-center justify-center">
          <img src="/citasaludlogo.png" alt="Citasalud logo" className="pb-5" />

          <div className="w-[80%]">
            <h1 className="text-4xl text-center font-bold pb-30 items-center   ">
              Iniciar sesión
            </h1>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Correo Electronico"
                className="pb-5"
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="pb-5"
              />
              <button className="bg-blue-500 text-white p-2 rounded-md">
                Iniciar sesión{" "}
              </button>
              <section className="flex gap-2 items-center justify-center">
                <a href="#" className=" hover:text-blue-500 mr-auto">
                  ¿Tienes problemas para iniciar sesión?
                </a>
                <a href="#" className="hover:text-blue-500">
                  Crear cuenta
                </a>
              </section>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
