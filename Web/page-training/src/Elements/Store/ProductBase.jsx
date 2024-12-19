const courses = [
    { id: 1, title: "Safety", description: "Safety in workshop and tools", route: "react-basics" },
    { id: 2, title: "platforms", description: "Conexion to the main page", route: "advanced-js" },
    { id: 3, title: "Introduction", description: "Know the new tools", route: "ui-ux-design" },
    { id: 4, title: "Client attention", description: "Effective antention and clients", route: "data-structures" },
    { id: 5, title: "Client attention", description: "Effective antention and clients", route: "data-structures" },
    { id: 6, title: "Client attention", description: "Effective antention and clients", route: "data-structures" },
    { id: 7, title: "Client attention", description: "Effective antention and clients", route: "data-structures" },
  ];

const ProductCard = () => {
    return (
    <div className="flex flex-row p-5 items-start bg-[#f3f1f2ff] min-h-full text-black overflow-auto
        box-border w-4/5 justify-center
    ">
      <section className="flex">
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
    </div>
    );
};

export default ProductCard;