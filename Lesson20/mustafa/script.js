const dateInput = document.getElementById("date");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

const selectedUsername = document.getElementById("selected-username");
const selectedEmail = document.getElementById("selected-email");
const selectedDate = document.getElementById("selected-date");
const confirmButton = document.getElementById("confirm");
const timeslotButtons = document.getElementsByClassName("slot");
const selectedTime = document.getElementById("selected-time");
const bookingForm = document.querySelector('form.booking');
const confirmedDate = document.getElementById('confirmed-date');
const confirmedTime = document.getElementById('confirmed-time');
const confirmationMessage = document.getElementById('confirmation-message');
const confirmedUsername = document.getElementById('confirmed-username');
const confirmedEmail = document.getElementById('confirmed-email');

const data = {
  date: null,
  time: null,
};

nameInput.addEventListener("input", function () {
  selectedUsername.textContent = nameInput.value;
});

emailInput.addEventListener("input", function () {
  selectedEmail.textContent = emailInput.value;
});

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const minDate = tomorrow.toISOString().split('T')[0];
dateInput.setAttribute('min', minDate);

dateInput.addEventListener("change", function () {
  selectedDate.textContent = dateInput.value;
  data.date = dateInput.value;
  allowSubmit();
});

[...timeslotButtons].forEach((button) =>
  button.addEventListener("click", () => showSelectedTime(button)),
);

bookingForm.addEventListener('submit', function(event) {
  event.preventDefault();
  if (!data.date && !data.time) {
    return;
  }
  bookingForm.classList.add('hidden');
  confirmedDate.textContent = data.date;
  confirmedTime.textContent = data.time;
  confirmedUsername.textContent = nameInput.value;
  confirmedEmail.textContent = emailInput.value;
  confirmationMessage.classList.remove('hidden');

});



function showSelectedTime(button) {
  deSelectTimeSlots();
  button.classList.add("selected");
  selectedTime.textContent = button.textContent;
  data.time = button.textContent;
  allowSubmit();
}

function deSelectTimeSlots() {
  [...timeslotButtons].forEach((button) => 
    button.classList.remove("selected"));
}

function allowSubmit() {
  if (data.date && data.time) {
    confirmButton.removeAttribute("disabled");
  }
}
