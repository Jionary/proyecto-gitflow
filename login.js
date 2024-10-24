// Código básico para la funcionalidad de inicio de sesión
function login(username, password) {
  // Datos de usuario simulados (en un caso real, estos datos vendrían de una base de datos)
  const users = [
    { username: "usuario1", password: "contraseña1" },
    { username: "usuario2", password: "contraseña2" },
  ];

  // Buscar el usuario en la lista
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    console.log("Inicio de sesión exitoso. Bienvenido, " + username + "!");
    // Aquí podrías redirigir al usuario a una página de bienvenida o dashboard
    return true;
  } else {
    console.log("Nombre de usuario o contraseña incorrectos.");
    return false;
  }
}

// Ejemplo de uso
const usernameInput = "usuario1";
const passwordInput = "contraseña1";
login(usernameInput, passwordInput);
