const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let lastKonamiIndex = 0;

function init() {
  // your code here
  document.body.addEventListener('keydown', function(event) {
    if (event.key === codes[lastKonamiIndex]) {
      lastKonamiIndex++;
      if (lastKonamiIndex === codes.length) {
        alert('you cool, my mofo');
        lastKonamiIndex = 0;
      }
    }
    else {
      lastKonamiIndex = 0;
    }
  });
}