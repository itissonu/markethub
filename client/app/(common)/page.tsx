import Benifits from "@/components/benifits";
import Category from "@/components/category";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import Hero from "@/components/hero";
import Marquees from "@/components/marquee";
import Marquee from "@/components/marquee";
import Navbar from "@/components/navbar";
import Notification from "@/components/notification";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const bgimg = '/grain-bg-black.png';

export default function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <main style={backgroundStyle} className="flex min-h-screen h-max flex-col  ">
      {/* <Header />
      <Navbar /> */}
      <Hero />
      <Notification />
      <Category />
      <Benifits />
      <Marquees />
      {/* <Footer /> */}

    </main>
  );
}
