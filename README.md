<div align="center">
  <h1>🔍 GitHub Profile Finder</h1>
</div>

<p>
  A simple and beautiful <strong>GitHub Profile Finder App</strong> built entirely from scratch using
  <strong>HTML, CSS, and JavaScript</strong>, along with <strong>Axios</strong> for API requests. This
  project helped me clearly understand how to fetch data from APIs, handle responses, manage UI
  updates, and structure small front-end projects.
</p>

<hr>

<h2>🚀 Project Overview</h2>

<p>This application allows users to search for any GitHub username and instantly view:</p>
<ul>
  <li>Profile picture</li>
  <li>Name</li>
  <li>Followers count</li>
  <li>Following count</li>
  <li>Public repositories count</li>
  <li>Top repositories displayed as tags</li>
</ul>

<p>The project focuses on learning and applying:</p>
<ul>
  <li>Axios for API calls</li>
  <li>DOM manipulation</li>
  <li>Clean UI design</li>
  <li>Error handling</li>
  <li>Fetching and parsing JSON data</li>
</ul>

<hr>

<h2>🧠 What I Learned</h2>

<h3>✔️ Understanding APIs</h3>
<ul>
  <li>How GitHub's public API works.</li>
  <li>How to fetch user data and repositories from different endpoints.</li>
  <li>Working with promises and async/await.</li>
</ul>

<h3>✔️ Axios Fetching</h3>
<ul>
  <li>Why Axios is used (easy syntax, automatic JSON parsing, great error handling).</li>
  <li>How to handle requests and responses smoothly.</li>
</ul>

<h3>✔️ DOM Manipulation</h3>
<ul>
  <li>Updating UI dynamically based on fetched data.</li>
  <li>Creating elements (like repo tags) using JavaScript.</li>
  <li>Efficiently inserting user information into the card layout.</li>
</ul>

<h3>✔️ Error Handling</h3>
<ul>
  <li>How to show an error when a username doesn’t exist.</li>
  <li>API request failures and safe coding practices.</li>
</ul>

<h3>✔️ Clean UI Development</h3>
<ul>
  <li>Designing a modern, minimal, and aesthetic profile card.</li>
  <li>Using layout spacing, colors, and alignment for better UX.</li>
</ul>

<hr>

<h2>🛠️ Tech Stack</h2>
<ul>
  <li><strong>HTML</strong> – Structure</li>
  <li><strong>CSS</strong> – Styling + Layout</li>
  <li><strong>JavaScript (ES6+)</strong> – Logic & API Handling</li>
  <li><strong>Axios CDN</strong> – For HTTP requests</li>
</ul>

<hr>

<h2>📂 Project Structure</h2>
<pre>
📁 GitHub-profile-project
 ├── index.html
 ├── style.css
 ├── script.js
 └── assets/
</pre>

<hr>

<h2>📸 Preview</h2>
<p><em>The project UI looks like this:</em></p>
<!-- update paths to your screenshots -->
<img src="screenshots/screen1.png" alt="Screenshot 1" width="420">
<br><br>
<img src="screenshots/screen2.png" alt="Screenshot 2" width="420">

<hr>

<h2>🎥 Screen Recording</h2>
  <ul>
  <li><a href="recordings/Screen Recording 2025-11-24 135143.mp4">Live Coding-1</a></li>
  <li><a href="recordings/Screen Recording 2025-11-24 135828.mp4">Live Coding-2 </a></li>
  <li><a href="recordings/Screen Recording 2025-11-24 172800.mp4">Watch Full Demo </a></li>
</ul>

<hr>

<h2>🔗 GitHub API Endpoints Used</h2>
<table>
  <tr>
    <th>Purpose</th>
    <th>Endpoint</th>
  </tr>
  <tr>
    <td>Fetch user details</td>
    <td><code>https://api.github.com/users/{username}</code></td>
  </tr>
  <tr>
    <td>Fetch repos list</td>
    <td><code>https://api.github.com/users/{username}/repos</code></td>
  </tr>
</table>

<hr>

<h2>🧩 How It Works</h2>
<ol>
  <li>User enters a GitHub username.</li>
  <li>JavaScript listens for the Enter key or button click.</li>
  <li>Axios sends API requests.</li>
  <li>If user exists → profile card is updated.</li>
  <li>If user doesn’t exist → error message appears.</li>
</ol>

<hr>

<h2>📘 Code Concepts Applied</h2>
<ul>
  <li><code>axios.get()</code> for fetching API data</li>
  <li>Template literals for cleaner UI updates</li>
  <li><code>async/await</code> for smooth asynchronous flows</li>
  <li>Dynamic DOM generation using <code>createElement()</code></li>
  <li>Array methods like <code>slice()</code> to display top repositories</li>
  <li>Input validations</li>
</ul>

<hr>

<h2>🙌 Final Thoughts</h2>
<p>
  Building this project helped me deeply understand how APIs work in the real world. I learned:
</p>
<ul>
  <li>How to write cleaner JavaScript</li>
  <li>How to handle different API responses</li>
  <li>How to structure a small project properly</li>
  <li>How to enhance UI step by step</li>
</ul>

<p>I will continue building more JavaScript projects applying the same concepts.</p>

<hr>

<div align="center">
  <p>⭐ If you're viewing this on GitHub — feel free to star the repo!</p>
</div>
