let timer = document.querySelector('.Timer');
let start = document.querySelector('.start');
let reset = document.querySelector('.reset');

// Start with a function to for a timer in 0
function startTimer() {
    let time = 0;
    let counter = true;

    // Update timer once it starts
    function updateTimer() {
        if (!counter) return;
        time++;

        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        // if timer reaches 99:99, then stop
        if (minutes >= 99 && seconds >= 99) {
            minutes = 99;
            seconds = 99;
            counter = false;
        }

        timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (counter) {
            setTimeout(updateTimer, 1000);
        }
    }

    // if start is diabled, then update timer.
    start.disabled = true;
    updateTimer();

    // reset function
    reset.addEventListener('click', () => {
        counter = false;
        timer.textContent = '00:00';
        time = 0;
        start.disabled = false;
    });
}

start.addEventListener('click', startTimer);