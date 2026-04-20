document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const navUl = document.querySelector(".main-navigation ul");
  if (toggleBtn && navUl) {
    toggleBtn.addEventListener("click", () => navUl.classList.toggle("show"));
  }

  const gdprBanner = document.getElementById("gdpr-banner");
  const gdprAccept = document.getElementById("gdpr-accept");
  if (gdprBanner && gdprAccept) {
    if (!localStorage.getItem("gdprAccepted")) gdprBanner.style.display = "block";
    gdprAccept.addEventListener("click", () => {
      localStorage.setItem("gdprAccepted", "true");
      gdprBanner.style.display = "none";
    });
  }

  document.querySelectorAll("[data-newsletter]").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.getAttribute("data-newsletter");
      const subject = lang === "de" ? "Newsletter Anmeldung" : "Newsletter subscription";
      const body = lang === "de"
        ? "Hallo, ich möchte gerne in den Newsletter aufgenommen werden."
        : "Hello, I would like to subscribe to the newsletter.";
      window.location.href = `mailto:info@kaayla-soliz.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  });
});
