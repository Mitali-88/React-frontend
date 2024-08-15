import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Header';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Slidder } from './components/Banner';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Slidder />
        <About />
        <Contact />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

