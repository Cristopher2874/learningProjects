import React from "react";
import './CalendarPage.css'

const Calendar = () =>{
    return(
        <div className="calendar">
            <div className="content">
                <div classNmae="nav-bar">
                    <h2>Hoy</h2>
                    <hr className="separator"/>
                    <p>Calendario</p>
                </div>
                <div className="calendar-view">
                    <button></button>
                </div>
            </div>
            <div className="side-bar">
                <h4>Actividades</h4>
                <hr className="separator"/>
                <p>Nada por hacer</p>
                <h4>Calendarios</h4>
                <hr className="separator"/>
                <p>No has agregado calendarios</p>
            </div>
        </div>
    );
}

export default Calendar;