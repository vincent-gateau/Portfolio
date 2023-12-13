import Image from "next/image";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-stone-900">
      <Navbar />
    </main>
  );
}
