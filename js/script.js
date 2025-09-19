document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("inquiry-form");
  const response = document.getElementById("form-response");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      response.textContent = "✅ Thank you, " + name + "! Your inquiry has been received.";
      form.reset();
    } else {
      response.textContent = "⚠️ Please fill in all fields.";
    }
  });
});
