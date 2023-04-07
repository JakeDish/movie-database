const movieId = document.querySelector('input[name="movie-id"]').value;


const deleteHandler = async (event) => {
  const delete_movie = await fetch(`/api/movies/${movieId}`, {
    method: "DELETE",
  });

  if (delete_movie.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to delete movie");
  }
}; 

document.querySelector("#deleteBtn").addEventListener("click", deleteHandler);
