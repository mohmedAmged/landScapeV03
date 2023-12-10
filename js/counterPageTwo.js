const targetNumbers = [400, 300, 700]; 
const counterSections = document.querySelectorAll('.counter-section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
});
counterSections.forEach(section => observer.observe(section));
function animateCounter(section) {
  let count = 0;
  const counterElement = section.querySelector('.counter .count');
  const targetIndex = Array.from(counterSections).indexOf(section);
  const targetNumber = targetNumbers[targetIndex];
  const intervalId = setInterval(() => {
    if (count < targetNumber) {
      count++;
      counterElement.textContent = count;
    } else {
      clearInterval(intervalId);
    }
  }, 1);
}