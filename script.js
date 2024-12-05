// Load YouTube Video when a point is clicked
function loadVideo(course) {
    alert("You have selected " + course + ". You will be redirected to the YouTube video for that topic.");
    window.location.href = "https://www.youtube.com/results?search_query=" + course;
}
