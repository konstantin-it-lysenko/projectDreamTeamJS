document.addEventListener('DOMContentLoaded', function () {
  const timerValue = document.getElementById('timerValue');
  const startListItem = document.getElementById('startTimerListItem');
  const timerStart = document.querySelector('.favor-dailynorm-icon');
  let timerInterval;
  let timerActive = false;

  function startTimer(duration, display) {
    if (timerActive) {
      return;
    }

    timerActive = true;
    display.style.display = 'block';

    startListItem.setAttribute('data-active', 'true');

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
        startListItem.setAttribute('data-active', 'false');
      }
    }, 1000);
  }

  startListItem.addEventListener('click', function () {
    startTimer(6600, timerValue);
  });
});
