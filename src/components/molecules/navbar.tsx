import Image from "next/image";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

const Index = () => {
  return (
    <nav className="flex flex-row w-full justify-between items-center bg-[#90AFB3] border-1 shadow-md h-20">
      <div className="pl-10">
        <Image src="/citasaludlogo.png" alt="logo" width={170} height={100} />
      </div>
      <div className="flex flex-row justify-center items-center gap-5 pr-10">
        <a
          href="#"
          className="text-sm font-normal hover:font-bold cursor-pointer"
        >
          <AiFillHome className="text-2xl" />
        </a>
        <div className="h-9 flex justify-center text-bank3 items-center hover:text-bank2 cursor-pointer">
          <a href="#" className="text-sm font-normal hover:font-bold">
            Registrarse
          </a>
        </div>
        <Link href="/login" passHref>
          <button className="w-40 h-9 bg-blue-500 text-white font-bold rounded-full text-sm hover:scale-105 transition-all duration-300 cursor-pointer">
            Iniciar Sesión
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Index;
