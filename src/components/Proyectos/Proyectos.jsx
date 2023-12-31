import reactIcon from "../../assets/react.svg";
import materialUIIcon from "../../assets/material-ui.svg";
import nodeIcon from "../../assets/nodejs.svg";
import sequelizeIcon from "../../assets/sequelize.svg";
import postgresIcon from "../../assets/postgresql.svg";
import supabaseIcon from "../../assets/supabase.svg";
import htmlIcon from "../../assets/html5.svg";
import cssIcon from "../../assets/css.svg";
import socketIcon from "../../assets/socketio.svg";
import comunidadDeTrabajo from "../../assets/comunidad-de-trabajo.jpg";
import chat from "../../assets/chat.png";
import rickAndMortyApp from "../../assets/ejemploInicio.png";
import clima from "../../assets/Clima.jpg";

import "./proyectos.css";

import PropTypes from "prop-types";

const Proyectos = ({ modoOscuro }) => {
  Proyectos.propTypes = {
    modoOscuro: PropTypes.bool.isRequired,
  };

  return (
    <div className={`proyectos ${modoOscuro ? "modo-oscuro" : ""}`}>
      <h2>
        Proyectos
        <lord-icon
          src="https://cdn.lordicon.com/lzgmgrnn.json"
          trigger="loop"
          delay="1000"
          colors={modoOscuro ? "primary:#ffffff" : "primary:#000000"}
          style={{
            width: "3rem",
            height: "3rem",
            marginLeft: "0.5rem",
            verticalAlign: "middle",
          }}
        ></lord-icon>
      </h2>
      <div className="proyecto">
        <div className="info-proyecto">
          <h3>Bolsa de empleo UNAHUR</h3>
          <p>
            Bolsa de empleo para la comunidad de la Universidad Nacional de
            Hurlingham. Esta aplicación permite a los usuarios registrarse y
            postularse a las ofertas de trabajo publicadas por las empresas. El
            administrador puede gestionar las ofertas de trabajo y los datos de
            los usuarios.
          </p>
          <div className="tecnologias">
            <span className="icono-tecnologia" alt="React" title="React">
              <img src={reactIcon} alt="React" title="" />
            </span>
            <span
              className="icono-tecnologia"
              alt="MaterialUI"
              title="MaterialUI"
            >
              <img src={materialUIIcon} alt="MaterialUI" title="" />
            </span>
            <span className="icono-tecnologia" alt="Node.js" title="Node.js">
              <img src={nodeIcon} alt="Node.js" title="" />
            </span>
            <span
              className="icono-tecnologia"
              alt="Sequelize"
              title="Sequelize"
            >
              <img src={sequelizeIcon} alt="Sequelize" title="" />
            </span>
            <span
              className="icono-tecnologia"
              alt="PostgreSQL"
              title="PostgreSQL"
            >
              <img src={postgresIcon} alt="PostgreSQL" title="" />
            </span>
            <span className="icono-tecnologia" alt="Supabase" title="Supabase">
              <img src={supabaseIcon} alt="Supabase" title="" />
            </span>
          </div>
          <div className="botones">
            <a
              className="boton-proyecto"
              href="https://github.com/PPS-2023c2-Grupo-3/comunidad-de-trabajo-front-end"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend
            </a>
            <a
              className="boton-proyecto"
              href="https://github.com/PPS-2023c2-Grupo-3/comunidad-backend-v3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Backend
            </a>
            <a
              className="boton-proyecto"
              href="https://comunidad-de-trabajo-unahur-comunidad-de-trabajo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </div>
        </div>
        <div className="imagenes-proyecto">
          <img
            src={comunidadDeTrabajo}
            alt="Proyecto 1"
            onClick={() =>
              window.open(
                "https://comunidad-de-trabajo-unahur-comunidad-de-trabajo.vercel.app/"
              )
            }
          />
        </div>
      </div>
      <div className="proyecto">
        <div className="info-proyecto">
          <h3>Equivalencias UNAHUR</h3>
          <p>
            Gestor de pedidos de equivalencias para la Universidad Nacional de
            Hurlingham al cual se le incorporo la funcionalidad de chat para
            poder comunicarse con los alumnos.
          </p>
          <div className="tecnologias">
            <span className="icono-tecnologia" alt="React" title="React">
              <img src={reactIcon} alt="React" title="" />
            </span>
            <span
              className="icono-tecnologia"
              alt="MaterialUI"
              title="MaterialUI"
            >
              <img src={materialUIIcon} alt="MaterialUI" title="" />
            </span>
            <span className="icono-tecnologia" alt="Node.js" title="Node.js">
              <img src={nodeIcon} alt="Node.js" title="" />
            </span>
            <span
              className="icono-tecnologia"
              alt="Sequelize"
              title="Sequelize"
            >
              <img src={sequelizeIcon} alt="Sequelize" title="" />
            </span>
            <span
              className="icono-tecnologia"
              alt="PostgreSQL"
              title="PostgreSQL"
            >
              <img src={postgresIcon} alt="PostgreSQL" title="" />
            </span>
            <span
              className="icono-tecnologia"
              alt="Socket.IO"
              title="Socket.IO"
            >
              <img src={socketIcon} alt="Socket.IO" title="" />
            </span>
          </div>
          <div className="botones">
            <a
              className="boton-proyecto"
              href="https://github.com/DesApp-2023c1-Grupo-3/equivalencias-front-end"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend
            </a>
            <a
              className="boton-proyecto"
              href="https://github.com/DesApp-2023c1-Grupo-3/equivalencias-back-end"
              target="_blank"
              rel="noopener noreferrer"
            >
              Backend
            </a>
          </div>
        </div>
        <div className="imagenes-proyecto">
          <img src={chat} alt="Proyecto 2" />
        </div>
      </div>
      <div className="proyecto">
        <div className="info-proyecto">
          <h3>Rick and Morty App</h3>
          <p>
            Rick and Morty App es una aplicación web que permite visualizar
            información sobre la serie animada Rick and Morty. En esta
            encontrarás información sobre los personajes, episodios y locaciones
            de la famosa serie.
          </p>
          <div className="tecnologias">
            <span className="icono-tecnologia" alt="React" title="React">
              <img src={reactIcon} alt="React" title="" />
            </span>
            <span
              className="icono-tecnologia"
              alt="MaterialUI"
              title="MaterialUI"
            >
              <img src={materialUIIcon} alt="MaterialUI" title="" />
            </span>
            <span className="icono-tecnologia" alt="HTML5" title="HTML5">
              <img src={htmlIcon} alt="HTML5" title="" />
            </span>
            <span className="icono-tecnologia" alt="CSS3" title="CSS3">
              <img src={cssIcon} alt="CSS3" title="" />
            </span>
          </div>
          <div className="botones">
            <a
              className="boton-proyecto"
              href="https://github.com/Gonzalo09/Rick-and-Morty-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              Código
            </a>
            <a
              className="boton-proyecto"
              href="https://rick-and-morty-series-app.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </div>
        </div>
        <div className="imagenes-proyecto">
          <img
            src={rickAndMortyApp}
            alt="Proyecto 3"
            onClick={() =>
              window.open("https://rick-and-morty-series-app.netlify.app/")
            }
          />
        </div>
      </div>
      <div className="proyecto">
        <div className="info-proyecto">
          <h3>Clima Argentina</h3>
          <p>
            Aplicación web que permite visualizar las condiciones climáticas de
            cualquier ciudad de Argentina. Además de proporcionar datos del
            clima actual, como visibilidad, humedad, presión, etc., también
            podrás consultar el pronóstico extendido de 3 días.
          </p>
          <div className="tecnologias">
            <span className="icono-tecnologia" alt="React" title="React">
              <img src={reactIcon} alt="React" title="" />
            </span>
            <span className="icono-tecnologia" alt="HTML5" title="HTML5">
              <img src={htmlIcon} alt="HTML5" title="" />
            </span>
            <span className="icono-tecnologia" alt="CSS3" title="CSS3">
              <img src={cssIcon} alt="CSS3" title="" />
            </span>
          </div>
          <div className="botones">
            <a
              className="boton-proyecto"
              href="https://github.com/Gonzalo09/clima"
              target="_blank"
              rel="noopener noreferrer"
            >
              Código
            </a>
            <a
              className="boton-proyecto"
              href="https://clima-argentina.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </div>
        </div>
        <div className="imagenes-proyecto">
          <img
            src={clima}
            alt="Proyecto 4"
            onClick={() => window.open("https://clima-argentina.vercel.app/")}
          />
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
