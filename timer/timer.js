function timer() {
  const STATUS = {
    START: 'START',
    PAUSE: 'PAUSE',
    CONTINUE: 'CONTINUE',
    STOP: 'STOP',
  };

  const timeStr = document.getElementById('timeStr');
  const startBtn = document.getElementById('startBtn');
  const stopBtn = document.getElementById('stopBtn');

  let timerStatus = STATUS.STOP;
  let timeStart = 0;
  let timePaused = 0;
  let timeSpend = 0;
  let timerId = null;

  function changeStatus(status) {
    timerStatus = status;
    switch (status) {
      case STATUS.START:
        startBtn.innerHTML = STATUS.PAUSE;
        startTimer();
        break;
      case STATUS.PAUSE:
        startBtn.innerHTML = STATUS.CONTINUE;
        pauseTimer();
        break;
      case STATUS.CONTINUE:
        startBtn.innerHTML = STATUS.PAUSE;
        continueTimer();
        break;
      case STATUS.STOP:
        startBtn.innerHTML = STATUS.START;
        stopTimer();
        break;
    }
  }

  function resetTimer() {
    timePaused = 0;
    timeSpend = 0;
  }

  function startTimer() {
    resetTimer();
    continueTimer();
  }

  function pauseTimer() {
    timePaused += Date.now() - timeStart;
    stopTimerInterval();
  }

  function continueTimer() {
    timeStart = Date.now();
    startTimerInterval();
  }

  function stopTimer() {
    stopTimerInterval();
  }

  function updateTimeSpend() {
    timeSpend = Date.now() - timeStart + timePaused;
    setTimeStr();
  }

  function setTimeStr() {
    const timeSpendInSec = Math.floor(timeSpend / 1000);
    const sec = (timeSpendInSec % 60).toString().padStart(2, '0');
    const min = (Math.floor(timeSpendInSec / 60) % 60)
      .toString()
      .padStart(2, '0');
    const hr = Math.floor(timeSpendInSec / 3600)
      .toString()
      .padStart(2, '0');
    timeStr.innerHTML = `${hr}:${min}:${sec}`;
  }

  function startTimerInterval() {
    stopTimerInterval();
    timerId = setInterval(function() {
      updateTimeSpend();
    }, 100);
  }

  function stopTimerInterval() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  startBtn.addEventListener('click', function() {
    changeStatus(startBtn.innerHTML);
  });
  stopBtn.addEventListener('click', function() {
    changeStatus(STATUS.STOP);
  });

  setTimeStr();
}

timer();
