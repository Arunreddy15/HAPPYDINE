import confetti from "canvas-confetti";

export const fireConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 60,
    origin: { y: 0.75, x: 0.25 },
    angle: 60,
    colors: ["#ec0000ff", "#242424"],
  });

  confetti({
    particleCount: 100,
    spread: 60,
    origin: { y: 0.75, x: 0.75 },
    angle: 120,
    colors: ["#ec0000ff", "#242424"],
  });
};