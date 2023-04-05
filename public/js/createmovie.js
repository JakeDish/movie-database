const newMovieHandler = async (event) => {
  event.preventDefault();

  const movie_name = document.querySelector("#film-name").value.trim();
  const movie_description = document
    .querySelector("#film-description")
    .value.trim();
  const image_name = document.querySelector("#film-image").value.trim();

  const user_id = 1;

  if (movie_name && movie_description && image_name) {
    const response = await fetch(`/api/movies`, {
      method: "POST",
      body: JSON.stringify({ movie_name, movie_description, image_name }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create movie");
    }
  }
};

document
  .querySelector(".new-movie")
  .addEventListener("submit", newMovieHandler);
