import PropTypes from "prop-types";

import "./sobre-mi.css";

const SobreMi = ({ modoOscuro }) => {
  SobreMi.propTypes = {
    modoOscuro: PropTypes.bool.isRequired,
  };

  return (
    <div className={`sobre-mi ${modoOscuro ? "modo-oscuro" : ""}`}>
      <h2>
        Sobre mí
        <lord-icon
          src="https://cdn.lordicon.com/zorvjzqh.json"
          trigger="loop"
          delay="1000"
          colors={
            modoOscuro
              ? "primary:#ffffff,secondary:#00bfa5"
              : "primary:#000000,secondary:#005f4b"
          }
          style={{
            width: "3rem",
            height: "3rem",
            marginLeft: "0.5rem",
            verticalAlign: "middle",
          }}
        ></lord-icon>
      </h2>
      <p>
        Soy un estudiante de Informática en la Universidad Nacional de
        Hurlingham que busca desarrollarse en el mundo de la programación y el
        desarrollo web. Me gusta aprender cosas nuevas y siempre estoy en la
        búsqueda de nuevos desafíos.
      </p>
    </div>
  );
};

export default SobreMi;
