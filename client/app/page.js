import Content from "@/components/shared/Content";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import LiveScore from "@/components/shared/LiveScore";

export default function Home() {
  return (
   <main>
     <Header />
     <LiveScore />
     <Content />
     <Footer />
   </main>
  );
}
