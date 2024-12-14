import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const courses = [
  { id: 1, title: "Seguridad", description: "Seguridad en la planta y uso de herramientas", route: "react-basics" },
  { id: 2, title: "GM platform", description: "Conexión a la plataforma GM", route: "advanced-js" },
  { id: 3, title: "Introducción", description: "Conoce Magna Inctrl", route: "ui-ux-design" },
  { id: 4, title: "Servicio al cliente", description: "Atención efectiva de activos y clientes", route: "data-structures" },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    navigate(`/courses/${route}`);
  };

  return (
    <div className="dashboard">
      <div className="main-content">
        <h2>Cursos actuales</h2>
        <hr className="separator" />
        <div className="card-container">
          {courses.map((course) => (
            <div
              key={course.id}
              className="card"
              onClick={() => handleCardClick(course.route)}
            >
              <h2>{course.title}</h2>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="sidebar">
        <h4>Por hacer</h4>
        <hr className="separator"/>
        <p>Nada actual</p>
        <br />
        <h4>Evaluaciones recientes</h4>
        <hr className="separator"/>
        <p>Sin evaluaciones</p>
        <a href="/">Ver evaluciones</a>
      </div>
    </div>
  );
};

export default Dashboard;