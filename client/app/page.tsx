import Header from "@/components/Header";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Notification from "@/components/notification";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const bgimg = '/black-bg.png';

export default function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <main style={backgroundStyle} className="flex min-h-screen h-max flex-col  ">
      <Header />
      <Navbar />
      <Hero />
      <Notification/>

    </main>
  );
}
