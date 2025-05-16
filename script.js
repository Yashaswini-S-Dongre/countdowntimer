let timerInterval;
    let totalSeconds = 0;
    let remainingSeconds = 0;

    function formatTime(sec) {
      const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
      const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
      const secs = String(sec % 60).padStart(2, '0');
      return `${hrs}:${mins}:${secs}`;
    }

    function startTimer() {
      const hrs = parseInt(document.getElementById('hours').value) || 0;
      const mins = parseInt(document.getElementById('minutes').value) || 0;
      const secs = parseInt(document.getElementById('seconds').value) || 0;

      if (timerInterval) clearInterval(timerInterval);

      totalSeconds = remainingSeconds > 0 ? remainingSeconds : hrs * 3600 + mins * 60 + secs;

      if (totalSeconds <= 0) return;

      timerInterval = setInterval(() => {
        if (totalSeconds <= 0) {
          clearInterval(timerInterval);
          document.getElementById('alarmSound').play();
          return;
        }
        totalSeconds--;
        remainingSeconds = totalSeconds;
        document.getElementById('countdown').innerText = formatTime(totalSeconds);
      }, 1000);
    }

    function pauseTimer() {
      clearInterval(timerInterval);
    }

    function resetTimer() {
      clearInterval(timerInterval);
      totalSeconds = 0;
      remainingSeconds = 0;
      document.getElementById('countdown').innerText = '00:00:00';
      document.getElementById('hours').value = '';
      document.getElementById('minutes').value = '';
      document.getElementById('seconds').value = '';
    }