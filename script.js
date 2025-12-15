
    const toggle = document.getElementById("modeToggle");
toggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggle.textContent = "Dark Mode";
  } else {
        toggle.textContent = "Light Mode";
  }
});

