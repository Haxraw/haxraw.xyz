document.getElementById('videoContainer').addEventListener('click', function() {
    var video = document.getElementById('memeVideo');
    var thumbnail = document.getElementById('thumbnail');
    if (video.paused) {
        thumbnail.style.display = 'none';
        video.style.display = 'block';
        video.play();
    } else {
        video.pause();
    }
});

document.getElementById('memeVideo').addEventListener('ended', function() {
    var video = document.getElementById('memeVideo');
    var thumbnail = document.getElementById('thumbnail');
    video.style.display = 'none';
    thumbnail.style.display = 'block';
});
function redirectToSite() {
    window.location.href = "ming.html"; // Replace with the name of the HTML file you want to link to
}