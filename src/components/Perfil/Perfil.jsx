import avatar from "../../assets/Avatar.svg";
import githubIcon from "../../assets/github-mark.svg";
import githubIcon2 from "../../assets/github-mark-white.svg";
import linkedinIcon from "../../assets/linkedin.svg";

import PropTypes from "prop-types";

import "./perfil.css";

const Perfil = ({ modoOscuro }) => {
  Perfil.propTypes = {
    modoOscuro: PropTypes.bool.isRequired,
  };

  return (
    <div className={`perfil ${modoOscuro ? "modo-oscuro" : ""}`}>
      <div className={`foto-perfil ${modoOscuro ? "modo-oscuro" : ""}`}>
        <img src={avatar} alt="Foto de perfil" />
      </div>
      <div className="nombre-perfil">
        <h1>Gonzalo Iglesias</h1>
        <p>
          Apasionado por la tecnología, la programación y el desarrollo web.
        </p>
        <button
          className={`boton-cv ${modoOscuro ? "modo-oscuro" : ""}`}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1crg0_LaJb9l-hFWDM9ZC5TugHz2P4C5a/view?usp=sharing"
            )
          }
        >
          <lord-icon
            src="https://cdn.lordicon.com/rbbnmpcf.json"
            trigger="loop"
            delay="1000"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              marginRight: "0.5rem",
              verticalAlign: "middle",
            }}
          ></lord-icon>
          Curriculum Vitae
        </button>
        <button
          className={`boton-github ${modoOscuro ? "modo-oscuro" : ""}`}
          onClick={() => window.open("https://github.com/Gonzalo09")}
        >
          <img
            className="icono-github"
            src={modoOscuro ? githubIcon2 : githubIcon}
            alt="GitHub"
          />
        </button>
        <button
          className={`boton-linkedin ${modoOscuro ? "modo-oscuro" : ""}`}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/gonzalo-iglesias-57612b192/"
            )
          }
        >
          <img className="icono-linkedin" src={linkedinIcon} alt="LinkedIn" />
        </button>
      </div>
    </div>
  );
};

export default Perfil;
