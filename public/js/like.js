const like = (e) => {
  e.target.classList.add("animate__animated", "animate__flip");

  const is_liked = true;
  const movie_id = event.target.querySelector('input[name="like-id"]').value;
  const response = fetch(`/api/likes/`, {
    method: "POST",
    body: JSON.stringify({
      is_liked,
      movie_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    location.reload();
  } else {
    console.log(response);
  }
};

document.querySelectorAll(".like-button").forEach(function (item) {
  item.addEventListener("click", like);
});
