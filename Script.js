const colorBtn = document.getElementById('colorBtn');
const resetBtn = document.getElementById('resetBtn');
const liveInput = document.getElementById('liveInput');
const liveText = document.getElementById('liveText');
const hoverImg = document.getElementById('hoverImg');

const originalImage = 'https://wallpapers.com/images/hd/gaming-profile-pictures-xpcd6q5uud2i45v8.jpg';
const hoverImage = 'https://png.pngtree.com/png-clipart/20230913/original/pngtree-a-video-game-controller-clip-art-vector-png-image_11079952.png';

// Change background to a random color
colorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomColor();
});

// Show input text live
liveInput.addEventListener('input', () => {
  liveText.textContent = liveInput.value;
});

// Change image on hover
hoverImg.addEventListener('mouseover', () => {
  hoverImg.src = hoverImage;
});

hoverImg.addEventListener('mouseout', () => {
  hoverImg.src = originalImage;
});

// Reset everything
resetBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = '#ffffff';
  liveInput.value = '';
  liveText.textContent = '';
  hoverImg.src = originalImage;
});

// Generate random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}