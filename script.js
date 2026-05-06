// EMAILJS
emailjs.init("JapAajzyz4cmpQzEs");

// CONTACT FORM
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const subject = document.querySelector("#subject").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (!name || !email || !subject || !message) {
    alert("Please fill out all fields.");
    return;
  }

  emailjs
    .send("service_3qld4jk", "template_arhylad", {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message
    })
    .then(function () {
      alert("Message sent successfully!");
      contactForm.reset();
    })
    .catch(function (error) {
    console.error("EmailJS error:", error);

    alert(
      "Something went wrong:\n" +
      "Status: " + error.status + "\n" +
      "Text: " + error.text
    );
  });
});