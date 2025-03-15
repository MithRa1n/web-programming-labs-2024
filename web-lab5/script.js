let editingMovie = null;
let movies = [];

const moviesList = document.getElementById("movies-list");
const totalIMDb = document.getElementById("total-imdb");
const formModal = document.getElementById("form-modal");
const createMovieBtn = document.getElementById("create-movie-btn");
const cancelFormBtn = document.getElementById("cancel-form-btn");
const buttonSubmit = document.getElementById("submit");
const movieForm = document.getElementById("movie-form");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const sortOptions = document.getElementById("sort-options");
const sortBtn = document.getElementById("sort-btn");

createMovieBtn.addEventListener("click", () => {
  formModal.style.display = "flex";
  movieForm.reset();
  editingMovie = null;
});

cancelFormBtn.addEventListener("click", () => {
  formModal.style.display = "none";
});

buttonSubmit.addEventListener("click", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const imdbRating = parseFloat(document.getElementById("imdbRating").value);
  const duration = parseInt(document.getElementById("duration").value);
  const image = document.getElementById("image").value;

  if (!title || isNaN(imdbRating) || imdbRating < 0 || imdbRating > 10 || isNaN(duration) || duration <= 0 || !image) {
    alert("Будь ласка, заповніть всі поля коректно!");
    return;
  }

  const movie = { title, imdbRating, duration, image };

  if (editingMovie === null) {
    await createMovie(movie);
  } else {
    await updateMovie(editingMovie, movie);
    editingMovie = null;
  }

  fetchMovies();
  formModal.style.display = "none";
});

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
  renderFilteredItems(filteredMovies);
});

sortBtn.addEventListener("click", () => {
  const sortBy = sortOptions.value;
  let sortedMovies;

  if (sortBy === "imdb") {
    sortedMovies = [...movies].sort((a, b) => b.imdbRating - a.imdbRating);
  } else if (sortBy === "duration") {
    sortedMovies = [...movies].sort((a, b) => b.duration - a.duration);
  }

  renderFilteredItems(sortedMovies);
});

async function createMovie(movie) {
  try {
    const response = await fetch('http://localhost:5050/api/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    });
    return await response.json();
  } catch (error) {
    console.error('Помилка при створенні фільму:', error);
  }
}

async function updateMovie(id, movie) {
  try {
    const response = await fetch(`http://localhost:5050/api/movies/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    });
    return await response.json();
  } catch (error) {
    console.error('Помилка при оновленні фільму:', error);
  }
}

async function fetchMovies() {
  try {
    const response = await fetch('http://localhost:5050/api/movies');
    movies = await response.json();
    renderFilteredItems(movies);
  } catch (error) {
    console.error('Помилка при отриманні фільмів:', error);
  }
}

function renderFilteredItems(filteredMovies) {
  moviesList.innerHTML = "";
  filteredMovies.forEach((movie, index) => {
    const li = document.createElement("li");
    li.classList.add("flex", "items-center", "space-x-4", "bg-gray-200", "p-4", "rounded", "shadow");
    li.innerHTML = `
      <img src="${movie.image}" class="w-24 h-36 rounded object-cover">
      <div>
        <h2 class="text-xl font-bold">${movie.title}</h2>
        <p>IMDb Rating: <span class="font-semibold">${movie.imdbRating}</span></p>
        <p>Duration: <span class="font-semibold">${movie.duration}</span> mins</p>
        <button class="edit-button bg-yellow-500 text-white px-4 py-1 rounded mt-2" data-index="${index}">Edit</button>
        <button class="delete-button bg-red-500 text-white px-4 py-1 rounded mt-2" data-index="${index}">Delete</button>
      </div>
    `;
    li.querySelector(".edit-button").addEventListener("click", () => {
      editingMovie = movie.id;
      document.getElementById("title").value = movie.title;
      document.getElementById("imdbRating").value = movie.imdbRating;
      document.getElementById("duration").value = movie.duration;
      document.getElementById("image").value = movie.image;
      formModal.style.display = "flex";
    });
    li.querySelector(".delete-button").addEventListener("click", async () => {
      await deleteMovie(movie.id);
      fetchMovies();
    });
    moviesList.appendChild(li);
  });

  const total = filteredMovies.reduce((acc, movie) => acc + movie.imdbRating, 0);
  totalIMDb.textContent = total.toFixed(1);
}

async function deleteMovie(id) {
  try {
    await fetch(`http://localhost:5050/api/movies/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error('Помилка при видаленні фільму:', error);
  }
}

fetchMovies();
