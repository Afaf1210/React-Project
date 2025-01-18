const audio = document.querySelector('#audio');
const playPauseBtn = document.querySelector('#play-pause');
const slider = document.querySelector('#slider');

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    togglePlayPauseBtn();
});

audio.addEventListener('timeupdate', () => {
    const progress = Math.ceil(audio.currentTime * 100 / audio.duration);
    slider.value = progress;
});

audio.addEventListener('ended', () => {
    audio.currentTime = 0;
    audio.play();  // Auto-replay
    togglePlayPauseBtn();
});

slider.addEventListener('input', (event) => {
    const value = event.target.value;
    audio.currentTime = audio.duration * value / 100;
});

function togglePlayPauseBtn() {
    playPauseBtn.classList.toggle('play');
    playPauseBtn.classList.toggle('pause');
}

// Ensure audio is ready
audio.addEventListener('canplaythrough', () => {
    console.log('Audio is ready to play.');
});
