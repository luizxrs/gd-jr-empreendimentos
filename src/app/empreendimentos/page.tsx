import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import EmpreendimentosPage from "@/components/Empreendimentos/page";

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-between w-screen overflow-hidden">
        <Header />
          <EmpreendimentosPage/>
        <Footer />
      </div>
    </>
  );
}
