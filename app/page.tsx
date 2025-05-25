import Header from "@/components/Header";
import Welcome from "@/components/Home/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Welcome />
      </main>
    </div>
  );
}
