const btnJeter = document.querySelector(".jeter");
const btnOuvrir = document.querySelector(".ouvrir");
const message = document.querySelector(".message");
const cadeau = document.querySelector(".cadeau");
const btnRetour = document.querySelector(".retour");

let compteur = 0;

let taille = 1;

const phrases = [
  "Non non non 😭",
  "Tu ne feras pas ça",
  "Essaie encore",
  "Jamais 😎",
  "Attrape moi si tu peux",
];

btnJeter.addEventListener("click", (e) => {
  compteur++;

  if (compteur >= 5 && compteur <= 8) {
    taille *= 1.25;
    btnOuvrir.style.transform = `scale(${taille})`;
  }

  if (compteur == 1) {
    btnJeter.textContent = "T'es serieuse la?";
  }

  if (compteur == 2) {
    btnJeter.textContent = "Tu joue la?";
  }

  if (compteur == 3) {
    btnJeter.textContent = "dernière chance .";
  }

  if (compteur == 4) {
    btnJeter.textContent = "tu me force la main";
  }

  if (compteur == 8) {
    btnJeter.classList.add("last-chance");

    btnJeter.addEventListener("mouseover", () => {
      const largeur = window.innerWidth - btnJeter.offsetWidth;
      const hauteur = window.innerHeight - btnJeter.offsetHeight;

      const randomX = Math.random() * largeur;
      const randomY = Math.random() * hauteur;

      btnJeter.style.left = randomX + "px";
      btnJeter.style.top = randomY + "px";
      btnJeter.textContent =
        phrases[Math.floor(Math.random() * phrases.length)];
    });
  }
});

btnOuvrir.addEventListener("click", (e) => {
  if (compteur == 5) {
    const messagePlus = document.createElement("p");
    messagePlus.textContent =
      "Pourquoi ta appuyer 5 fois sur jeter le cadeaux la miss ?";
    cadeau.appendChild(messagePlus);
  }
  compteur = 0;
  message.classList.remove("active");
  message.classList.add("none");

  cadeau.classList.remove("none");
  cadeau.classList.add("active");

  // Confettis 🎉
  confetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.6 },
  });

  lancerConfetti();
});

btnRetour.addEventListener("click", (e) => {
  location.reload();
});

function lancerConfetti() {
  const duration = 3000;
  const end = Date.now() + duration;

  const interval = setInterval(() => {
    if (Date.now() > end) {
      return clearInterval(interval);
    }

    confetti({
      particleCount: 20,
      spread: 100,
      startVelocity: 30,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2,
      },
    });
  }, 200);
}
