const sidebarText = document.querySelector('.sidebar-infotext');

window.addEventListener('load', truncateText);
window.addEventListener('resize', truncateText);

function truncateText() {
  let maxCharacters;
  if (window.innerWidth >= 1440) {
    maxCharacters = 560;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    maxCharacters = 260;
  } else if (window.innerWidth >= 375 && window.innerWidth < 768) {
    maxCharacters = 216;
  } else {
    maxCharacters = 170;
  }
  const originalText = sidebarText.textContent;
  if (originalText.length > maxCharacters) {
    sidebarText.textContent = originalText.slice(0, maxCharacters) + '...';
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const timerValue = document.getElementById('timerValue');
  const startListItem = document.getElementById('startTimerListItem');
  const timerStart = document.querySelector('.sidebar-timerstart');
  let timerInterval;
  let timerActive = false;

  function startTimer(duration, display) {
    if (timerActive) {
      return;
    }

    timerActive = true;
    display.style.display = 'block';

    timerStart.setAttribute('data-active', 'true');

    let timer = duration,
      minutes,
      seconds;
    display.textContent = '110:00';

    timerInterval = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      timerValue.textContent = minutes + ':' + seconds;

      if (--timer < 0) {
        clearInterval(timerInterval);
        timerValue.textContent = '00:00';
        timerActive = false;
        timerStart.setAttribute('data-active', 'false');
      }
    }, 1000);
  }

  startListItem.addEventListener('click', function () {
    startTimer(6600, timerValue);
  });
});
