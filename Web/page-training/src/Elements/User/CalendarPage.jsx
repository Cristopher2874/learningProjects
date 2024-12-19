import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Set the locale to English
moment.locale('en');
const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
    const [events, setEvents] = useState([
        {
            title: 'Project Delivery',
            start: new Date(2024, 11, 8, 23, 59),
            end: new Date(2024, 11, 8, 23, 59),
            allDay: false,
        },
        {
            title: 'Team Meeting',
            start: new Date(2024, 11, 10, 10, 0),
            end: new Date(2024, 11, 10, 11, 0),
            allDay: false,
        },
        {
            title: 'Day Off',
            start: new Date(2024, 11, 15),
            end: new Date(2024, 11, 15),
            allDay: true,
        },
    ]);

    // Custom styles for calendar cells
    const calendarCustomStyles = {
        style: {
            backgroundColor: '#ffffff',
            color: '#333333',
            fontWeight: '500',
            fontSize: '1rem',
            padding: '8px',
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }
    };

    return (
        <div className="calendar-container">
            <h2 className="calendar-title">Calendar</h2>

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{
                    height: 500,
                    color: '#000000'
                }}
                views={['month', 'week', 'day', 'agenda']}
                messages={{
                    today: 'Today',
                    previous: '←',
                    next: '→',
                    month: 'Month',
                    week: 'Week',
                    day: 'Day',
                    agenda: 'Agenda',
                }}
            />
        </div>
    );
};

export default CalendarComponent;
