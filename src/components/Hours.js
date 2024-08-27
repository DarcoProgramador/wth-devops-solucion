"use client";
import React from 'react';

const Hour = () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentDay = currentDate.getDay(); // Obtener el día actual (0-6)

    const horario = [
        { day: 'Lunes', start: 10, end: 16 },
        { day: 'Martes', start: 10, end: 16 },
        { day: 'Miércoles', start: 10, end: 16 },
        { day: 'Jueves', start: 10, end: 16 },
        { day: 'Viernes', start: 10, end: 16 },
        { day: 'Sábado', start: 9, end: 20 },
        { day: 'Domingo', start: 9, end: 20 }
    ];

    const startHour = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentHour, 0, 0);
    const endHour = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentHour + 1, 0, 0);

    // Obtener el objeto correspondiente al día de la semana actual
    const currentDaySchedule = horario[currentDay];

    // Calcular la fecha de inicio y fin basado en el horario del día de la semana actual
    startHour.setHours(currentDaySchedule.start);
    endHour.setHours(currentDaySchedule.end);

    const formatHour = (hour) => {
        if (hour === 0) {
            return '12 am';
        } else if (hour < 12) {
            return hour + ' am';
        } else if (hour === 12) {
            return '12 pm';
        } else {
            return (hour - 12) + ' pm';
        }
    };

    return (
        <div>
            <h2>Horario de atención:</h2>
            <p>Horario del dia de hoy: {formatHour(startHour.getHours())} - {formatHour(endHour.getHours())}</p>
        </div>
    );
};

export default Hour;