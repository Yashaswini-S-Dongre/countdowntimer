# Overview
A responsive countdown timer web app built with HTML, CSS, and JavaScript. It allows users to input hours, minutes, and seconds, then control the countdown with Start, Pause, and Reset buttons. When the timer reaches zero, an alarm sound is triggered. The design is modern, minimal, and mobile-friendly
# Features
* Custom time input in hours, minutes, and seconds
* Start, Pause, and Reset control buttons
* Countdown display updates in real time
* Alarm sound plays when time runs out
* Responsive and visually appealing design using CSS Flexbox and shadows
* Input fields auto-pad with 0 for consistent digital display
# Technologies Used
* HTML – Structure and layout
* CSS – Styling, layout, and basic animations
* JavaScript – Timer functionality and DOM manipulation
* Audio – Native audio element for alarm playback
# File Structure
```
countdown-timer/
├── index.html        # Main HTML structure
├── main.css          # Styling for the UI
├── script.js         # JavaScript countdown logic
├── alarm_clock.ogg   # Alarm sound when countdown ends
└── README.md         # Project overview and instructions
```
# How to Use
1. Open the index.html file in a web browser.
2. Enter the desired countdown duration (HH, MM, SS) in the input fields.
3. Click the Start button to begin the countdown.
4. Use the Pause button to stop temporarily.
5. Use the Reset button to clear the timer and inputs
# Code Explanation
## CSS (main.css)
* Uses a dark gradient background with glowing text
* Buttons styled with rounded corners and hover animations
* Layout centered using Flexbox for responsiveness
* Countdown text pulses for visual feedback

## JavaScript (script.js)
* Handles input validation and time conversion
* startTimer() – Starts countdown and updates display every second
* pauseTimer() – Pauses the timer
* resetTimer() – Stops and resets the timer and inputs
* formatTime() – Converts seconds into HH:MM:SS format
* Plays alarm sound when timer reaches 0

# Setup Instructions
1. Clone the repository:
git clone https://github.com/your-username/countdown-timer.git
2. Navigate to the project folder:
   cd countdown-timer
3. Open index.html in your browser

# Future Enhancements
* Save last used time in localStorage
* Add keyboard shortcut support (e.g., space to pause/resume)
* Allow users to switch between light and dark themes with smooth transitions.
