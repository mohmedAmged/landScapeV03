// animate counter
const targetNumber = 15;
const counterSection = document.querySelector('#counter-section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter();
      observer.unobserve(entry.target);
    }
  });
});

observer.observe(counterSection);

function animateCounter() {
  let count = 0;
  const counterElement = document.querySelector('.counter .count');
  const intervalId = setInterval(() => {
    if (count < targetNumber) {
      count++;
      counterElement.textContent = count;
    } else {
      clearInterval(intervalId);
    }
  }, 10);
}