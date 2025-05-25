import Header from "@/components/Header";
import Beer from "@/components/Home/Beer";
import Depoiments from "@/components/Home/Depoiments";
import Info from "@/components/Home/Info";
import Newsletter from "@/components/Home/Newsletter";
import Welcome from "@/components/Home/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Welcome />
        <Info />
        <Beer />
        <Depoiments />
        <Newsletter />
      </main>
    </div>
  );
}
