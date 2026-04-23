const track = document.getElementById('carouselTrack');
const images = track.children;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 320}px)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
});

function createIndicators() {
  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('indicator');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      index = i;
      updateCarousel();
    });
    indicators.appendChild(dot);
  }
}

function updateIndicators() {
  document.querySelectorAll('.indicator').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function updateCarousel() {
  const width = images[0].clientWidth;
  track.style.transform = `translateX(-${index * width}px)`;
  updateIndicators();
}

const indicators = document.getElementById('indicators');
createIndicators();

setInterval(() => {
  index = (index + 1) % images.length;
  updateCarousel();
}, 5000);