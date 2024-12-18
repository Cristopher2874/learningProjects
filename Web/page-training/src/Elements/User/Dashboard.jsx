import { useNavigate } from "react-router-dom";

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
    <div className="flex flex-row p-5 text-start bg-white min-h-screen text-black overflow-hidden
    box-border w-full justify-between
  ">
      <section className="flex-2">
        <h2 className="text-3xl">Cursos actuales</h2>
        <hr className="border-t-[#888b8d] mb-6 w-full mt-3" />
        <div className="flex flex-wrap gap-5 justify-start items-start mx-0 my-auto max-w-full box-border">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border-[#ddd] border rounded-md p-5 w-64 shadow-sm cursor-pointer transition transform duration-200 hover:translate-y-[-5px] hover:shadow-md"
              onClick={() => handleCardClick(course.route)}
            >
              <h2 className="text-xl mb-4">{course.title}</h2>
              <p className="test-[#555] text-sm">{course.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex-0.3 ml-6">
        <h4>Por hacer</h4>
        <hr className="border-t-[#888b8d] mb-6 w-full mt-3"/>
        <p>Nada actual</p>
        <br />
        <h4>Evaluaciones recientes</h4>
        <hr className="border-t-[#888b8d] mb-6 w-full mt-3"/>
        <p>Sin evaluaciones</p>
        <a href="/evaluacion">Ver evaluciones</a>
      </section>
    </div>
  );
};

export default Dashboard;