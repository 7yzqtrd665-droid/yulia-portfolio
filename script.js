document.addEventListener("DOMContentLoaded", () => {
  const cards = [...document.querySelectorAll(".request-card")];
  const hint = document.getElementById("selectionHint");
  const contactTopic = document.getElementById("contactTopic");
  const contactButton = document.getElementById("contactButton");
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  let selectedTopic = "";

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const alreadySelected = card.getAttribute("aria-pressed") === "true";
      cards.forEach((item) => {
        item.classList.remove("is-selected");
        item.setAttribute("aria-pressed", "false");
      });
      if (alreadySelected) {
        selectedTopic = "";
        hint.textContent = "Выбор темы необязателен — можно начать с того, что важно именно вам.";
        contactTopic.textContent = "Тема обращения не выбрана";
        contactButton.href = "https://t.me/kuznetsova1239";
        return;
      }
      selectedTopic = card.dataset.topic || "";
      card.classList.add("is-selected");
      card.setAttribute("aria-pressed", "true");
      hint.textContent = `Вы выбрали: «${selectedTopic}». Можно обсудить эту тему на первой встрече.`;
      contactTopic.textContent = `Тема обращения: ${selectedTopic}`;
      contactButton.href = `https://t.me/kuznetsova1239?text=${encodeURIComponent("Здравствуйте! Хотел(а) бы обсудить тему: " + selectedTopic)}`;
    });
  });

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!open));
      navMenu.classList.toggle("is-open", !open);
    });
    navMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("is-open");
    }));
  }
});
