// Inicializa la aplicación de Firebase


const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

// Función para registrarse
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

// Crea un nuevo usuario en Firebase
    auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
          
          // Redirige a la página de películas
            window.location.href = "peliculas.html";
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });
}

const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((result) => {
            window.location.href = "peliculas.html";
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });
}