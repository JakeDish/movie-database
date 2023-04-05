const newMovieHandler = async (event) => {
  event.preventDefault();

  const filmName = document.querySelector("#film-name").value.trim();
  const filmDescription = document
    .querySelector("#film-description")
    .value.trim();

  if (filmName && filmDescription) {
    const res = await fetch(`/api/movieSubmission`, {
      method: "POST",
      body: JSON.stringify({ filmName, filmDescription }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  if (res.ok) {
    document.location.replace("/dashboard");
  } else {
    console.log("Failed creating movie");
  }
};

document.querySelector(".button").addEventListener("submit", newMovieHandler);
