function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Here you can add your code to log in the user.
  // For example, you can use fetch to send the email and password to your server:

  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then(data => {
    // Here you can handle the response from the server, for example, show a confirmation message to the user or redirect to another page.
    console.log(data);
  })
  .catch(error => {
    // Here you can handle any errors that may occur while logging in the user.
    console.error(error);
  });
}

function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Here you can add your code to sign up the user.
  // For example, you can use fetch to send the name, email, and password to your server:

  fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
  .then(response => response.json())
  .then(data => {
    // Here you can handle the response from the server, for example, show a confirmation message to the user or redirect to another page.
    console.log(data);
  })
  .catch(error => {
    // Here you can handle any errors that may occur while signing up the user.
    console.error(error);
  });
}
