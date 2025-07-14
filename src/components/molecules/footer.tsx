"use client";
import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  const [popupOpenTerms, setPopupOpenTerms] = useState(false);
  const [popupOpenPrivacy, setPopupOpenPrivacy] = useState(false);
  return (
    <footer className="flex flex-row justify-around items-center w-full bg-[#90AFB3] text-black border-t-1 py-4 shadow-inner h-20">
      <div className="flex flex-row items-center justify-center gap-20">
        <div className="">
          <Image src="/citasaludlogo.png" alt="logo" width={170} height={100} />
        </div>
        <button
          type="button"
          onClick={() => setPopupOpenTerms(true)}
          className="h-20 flex justify-center text-bank3 items-center text-sm font-normal hover:font-bold hover:text-bank2 cursor-pointer bg-transparent border-none"
        >
          Términos y condiciones
        </button>
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
        <button
          type="button"
          onClick={() => setPopupOpenPrivacy(true)}
          className="h-20 flex justify-center text-bank3 items-center text-sm font-normal hover:font-bold hover:text-bank2 cursor-pointer bg-transparent border-none"
        >
          Política de privacidad
        </button>
      </div>
    </footer>
  );
};

export default Footer;
