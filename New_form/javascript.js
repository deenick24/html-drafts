// Get references to the select elements
const projectSelect = document.getElementById("project");
const funderSelect = document.getElementById("funder");

// Add an event listener to the project select
projectSelect.addEventListener("change", function () {
  // Get the selected option's value from the project select
  const selectedValue = projectSelect.value;

  // Set the value of the funder select based on the selected value in the project select
  if (selectedValue === "ace_5") {
    funderSelect.value = "USAID";
  } else if (selectedValue === "nahi") {
    funderSelect.value = "global_fund";
  } else if (selectedValue === "speed") {
    funderSelect.value = "CDC";
  } else {
    // If no match is found, you can handle it accordingly, e.g., set a default value
    funderSelect.value = ""; // Set to empty if no match
  }
});
// Add an event listener to the project select
funderSelect.addEventListener("change", function () {
    // Get the selected option's value from the project select
    const selectedValue = funderSelect.value;

  if (selectedValue === "USAID") {
    projectSelect.value = "ace_5";
  } else if (selectedValue === "global_fund") {
    projectSelect.value = "nahi";
  } else if (selectedValue === "CDC") {
    projectSelect.value = "speed";
  } else {
    // If no match is found, you can handle it accordingly, e.g., set a default value
    funderSelect.value = ""; // Set to empty if no match
  }
});

// Get a reference to the input element with the id "supervisor"
const supervisor_codeInput = document.getElementById("supervisor_code");

// Add an event listener to the input to restrict the input length
supervisor_codeInput.addEventListener("input", function () {
  const maxLength = 5; // Set the maximum number of digits
  if (supervisor_codeInput.value.length > maxLength) {
    supervisor_codeInput.value = supervisor_codeInput.value.slice(0, maxLength); // Truncate input
  }
});

// Get a reference to the input element with the id "staff_id"
const staff_idInput = document.getElementById("staff_id");

// Add an event listener to the input to restrict the input length
staff_idInput.addEventListener("input", function () {
  const maxLength = 5; // Set the maximum number of digits
  if (staff_idInput.value.length > maxLength) {
    staff_idInput.value = staff_idInput.value.slice(0, maxLength); // Truncate input
  }
});

// Get a reference to the input element with the id "staff_id"
const phone_noInput = document.getElementById("phone_no");

// Add an event listener to the input to restrict the input length
phone_noInput.addEventListener("input", function () {
  const maxLength = 14; // Set the maximum number of digits
  if (phone_noInput.value.length > maxLength) {
    phone_noInput.value = phone_noInput.value.slice(0, maxLength); // Truncate input
  }
});
