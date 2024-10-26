// Function to apply user-selected settings
function apply() {
    // Get selected format (US or European)
    var format = document.querySelector('input[name="radio"]:checked').id;

    // Get selected font size
    var fontSize = document.querySelector('input[name="radio_font_size"]:checked').id;

    // Get selected text color
    var textColor = document.getElementById('color_value').value;

    // Get selected background color
    var bgColor = document.getElementById('background_color').value;

    // Apply settings
    applySettings(format, fontSize, textColor, bgColor);
}

// Function to apply settings
function applySettings(format, fontSize, textColor, bgColor) {
    // Apply format
    if (format === 'country_Us') {
        // Apply US format
        document.getElementById('image').src = 'images-4/us-flag.jpg';
    } else if (format === 'country_eur') {
        // Apply European format
        document.getElementById('image').src = 'images-4/eu-flag.jpg';
    }

    // Apply font size
    document.body.style.fontSize = fontSize;

    // Apply text color
    document.body.style.color = textColor;

    // Apply background color to the container div
    document.querySelector('.container').style.backgroundColor = bgColor;
}

// Function to toggle flag visibility
document.getElementById('chk').addEventListener('change', function() {
    var flag = document.getElementById('image');
    var showFlag = document.getElementById('chk').checked;

    flag.style.display = showFlag ? 'block' : 'none';
});

// Function to update date and time
function updateDateTime() {
    var now = new Date();
    var day = now.toLocaleDateString('en-US', { weekday: 'long' });
    var dateYear = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    var time = now.toLocaleTimeString('en-US');

    document.getElementById('day').textContent = day;
    document.getElementById('date_year').textContent = dateYear;
    document.getElementById('time').textContent = time;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initialize settings when the page loads
window.onload = function() {
    apply(); // Apply initial settings
    updateDateTime(); // Update date and time
};
