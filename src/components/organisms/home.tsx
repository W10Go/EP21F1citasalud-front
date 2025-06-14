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
        <div className="flex flex-col flex-1 items-center justify-center bg-gray-100">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a CITASalud</h1>
          <p className="text-lg text-gray-700">Estamos para cuidarte</p>
        </div>
        <Footer />
      </main>
    </>
  );
};
export default HomePage;
