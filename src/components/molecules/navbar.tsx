import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { ServerSessionButtons } from "./server-session-buttons";

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

        <ServerSessionButtons />
      </div>
    </nav>
  );
};

export default Index;
