const target = new Date("2026-12-11T00:00:00+05:30").getTime();
const pad = n => String(n).padStart(2, "0");
function updateCountdown() {
  let diff = Math.max(0, target - Date.now());
  const days = Math.floor(diff / 86400000); diff %= 86400000;
  const hours = Math.floor(diff / 3600000); diff %= 3600000;
  const minutes = Math.floor(diff / 60000); diff %= 60000;
  const seconds = Math.floor(diff / 1000);
  document.getElementById("days").textContent = pad(days);
  document.getElementById("hours").textContent = pad(hours);
  document.getElementById("minutes").textContent = pad(minutes);
  document.getElementById("seconds").textContent = pad(seconds);
}
updateCountdown(); setInterval(updateCountdown, 1000);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

document.querySelectorAll(".promise-card").forEach(card => {
  card.addEventListener("click", () => card.classList.toggle("active"));
});
document.getElementById("secretButton").addEventListener("click", () => {
  const note = document.getElementById("secretMessage");
  note.hidden = !note.hidden;
  document.getElementById("secretButton").textContent = note.hidden
    ? "A tiny secret for Bauni Badmash ♡"
    : "One last thing, my Bauni ♡";
});
