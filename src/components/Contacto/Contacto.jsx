import PropTypes from "prop-types";

import "./contacto.css";

const Contacto = ({ modoOscuro }) => {
  Contacto.propTypes = {
    modoOscuro: PropTypes.bool,
  };

  return (
    <div className={`contacto ${modoOscuro ? "modo-oscuro" : ""}`}>
      <h2>
        Contacto
        <lord-icon
          src="https://cdn.lordicon.com/nzixoeyk.json"
          trigger="loop"
          colors={modoOscuro ? "primary:#ffffff" : "primary:#000000"}
          delay="1000"
          style={{
            width: "3rem",
            height: "3rem",
            marginLeft: "0.5rem",
            verticalAlign: "middle",
          }}
        ></lord-icon>
      </h2>

      <p>
        Si deseas contactarme, puedes hacerlo enviándome un correo electrónico a{" "}
        <a href="mailto:gonza.iglesias00@gmail.com">
          gonza.iglesias00@gmail.com.
        </a>
      </p>
    </div>
  );
};

export default Contacto;
