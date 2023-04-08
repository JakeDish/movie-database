const editMovieHandler = async (event) => {
  event.preventDefault();

  const movie_name = document.querySelector("#movie-title").textContent;
  const movie_description = document.querySelector("#desc").textContent;
  let image_name = document.querySelector("#movie-img").textContent;

  // get movie id from url
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const testing = await fetch(`/api/movies/${id}`);
  const img = await testing.json();
  console.log(img.image_name);
  const image_nameNew = img.image_name;

  if (image_name === "Enter a new URL for the image") {
    image_name = image_nameNew;
  }

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
