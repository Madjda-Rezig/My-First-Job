import React, { useState, useEffect } from "react";
import home from "../../assets/Home.jpg";
import { Link } from "react-router-dom";

const Herohome = () => {
  const [showBackgroundImage, setShowBackgroundImage] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Mettre à jour l'état en fonction de la largeur de l'écran
      setShowBackgroundImage(window.innerWidth >= 1024);
    };

    // Attacher l'événement de redimensionnement de la fenêtre
    window.addEventListener("resize", handleResize);

    // Détacher l'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className={`bg-white text-blue-600 ${
        showBackgroundImage ? "h-screen" : "h-auto"
      } ${
        showBackgroundImage ? "bg-image bg-center bg-no-repeat bg-cover" : ""
      }`}
      style={{
        backgroundImage: showBackgroundImage ? `url(${home})` : "none",
      }}
    >
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-snug sm:text-6xl mt-10 text-center">
            Unlock Your Potential, Find Your Dream Job!
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-600 text-center">
            Our mission is to help you unlock your potential by providing
            privileged access to exceptional professional opportunities
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center">
            <Link
              rel="noopener noreferrer"
              to={"/Offresp"}
              className="px-8 py-3 text-lg font-semibold rounded bg-blue-600 text-white"
            >
              Our Jobs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herohome;
