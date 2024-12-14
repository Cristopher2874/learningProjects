import React from "react";
import "./AccountCard.css";

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
    <div className="account-page">
      <header className="profile-header">
        <img className="avatar" src={user.avatar} alt={`${user.name}'s avatar`} />
        <div className="header-details">
          <h1>{user.name}</h1>
          <p className="email">{user.email}</p>
        </div>
      </header>

      <section className="profile-info">
        <h2>About</h2>
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
