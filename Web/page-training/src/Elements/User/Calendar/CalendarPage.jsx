import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
    const [events, setEvents] = useState([
        {
            title: 'Entrega de proyecto',
            start: new Date(2024, 11, 8, 23, 59), // 8 de diciembre de 2024 a las 11:59 PM
            end: new Date(2024, 11, 8, 23, 59),
            allDay: false,
        },
    ]);

    return (
        <div className="calendar">
            <h2>Calendario</h2>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                views={['month', 'week', 'day', 'agenda']}
                defaultView="month"
                messages={{
                    today: 'Hoy',
                    previous: '←',
                    next: '→',
                    month: 'Mes',
                    week: 'Semana',
                    day: 'Día',
                    agenda: 'Agenda',
                }}
            />
        </div>
    );
};

export default CalendarComponent;
