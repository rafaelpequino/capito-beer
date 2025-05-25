import Header from "@/components/Header";
import Info from "@/components/Home/Info";
import Welcome from "@/components/Home/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Welcome />
        <Info />
      </main>
    </div>
  );
}
