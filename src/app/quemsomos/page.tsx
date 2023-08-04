import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import QuemSomosPage from "@/components/QuemSomos/page";

export default function EmpreendimentosPage() {
  return (
    <>
      <div className="flex flex-col justify-between w-screen overflow-hidden">
        <Header />
          <QuemSomosPage/>
        <Footer />
      </div>
    </>
  );
}
