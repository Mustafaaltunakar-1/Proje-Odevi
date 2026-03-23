const createUserForm = document.getElementById('createUserForm');
const statusContainer = document.getElementById('statusContainer');
const statusText = document.getElementById('status');

createUserForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(createUserForm);
  const userData = Object.fromEntries(formData.entries());
  
  fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(
          `Failed creating user`,
          response.status, 
          response.statusText,
        );
      }
      return response.json();
    }
    )
    .then((data) => {
      showStatus(`User created successfully with id ${data.id}`);
      createUserForm.reset();
    })
    .catch((error) => {
      console.error('Failed creating user', error);
      showStatus(`Failed creating user: ${error.message}`, true);
    });
});

function showStatus(message, isError = false) {
  statusContainer.classList.remove('hidden');
  statusText.textContent = message;
  statusContainer.style.backgroundColor = isError ? '#fdecea' : '#e8f5e9';
  statusContainer.style.color = isError ? '#7a0916' : '#2e7d32';
}

