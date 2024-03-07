const db = firebase.firestore();

// Función para guardar una película
const saveMovie = async () => {
    const movieName = document.getElementById("movieName").value;
    const movieDescription = document.getElementById("movieDescription").value;
    const movieLink = document.getElementById("movieLink").value;

    await db.collection("movies").add({
        name: movieName,
        description: movieDescription,
        link: movieLink,
    });

    document.getElementById("movieName").value = "";
    document.getElementById("movieDescription").value = "";
    document.getElementById("movieLink").value = "";

    refreshMovieTable();
};

// Función para actualizar una película
const updateMovie = async (movieId, newData) => {
    await db.collection("movies").doc(movieId).update(newData);
    refreshMovieTable();
};

// Función para eliminar una película



// Función para editar una película


// Función para refrescar la tabla de películas
const refreshMovieTable = async () => {
    const snapshot = await db.collection("movies").get();
    const movieTable = document.getElementById("movieTable");

    movieTable.innerHTML = `
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Enlace</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    snapshot.forEach((doc) => {
        const movieData = doc.data();
        const row = movieTable.insertRow();

        row.innerHTML = `
           <td>${movieData.name}</td>
    <td>${movieData.description}</td>
    <td><a href="${movieData.link}" target="_blank">Ver</a></td>
    <td>
        <button class="edit-button" onclick="editMovie('${doc.id}')">Editar</button>
        <button class="delete-button" onclick="deleteMovie('${doc.id}')">Eliminar</button>
    </td>
`;
    });
};

// Llamada inicial para cargar las películas al cargar la página
refreshMovieTable();