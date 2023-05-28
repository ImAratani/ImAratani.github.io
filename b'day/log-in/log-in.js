function validateLogin() {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar si el usuario y la contraseña son correctos
    if (username === "Cheesecake" && password === "23062023") {
        // Redirigir a la página de bienvenida
        window.location.href = "../main/main.html";
    } else {
        // Mostrar un mensaje de error
        alert("Nombre de usuario o contraseña incorrectos. Intenta de nuevo.");
    }
}
