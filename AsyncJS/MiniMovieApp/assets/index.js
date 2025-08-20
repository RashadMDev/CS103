const list = document.querySelector("#movie-list");
const btn = document.querySelector(".submit-btn")

async function getMovies() {
      try {
            const movies = await axios.get('https://68a2a7ecc5a31eb7bb1d65e8.mockapi.io/movies/movies')
            console.log(movies.data);

            const myMovies = movies.data

            myMovies.forEach(movie => {
                  const li = document.createElement("li");
                  li.innerHTML = `
                        <img class="movie-poster" src="${movie.poster}" alt="${movie.title}">
                        <h2>${movie.title}</h2>
                        <p>${movie.genre}</p>
                        <p>${movie.description}</p>
                        <p>${movie.imdb_rating}</p>
                        <p>${movie.release_date}</p>
                        <button class="delete-btn" data-id="${movie.id}">Delete</button>
                  `;
                  list.appendChild(li);
                  const delBtn = li.querySelector(".delete-btn");
                  delBtn.addEventListener('click', deleteMovie);
            });

      } catch (error) {
            console.error("Error");

      }
}

async function addMovie(event) {
      event.preventDefault();

      const newMovie = {
            title: document.getElementById("title").value,
            genre: document.getElementById("genre").value,
            description: document.getElementById("description").value,
            imdb_rating: document.getElementById("imdb_rating").value,
            release_date: document.getElementById("release_date").value,
            poster: document.getElementById("poster").value
      };

      try {
            await axios.post('https://68a2a7ecc5a31eb7bb1d65e8.mockapi.io/movies/movies', newMovie);
            Swal.fire({
                  title: "Movie Succesfully added",
                  icon: "success"
            });
            getMovies();
      } catch (error) {
            console.error("Error");
      }
}

async function deleteMovie(event) {
      const movieId = event.target.getAttribute("data-id");
      if (movieId) {
            try {
                  await axios.delete(`https://68a2a7ecc5a31eb7bb1d65e8.mockapi.io/movies/movies/${movieId}`);
                  Swal.fire({
                        title: "Movie Succesfully deleted",
                        icon: "success"
                  });
                  getMovies();
            } catch (error) {
                  console.error("Error");
            }
      }
}



getMovies();
btn.addEventListener('click', addMovie);
