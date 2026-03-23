const updateUserForm = document.getElementById('updateUserForm');
const statusContainer = document.getElementById('statusContainer');
const statusText = document.getElementById('status');


const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');


if (userId) {
  fetch(`https://dummyjson.com/users/${userId}`)
    .then(res => res.json())
    .then(user => {
      document.getElementById('firstName').value = user.firstName;
      document.getElementById('lastName').value = user.lastName;
      document.getElementById('age').value = user.age;
    })
    .catch(err => showStatus("Failed to load user data!", true));
}


updateUserForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(updateUserForm);
  const updatedData = Object.fromEntries(formData.entries());

  fetch(`https://dummyjson.com/users/${userId}`, {
    method: 'PUT', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData)
  })
    .then(res => {
      if (!res.ok) throw Error("Güncelleme başarısız!");
      return res.json();
    })
    .then(data => {
      showStatus(`User ${data.id} updated successfully!`);
      // 2 saniye sonra ana sayfaya dön
      setTimeout(() => { window.location.href = '../index.html'; }, 2000);
    })
    .catch(err => showStatus(err.message, true));
});

function showStatus(message, isError = false) {
  statusContainer.classList.remove('hidden');
  statusText.textContent = message;
  statusContainer.style.backgroundColor = isError ? '#fdecea' : '#e8f5e9';
  statusContainer.style.color = isError ? '#7a0916' : '#2e7d32';
}