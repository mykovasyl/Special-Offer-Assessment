document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const body = document.body;
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "green";
  });
});
