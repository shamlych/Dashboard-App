import React from 'react';
import './Calendar.css';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' 

function Calendar() {
  return (
  <div className="calendar">
    <h3>Calendar</h3>
     <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
          { title: 'Birthday', date: '2022-01-01' },
          { title: 'event 1', date: '2022-02-01' },
          { title: 'event 2', date: '2022-02-04' }
        ]}
      />
  </div>
  );
}

export default Calendar;
