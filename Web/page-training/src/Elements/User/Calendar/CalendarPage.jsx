import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CalendarPage.css';

// Configurar el idioma en español
moment.locale('es');
const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
    const [events, setEvents] = useState([
        {
            title: 'Entrega de proyecto',
            start: new Date(2024, 11, 8, 23, 59),
            end: new Date(2024, 11, 8, 23, 59),
            allDay: false,
        },
        {
            title: 'Reunión con el equipo',
            start: new Date(2024, 11, 10, 10, 0),
            end: new Date(2024, 11, 10, 11, 0),
            allDay: false,
        },
        {
            title: 'Día libre',
            start: new Date(2024, 11, 15),
            end: new Date(2024, 11, 15),
            allDay: true,
        },
    ]);

    // Estilos personalizados para las celdas del calendario
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
            <h2 className="calendar-title">Calendario</h2>

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
