const editMovieHandler = async () => {
  const movie_name = document.querySelector("#movie-title").textContent;
  const movie_description = document.querySelector("#desc").textContent;
  const image_name = document.querySelector("#movie-img").textContent;

  // get movie id from url
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/movies/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      movie_name,
      movie_description,
      image_name,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("not able to update");
  }
};

document
  .querySelector("#save-button")
  .addEventListener("click", editMovieHandler);
