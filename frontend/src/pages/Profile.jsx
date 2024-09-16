import React from 'react';

const Profile = () => {
  const email = "usuario@ejemplo.com"; 
  const handleLogout = () => {
    
    console.log("Cerrando sesión...");
  };

  return (
    <div>
      <h1>Perfil del Usuario</h1>
      <p>Email: {email}</p>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Profile;
