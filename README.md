# Responsive-Digital-Clock
A Digital Clock that's responsive on multiple devices offering time for any location in the world. It uses HTML, CSS, JavaScript, moment.js, and the World Time API.

## Features

- **Global Time at a Glance:** Enter any location, and Responsive-Digital-Clock will display the current time (hours, minutes, seconds) for that place.
- **Real-Time Updates:** The clock updates every second, providing a real-time experience.
- **Powered by moment.js and World Time API:** Responsive-Digital-Clock uses moment.js for accurate time formatting and the World Time API to fetch the current time for the entered location.

## How to use Responsive-Digital-Clock

1. Open an HTML file in a web browser.
2. Enter any location in the input field (note: must be in the IANA Time Zone Database, e.g., 'America/New_York'format. ).
3. Click the 'Submit' button.
4. Voila! The current time will be displayed and updated every second.

## Behind the Scenes: Code Overview

### HTML

The HTML file is the skeleton of Responsive-Digital-Clock. It sets up the structure of the clock, including elements for displaying the hours, minutes, and seconds, an input field for entering a location, and a submit button.

### CSS

The CSS file is the artist behind Responsive-Digital-Clock's look. It styles the clock, including the layout, colors, and fonts. It uses the futuristic Orbitron font from Google Fonts.

### JavaScript

The JavaScript file is the brain of Responsive-Digital-Clock. It uses the fetch API to get the current time for the entered location from the World Time API, and moment.js to format this time. The time is updated every second using the setInterval function.

## Responsive-Digital-Clock: Improvements

- Add error handling for invalid location entries.
- Add a dropdown menu or autocomplete feature for entering locations.
- Add the ability to display the date as well as the time.

## License

N/A

Happy time traveling!
