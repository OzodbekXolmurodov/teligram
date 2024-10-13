const form = document.querySelector(".form");
const input = document.querySelector(".form input");
const masgKonteaner = document.querySelector(".masg_konteaner");
const tayping = document.querySelector(".online");
const TEXTS = [
  "salom",
  "hmm",
  "salom",
  "yaxshi",
  "qattasan",
  "tinch",
  "telni kutar",
  "yaxshi",
  "hmm",
  "yaxshi buladi",
  "yozmisanam e",
  "yaxshida",
  "kaneshna",
  "xa",
  "ok",
  "yuq",
  "buladi",
];
function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;

  return `${hours}:${minutes}`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const val = input.value;
  if (val === "") {
    return null;
  }

  const userMessage = document.createElement("div");
  userMessage.classList.add("masg", "me");
  userMessage.innerHTML = `
    <p>${val}</p>
    <span>${getCurrentTime()}</span>
  `;
  masgKonteaner.appendChild(userMessage);
  input.value = "";

  tayping.textContent = "tayping...";

  setTimeout(() => {
    tayping.textContent = "online";
  }, 2000);

  botMasige();
});

function botMasige() {
  let time = Math.floor(Math.random() * 5000);
  setTimeout(() => {
    let index = Math.floor(Math.random() * TEXTS.length);
    const botMessage = document.createElement("div");
    botMessage.classList.add("masg");
    botMessage.innerHTML = `
      <p>${TEXTS[index]}</p>
      <span>${getCurrentTime()}</span>
    `;
    masgKonteaner.appendChild(botMessage);

    tayping.textContent = "online";
  }, time);
}
