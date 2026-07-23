import Footer from "@/components/site/layout/Footer";
import Navbar from "@/components/site/layout/Navbar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
}