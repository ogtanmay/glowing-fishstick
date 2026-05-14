const reasons = [
  "Your story is still unfolding.",
  "Someone is glad you exist, even if you don't see it yet.",
  "The way sunlight feels on a quiet morning can still surprise you.",
  "You haven't met all the people who will love you.",
  "There are future versions of you worth meeting.",
  "A hard day is not a permanent life.",
  "Healing can be slow, but it can still happen.",
  "Your presence changes more lives than you know.",
  "There are songs, books, and moments waiting for you.",
  "You deserve the chance to feel peace again."
];

document.addEventListener("DOMContentLoaded", () => {
  const reasonEl = document.getElementById("reason");
  const nextReasonBtn = document.getElementById("next-reason");
  let reasonIndex = 0;

  reasonEl.textContent = reasons[reasonIndex];

  nextReasonBtn.addEventListener("click", () => {
    reasonIndex = (reasonIndex + 1) % reasons.length;
    reasonEl.textContent = reasons[reasonIndex];
  });
});
