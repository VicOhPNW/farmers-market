import React from 'react';
import Schedule from './Schedule';

const masterScheduleList = [
    {
       day: "Sunday",
       location: "Lents International",
       hours: "9:00am - 2:00pm",
       booth: "4a" 
    },
    {  
        day: "Monday",
        location: "Pioneer Courthouse Square",
        hours: "10:00am - 2:00pm",
        booth: "7C"
     },
     {  
        day: "Tuesday",
        location: "Hillsboro",
        hours: "5:00pm - 8:30pm",
        booth: "1F"
     },
     {  
        day: "Wednesday",
        location: "Shemanski Park",
        hours: "10:00am - 2:00pm",
        booth: "3E"
     },
     {  
        day: "Thursday",
        location: "Northwest Portland",
        hours: "2:00pm - 6:00pm",
        booth: "6D"
     },
     {  
        day: "Saturday",
        location: "Beaverton",
        hours: "10:00am - 1:30pm",
        booth: "9G"
     }
];

function masterScheduleList() {
    return (
        <div>
            <hr/>
            {masterScheduleList.map((schedule, index) =>
            <Schedule day={schedule.day}
                location={schedule.location}
                hours={schedule.hours}
                booth={schedule.booth}
                key={index} />
            )}
        </div>
    );
}