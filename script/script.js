
let video = document.querySelector("#hero-banner-video");

let playButton = document.querySelector("#hero-banner__play-button");

let bannerContainer = document.querySelector("#hero-banner__container");

let heroBanner = document.querySelector("#hero-banner");

heroBanner.addEventListener("click", () => {
    onVideoPlay();
});

playButton.addEventListener("click", (event) => {
    onVideoPause(event);
});

function onVideoPause(event) {
    event.stopPropagation();
    if (video.paused) {
        video.play();
        bannerContainer.style.visibility = 'hidden';
        heroBanner.style.cursor = "pointer";
    } else {
        video.pause();
        bannerContainer.style.visibility = 'visible';
    }
}

function onVideoPlay() {
    bannerContainer.style.visibility = 'visible';
    heroBanner.style.cursor = "default"
    video.pause()
}