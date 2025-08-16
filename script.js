function getRecommendations() {
  const mood = document.getElementById('moodInput').value.toLowerCase().trim();
  const out = document.getElementById('output');

  if (!mood) {
    out.innerHTML = "Please type your mood 🙂";
    return;
  }

  if (mood.includes('sad') || mood.includes('upset')) {
    out.innerHTML = `
      <h2>Cheer up 💙</h2>
      <p><strong>Songs:</strong></p>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=RBumgq5yVrA" target="_blank">Let Her Go — Passenger</a></li>
        <li><a href="https://www.youtube.com/watch?v=RgKAFK5djSk" target="_blank">See You Again — Wiz Khalifa</a></li>
      </ul>
      <p><strong>Quotes:</strong></p>
      <ul>
        <li>Tough times never last, but tough people do.</li>
        <li>Every day may not be good, but there is something good in every day.</li>
      </ul>
      <p><strong>Jokes:</strong></p>
      <ul>
        <li>Why don’t skeletons fight? They don’t have the guts.</li>
        <li>I told my computer I needed a break… it keeps sending me Kit-Kats.</li>
      </ul>
    `;
  } else if (mood.includes('happy')) {
    out.innerHTML = `
      <h2>Yay! 😄</h2>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=ZbZSe6N_BXs" target="_blank">Happy — Pharrell Williams</a></li>
        <li><a href="https://www.youtube.com/watch?v=OPf0YbXqDm0" target="_blank">Uptown Funk — Mark Ronson ft. Bruno Mars</a></li>
      </ul>
    `;
  } else {
    out.innerHTML = "Try moods like: happy, sad, upset.";
  }
}