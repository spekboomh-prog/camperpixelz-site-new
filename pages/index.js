import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Welcome to CamperPixelz!
        </h1>
      </main>

      <Footer />
    </div>
  );
}