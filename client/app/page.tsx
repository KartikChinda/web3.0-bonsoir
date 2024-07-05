import Image from "next/image";
import Hero from "./components/Hero";
import Transactions from "./components/Transactions";

export default function Home() {
  return (
    <main className="w-full h-screen">

      <Hero />
      <Transactions />
    </main>
  );
}
