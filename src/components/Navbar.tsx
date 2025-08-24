import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/30 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="Meera Logo" 
              className="h-10 w-auto"
            />
            <span className="text-primary text-xl font-bold hidden sm:inline-block">Meera</span>
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#features" className="text-primary/80 hover:text-white transition-colors">
            Features
          </a>
          <a 
            href="https://expo.dev/artifacts/eas/cHJYz9KrWgrWEMyWS7YZFd.apk"
            download="Meera_App.apk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary hover:bg-white/90 px-4 py-2 rounded-full font-medium transition-colors"
          >
            Download App
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
