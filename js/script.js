/*--- Inquiry form ---*/
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


/*--- Loans services ---*/
document.addEventListener("DOMContentLoaded", function () {
  const loanForm = document.getElementById("loan-form");
  const loanResponse = document.getElementById("loan-response");

  if (loanForm) {
    loanForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("full-name").value.trim();
      const email = document.getElementById("email").value.trim();
      const amount = document.getElementById("amount").value.trim();
      const type = document.getElementById("loan-type").value;
      const purpose = document.getElementById("purpose").value.trim();

      if (name && email && amount && type && purpose) {
        loanResponse.textContent = `✅ Thank you, ${name}. Your loan request for $${amount} has been submitted.`;
        loanForm.reset();
      } else {
        loanResponse.textContent = "⚠️ Please complete all fields.";
      }
    });
  }
});


/*--- Login ---*/
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const loginResponse = document.getElementById("login-response");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("login-email").value.trim();
      const password = document.getElementById("login-password").value.trim();

      if (email && password) {
        loginResponse.textContent = "✅ Login successful. Redirecting to dashboard...";
        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 1500);
      } else {
        loginResponse.textContent = "⚠️ Please enter both email and password.";
      }
    });
  }
});
