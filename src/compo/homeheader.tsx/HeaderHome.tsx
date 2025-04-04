import { motion } from "framer-motion";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const HeaderHome = () => {
  const handleLogin = () => {
    alert("Login button clicked!");
  };

  const handleSignup = () => {
    alert("Signup button clicked!");
  };

  return (
    <div>
      <div className="w-full py-6 bg-white text-black flex justify-center items-center font-[Utendo]">
        <h1 className="text-3xl font-bold">Bienvenue sur notre plateforme</h1>
      </div>

      <section className="relative bg-white text-black min-h-screen flex flex-col justify-center items-center px-6 text-center font-[Utendo] overflow-hidden">
        {/* Création d'un design créatif en arrière-plan */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="300" cy="300" r="200" stroke="black" strokeWidth="10" fill="none" />
            <path d="M300 100 L400 500 L200 500 Z" stroke="black" strokeWidth="5" fill="none" />
          </svg>
        </div>
        
        <motion.h1
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Découvrez l'Artisanat Réinventé
        </motion.h1>
        
        <motion.p
          className="max-w-3xl text-lg opacity-80 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Nous connectons les artisans talentueux avec des clients en quête de services de qualité.
          Découvrez un monde où tradition et technologie se rencontrent pour vous offrir une
          expérience unique et authentique.
        </motion.p>
        
        <div className="flex gap-4 flex-wrap justify-center">
          <button
            type="button"
            onClick={handleSignup}
            className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
          >
            <FaUserPlus className="w-4 h-4 me-2 -ms-1" />
            S'inscrire
          </button>

          <button
            type="button"
            onClick={handleLogin}
            className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
          >
            <FaSignInAlt className="w-4 h-4 me-2 -ms-1" />
            Se connecter
          </button>
        </div>


      </section>
    </div>
  );
};

export default HeaderHome;
