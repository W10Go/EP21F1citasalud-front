import Image from 'next/image';

const Footer = () => (
    <footer className="flex flex-row justify-around items-center w-full bg-[#90AFB3] text-black border-t-1 py-4 shadow-inner h-20">
        <div className='flex flex-row items-center justify-center gap-20'>
            <div className=''>
                <Image src='/citasaludlogo.png' alt='logo' width={170} height={100} />
            </div>
            <a className='h-20 flex justify-center text-bank3 items-center text-sm  font-normal hover:font-bold hover:text-bank2 cursor-pointer'>
                Términos y condiciones
            </a>
            <a className='h-20 flex justify-center text-bank3 items-center text-sm font-normal hover:font-bold hover:text-bank2 cursor-pointer'>
                Política de privacidad
            </a>
        </div>
    </footer>
);

export default Footer;