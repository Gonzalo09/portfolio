import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Perfil from "./components/Perfil/Perfil";
import SobreMi from "./components/SobreMi/SobreMi";
import Proyectos from "./components/Proyectos/Proyectos";
import Contacto from "./components/Contacto/Contacto";
import Habilidades from "./components/Habilidades/Habilidades";

function App() {
  const modoOscuroGuardado = localStorage.getItem("modoOscuro") === "true";
  const [modoOscuro, setModoOscuro] = useState(modoOscuroGuardado);

  const toggleModoOscuro = () => {
    const nuevoModoOscuro = !modoOscuro;
    setModoOscuro(nuevoModoOscuro);
    document.body.classList.toggle("modo-oscuro", nuevoModoOscuro);
    // Guardar el estado en localStorage
    localStorage.setItem("modoOscuro", nuevoModoOscuro);
  };

  useEffect(() => {
    document.body.classList.toggle("modo-oscuro", modoOscuro);
  }, [modoOscuro]);

  return (
    <>
      <Header toggleModoOscuro={toggleModoOscuro} modoOscuro={modoOscuro} />
      <Perfil modoOscuro={modoOscuro} />
      <div className={`linea ${modoOscuro ? "modo-oscuro" : ""}`}></div>
      <SobreMi modoOscuro={modoOscuro} />
      <Proyectos modoOscuro={modoOscuro} />
      <Habilidades modoOscuro={modoOscuro} />
      <Contacto modoOscuro={modoOscuro} />
    </>
  );
}

export default App;
