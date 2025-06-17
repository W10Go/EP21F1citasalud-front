"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex relative flex-row items-center justify-between w-full h-16 shadow-md bg-[#90AFB3]">
      <div className="pl-5">
        <Image src="/citasaludlogo.png" alt="logo" width={170} height={100} />
      </div>
      <div className="flex flex-row justify-center items-center pr-5">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <AiOutlineMenu className="text-2xl" />
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col justify-center items-center bg-[#90AFB3] absolute shadow-md w-5/6 inset-x-10 top-20 p-1 rounded-md ">
          <a href="#" className="text-sm font-normal hover:font-bold">
            Home
          </a>
          <div className="h-9 flex justify-center text-bank3 items-center hover:text-bank2 cursor-pointer">
            <a href="/signup" className="text-sm font-normal hover:font-bold">
              Registrarse
            </a>
          </div>
          <Link href="/login" passHref>
            <button className="w-40 h-9 bg-blue-500 text-white font-bold rounded-full text-sm hover:scale-105 transition-all duration-300 cursor-pointer">
              Iniciar Sesión
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Index;
