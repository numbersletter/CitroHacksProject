// 
function input(){
  
  
}

refDate = new Date();
function time()
{
    let unmarkedCheckbox = document.getElementsByName('tm');
    let checkboxesChecked = [];
    for(var checkbox of unmarkedCheckbox)
    {
      if(checkbox.checked)
        checkboxesChecked.push(checkbox);
    }
    let time = checkboxesChecked[Math.random() * (checkboxesChecked.length)];
    let timeNum = time.value;
}

function day()
{
  let unmarkedCheckbox = document.getElementsByName('da');
  let checkboxesChecked = [];
  for(var checkbox of unmarkedCheckbox)
  {
    if(checkbox.checked)
      checkboxesChecked.push(checkbox);
  }
  let date = checkboxesChecked[Math.random() * (checkboxesChecked.length)];

  console.log(time.value);
}

function getNextDayOfTheWeek(dayName, excludeToday = true, refDate = new Date()) {
    const dayOfWeek = ["sun","mon","tue","wed","thu","fri","sat"]
                      .indexOf(dayName.slice(0,3).toLowerCase());
    if (dayOfWeek < 0) return;
    refDate.setHours(0,0,0,0);
    refDate.setDate(refDate.getDate() + +!!excludeToday + 
                    (dayOfWeek + 7 - refDate.getDay() - +!!excludeToday) % 7);
    return refDate;
}

//store date/time of next instance of the date and time

/*inserting event
var resource = {
  "summary": "Appointment",
  "location": "Somewhere",
  "start": {
    "dateTime": "2011-12-16T10:00:00.000-07:00"
  },
  "end": {
    "dateTime": "2011-12-16T10:25:00.000-07:00"
  }
};
var request = gapi.client.calendar.events.insert({
  'calendarId': 'primary',
  'resource': resource
});
request.execute(function(resp) {
  console.log(resp);
});
*/

