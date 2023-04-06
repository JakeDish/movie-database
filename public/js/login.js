const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });


  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({ 
      email: userEmail.value, 
      password: passwordEl.value, }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {

    document.location.replace('/dashboard');
  } else {
    alert('Failed to login');

  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
