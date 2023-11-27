let isRunning = false;
        let seconds = 0;
        let minutes = 0;
        let hours = 0;
        let intervalId;

        function startStop() {
            if (isRunning) {
                clearInterval(intervalId);
                document.getElementById('startStopButton')
            } else {
                intervalId = setInterval(updateStopwatch, 1000);
                document.getElementById('startStopButton')
            }
            isRunning = !isRunning;
        }

        function reset() {
            clearInterval(intervalId);
            isRunning = false;
            seconds = 0;
            minutes = 0;
            hours = 0;
            updateDisplay();
            document.getElementById('startStopButton').textContent = 'Start';
        }

        function updateStopwatch() {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }

        function updateDisplay() {
            document.getElementById('stopwatch').textContent = formatTime(hours, minutes, seconds);
        }

        function formatTime(h, m, s) {
            return h + ':' + (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
        }


