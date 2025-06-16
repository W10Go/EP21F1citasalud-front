import Nav from "@/components/molecules/navbar";
import NavMob from "@/components/molecules/navbarmobile";
import Footer from "@/components/molecules/footer";

const HomePage = () => {
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
              En <strong>CITASalud</strong>, trabajamos con el compromiso de ofrecer un servicio eficiente y accesible para la gestión de citas médicas,
              facilitando el acceso a la salud a través de soluciones tecnológicas modernas. Convertirnos en una plataforma líder en el sector salud digital, 
              destacándonos por la innovación, la confianza y el compromiso con el bienestar de las personas es nuestra prioridad.
            </p>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
};
export default HomePage;
