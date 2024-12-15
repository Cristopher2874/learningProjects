const AccountPage = () => {
  const user = {
    name: "David Hernandez",
    email: "john.doe@example.com",
    bio: "Full Stack Developer and tech enthusiast. Passionate about coding, learning, and sharing knowledge.",
    avatar: "https://via.placeholder.com/150", // Cambiar a ruta de imagen
    joinDate: "January 10, 2023",
    location: "New York, USA",
    role: "Administrator",
  };

  return (
    <div className="p-4 mt-1 text-[#333] bg-[#f9f9f9] h-screen w-full">
      <header className="bg-black text-white p-4 rounded-lg flex justify-around items-center h-auto">
        <img className=" flex-roww-36 h-auto rounded-full text-white p-3" src={user.avatar} alt={`${user.name}'s avatar`} />
        <div className="m-0 font-2 flex-row">
          <h1>{user.name}</h1>
          <p className="mt-1 text-opacity-0.1">{user.email}</p>
        </div>
      </header>

      <section className="mt-4 bg-white p-3 rounded-lg shadow-md">
        <h2 className="mb-2 text-black">About</h2>
        <p>{user.bio}</p>
      </section>

      <section className="profile-details">
        <h2>Details</h2>
        <ul>
          <li><strong>Role:</strong> {user.role}</li>
          <li><strong>Location:</strong> {user.location}</li>
          <li><strong>Joined:</strong> {user.joinDate}</li>
        </ul>
      </section>

      <section className="evaluations">
        <h2>Evaluations</h2>
        <ul>
          <li>A</li>
        </ul>
      </section>
    </div>
  );
};

export default AccountPage;
