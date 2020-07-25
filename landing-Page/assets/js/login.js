window.addEventListener("load", () => {
  let login = document.querySelector(".login");
  login.classList.add("appear");
  setTimeout(() => {
    login.style.opacity = "100%";
  }, 2000);
});
