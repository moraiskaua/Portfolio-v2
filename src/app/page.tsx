import { navItems } from '@/data';
import Hero from './components/Hero';
import { FloatingNavbar } from './components/ui/FloatingNavbar';
import Grid from './components/Grid';
import RecentProjects from './components/RecentProjects';
import Experience from './components/Experience';
import Approach from './components/Approach';
import Footer from './components/Footer';

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-clip flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNavbar navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
