import React from "react";


function NavBar({ handlePrevious, handleNext }) {
  return(
    <nav>
          <button onClick={handlePrevious}>Précédent</button>
          <button onClick={handleNext}>Suivant</button>
    </nav>
  );
}

export default NavBar;
