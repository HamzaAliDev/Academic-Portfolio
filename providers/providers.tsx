import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
     <div>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
      
    </div>
  );
}