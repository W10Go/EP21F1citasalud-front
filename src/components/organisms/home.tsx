"use client";
import Nav from "@/components/molecules/navbar";
import NavMob from "@/components/molecules/navbarmobile";
import Footer from "@/components/molecules/footer";
import { useState } from "react";

const HomePage = () => {
  const [popupOpenTerms, setPopupOpenTerms] = useState(false);
  const [popupOpenPrivacy, setPopupOpenPrivacy] = useState(false);
  return (
    <>
      <main className="min-h-screen flex flex-col">
        <div className="block md:hidden">
          <NavMob />
        </div>
        <div className="hidden md:block">
          <Nav />
        </div>
        <div className="flex flex-col flex-1 items-center justify-center bg-gray-100 py-12 px-4">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a CITASalud</h1>
          <p className="text-lg text-gray-700 mb-6">Estamos para cuidarte</p>
          <section className="bg-white shadow-md rounded-xl p-8 max-w-3xl w-full">
            <p className="text-base text-gray-700 leading-relaxed">
              En <strong>CITASalud</strong>, trabajamos con el compromiso de
              ofrecer un servicio eficiente y accesible para la gestión de citas
              médicas, facilitando el acceso a la salud a través de soluciones
              tecnológicas modernas. Convertirnos en una plataforma líder en el
              sector salud digital, destacándonos por la innovación, la
              confianza y el compromiso con el bienestar de las personas es
              nuestra prioridad.
            </p>
          </section>
        </div>
        <Footer
          setPopupTerms={setPopupOpenTerms}
          setPopupOpenPrivacy={setPopupOpenPrivacy}
        />
        {popupOpenTerms && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full relative">
              <h2 className="text-xl font-bold mb-4">Términos y condiciones</h2>
              <div className="mb-4 max-h-80 overflow-y-auto text-sm">
                <p>
                  Bienvenido a CITASalud. Al registrarte y utilizar nuestros
                  servicios, aceptas los siguientes términos y condiciones:
                </p>
                <ul className="list-disc ml-6 my-2">
                  <li>
                    Tu información personal será tratada de acuerdo a nuestra
                    política de privacidad.
                  </li>
                  <li>Debes proporcionar datos verídicos y actualizados.</li>
                  <li>No compartas tu contraseña con terceros.</li>
                  <li>
                    El uso indebido de la plataforma puede resultar en la
                    suspensión de tu cuenta.
                  </li>
                  <li>Para más información, contacta a nuestro soporte.</li>
                </ul>
                <p>Al continuar, aceptas estos términos y condiciones.</p>
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setPopupOpenTerms(false)}
                type="button"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
        {popupOpenPrivacy && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full relative">
              <h2 className="text-xl font-bold mb-4">Política de privacidad</h2>
              <div className="mb-4 max-h-80 overflow-y-auto text-sm">
                <p>
                  En CITASalud, nos comprometemos a proteger tu privacidad. Al
                  utilizar nuestra plataforma, aceptas las siguientes
                  condiciones sobre el manejo de tus datos personales:
                </p>
                <ul className="list-disc ml-6 my-2">
                  <li>
                    Tu información será utilizada únicamente para la gestión de
                    citas y servicios médicos.
                  </li>
                  <li>
                    No compartiremos tus datos con terceros sin tu
                    consentimiento, salvo requerimiento legal.
                  </li>
                  <li>
                    Puedes solicitar la actualización o eliminación de tus datos
                    en cualquier momento.
                  </li>
                  <li>
                    Implementamos medidas de seguridad para proteger tu
                    información.
                  </li>
                  <li>
                    Para dudas o solicitudes, contacta a nuestro equipo de
                    soporte.
                  </li>
                </ul>
                <p>Al continuar, aceptas nuestra política de privacidad.</p>
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setPopupOpenPrivacy(false)}
                type="button"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
};
export default HomePage;
