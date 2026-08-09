
// Summit House static-site helper.
// Forms are intentionally NOT connected to a third-party service yet.
// To make them live with Formspree:
//   1. Create a Formspree form.
//   2. Replace REPLACE_ME in each HTML form action with your Formspree ID.
//   3. Remove data-demo="true" from that form.

document.querySelectorAll('form[data-demo="true"]').forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    if (status) {
      status.textContent =
        "This form is ready for your site, but submission is intentionally disabled until you connect a form service. See README.md.";
      status.classList.add("show");
      status.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
});
