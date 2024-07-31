const locationInput = document.getElementById('location');
const submitButton = document.getElementById('submit');
const hourElement = document.getElementById('hour');
const minuteElement = document.getElementById('minute');
const secondElement = document.getElementById('second');

function updateTime(location) {
    fetch('http://worldtimeapi.org/api/timezone/' + location)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Location not found: ${location}`);
            }
            return res.json();
        })
        .then(data => {
            let datetime = data.datetime;
            let momentTime = moment(datetime);
            hourElement.innerText = momentTime.format('HH');
            minuteElement.innerText = momentTime.format('mm');
            secondElement.innerText = momentTime.format('ss');
        })
        .catch(err => console.error('Error:', err));
}

submitButton.addEventListener('click', function() {
    let location = locationInput.value;
    setInterval(function() {
        updateTime(location);
    }, 1000);
});
