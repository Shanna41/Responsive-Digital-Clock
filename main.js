const locationInput = document.getElementById('locations');
const submitButton = document.getElementById('submit');
const hourElement = document.getElementById('hour');
const minuteElement = document.getElementById('minute');

let locations;

async function getLocations() {
  try {
    const res = await fetch("http://worldtimeapi.org/api/timezone/");
    locations = await res.json();
    const select = document.getElementById('locations')
    const html = locations.map(location => 
        `<option value=${location}> ${location}</option>`
    ).join('')
    select.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
}

async function updateTime(location) {
  try {
    const res = await fetch(`http://worldtimeapi.org/api/timezone/${location}`);
    const data = await res.json();
    const datetime = moment(data.datetime);
    hourElement.textContent = datetime.format('HH');
    minuteElement.textContent = datetime.format('mm');
  } catch (error) {
    console.log(error);
  }
}

submitButton.addEventListener('click', function() {
  let location = locationInput.value;
  setInterval(function() {
    console.log('Interval fired'); // Check if the interval is running
    updateTime(location);
  }, 1000);
});

getLocations();



