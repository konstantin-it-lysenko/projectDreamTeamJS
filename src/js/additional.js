const sidebarText = document.querySelector('.sidebar-infotext');

window.addEventListener('load', truncateText);
window.addEventListener('resize', truncateText);

function truncateText() {
  let maxCharacters;
  if (window.innerWidth >= 1440) {
    maxCharacters = 560;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    maxCharacters = 258;
  } else if (window.innerWidth >= 375 && window.innerWidth < 768) {
    maxCharacters = 211;
  } else {
    maxCharacters = 205;
  }
  const originalText = sidebarText.textContent;
  if (originalText.length > maxCharacters) {
    sidebarText.textContent = originalText.slice(0, maxCharacters) + '...';
  }
}
