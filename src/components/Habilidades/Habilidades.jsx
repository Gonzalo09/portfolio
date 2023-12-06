import reactIcon from "../../assets/react.svg";
import materialUIIcon from "../../assets/material-ui.svg";
import nodeIcon from "../../assets/nodejs.svg";
import sequelizeIcon from "../../assets/sequelize.svg";
import postgresIcon from "../../assets/postgresql.svg";
import supabaseIcon from "../../assets/supabase.svg";
import htmlIcon from "../../assets/html5.svg";
import cssIcon from "../../assets/css.svg";
import githubIcon from "../../assets/github-mark.svg";
import githubIcon2 from "../../assets/github-mark-white.svg";
import trelloIcon from "../../assets/trello.svg";
import figmaIcon from "../../assets/figma.svg";

import PropTypes from "prop-types";

import "./habilidades.css";

const Habilidades = ({ modoOscuro }) => {
  Habilidades.propTypes = {
    modoOscuro: PropTypes.bool.isRequired,
  };

  return (
    <div className={`habilidades ${modoOscuro ? "modo-oscuro" : ""}`}>
      <h2>
        Habilidades
        <lord-icon
          src="https://cdn.lordicon.com/yxyampao.json"
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
      <div className="tecnologias-habilidades">
        <span className="icono-tecnologia-habilidades" title="React">
          <img src={reactIcon} alt="React" title="" />
        </span>
        <span className="icono-tecnologia-habilidades" title="MaterialUI">
          <img src={materialUIIcon} alt="Material-UI" title="" />
        </span>
        <span className="icono-tecnologia-habilidades" title="Node.js">
          <img src={nodeIcon} alt="Node.js" title="" />
        </span>
        <span className="icono-tecnologia-habilidades" title="Sequelize">
          <img src={sequelizeIcon} alt="Sequelize" title="" />
        </span>
        <span className="icono-tecnologia-habilidades" title="PostgreSQL">
          <img src={postgresIcon} alt="PostgreSQL" title="" />
        </span>
        <span className="icono-tecnologia-habilidades" title="Supabase">
          <img src={supabaseIcon} alt="Supabase" title="" />
        </span>
        <span className="icono-tecnologia-habilidades" title="HTML">
          <img src={htmlIcon} alt="HTML" title="" />
        </span>
        <span className="icono-tecnologia-habilidades" title="CSS">
          <img src={cssIcon} alt="CSS" title="" />
        </span>
        <span className="icono-tecnologia-habilidades" title="GitHub">
          {modoOscuro ? (
            <img src={githubIcon2} alt="GitHub" title="" />
          ) : (
            <img src={githubIcon} alt="GitHub" title="" />
          )}
        </span>
        <span className="icono-tecnologia-habilidades" title="Trello">
          <img src={trelloIcon} alt="Trello" title="" />
        </span>
        <span className="icono-tecnologia-habilidades" title="Figma">
          <img src={figmaIcon} alt="Figma" title="" />
        </span>
      </div>
    </div>
  );
};

export default Habilidades;
