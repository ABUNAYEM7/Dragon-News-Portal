import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Aside from "../components/layoutComponents/Aside";
import RightNav from "../components/layoutComponents/RightNav";
import Marque from "../components/Marque";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* header */}
      <header className="max-w-screen-2xl mx-auto">
        <Header />
      </header >

      {/* marque */}
      <section className="max-w-screen-2xl mx-auto">
        <Marque />
      </section>

      {/* nav */}
      <nav className="max-w-screen-2xl mx-auto">
        <Navbar />
      </nav>
     <main className="p-4 my-3 grid grid-cols-1 lg:grid-cols-12 gap-3 justify-self-center w-full md:w-11/12 mx-auto">

        <aside className="col-span-3 border-2">
            <Aside/>
        </aside>
        <section className="col-span-6 border-2">
            <Outlet/>
        </section>
        <nav className="col-span-3 border-2">
            <RightNav/>
        </nav>
     </main>
    </div>
  );
};

export default MainLayout;
