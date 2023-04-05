const signupFormHandler = async function(event) {
  event.preventDefault();

  const nameEl = document.querySelector('#name-signup');
  const userEmail = document.querySelector('#email-signup');
  const passowrdEl = document.querySelector('#password-signup');

  const response = await fetch('api/signup', {
    method: 'POST',
    body: JSON.stringify({
      name: nameEl.value,
      email: userEmail.value,
      password: passowrdEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to sign up.');
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);