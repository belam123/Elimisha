import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, parseISO } from 'date-fns';

const Calendar = ({ selectedDate, studentDetails }) => {
  const firstDayOfMonth = startOfMonth(selectedDate);
  const lastDayOfMonth = endOfMonth(selectedDate);
  const daysOfMonth = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });

  const eventsByDate = studentDetails.events.reduce((acc, event) => {
    const dueDate = event.due_date;

    if (dueDate) {
      const parsedDate = parseISO(dueDate);
      const formattedDate = format(parsedDate, 'yyyy-MM-dd');

      if (!acc[formattedDate]) {
        acc[formattedDate] = [];
      }
      acc[formattedDate].push(event);
    }

    return acc;
  }, {});

  return (
    <div>
      <div className="grid grid-cols-7 gap-2">
        {daysOfMonth.map((day) => {
          const formattedDate = format(day, 'yyyy-MM-dd');
          const eventsForDay = eventsByDate[formattedDate];

          return (
            <div
              key={day.toISOString()}
              className={`relative flex items-center justify-center h-12 border border-gray-200 ${
                isToday(day) ? 'bg-blue-200' : ''
              } ${isSameMonth(day, selectedDate) ? '' : 'text-gray-400'}`}
            >
              <span className="text-sm">{format(day, 'd')}</span>
            </div>
          );
        })}
      </div>
      {Object.entries(eventsByDate).length > 0 ? (
        <div className="mt-4 p-4">
          <h1 className="text-2xl font-bold mb-4 text-center text-indigo-700">What's happening this month?</h1>
          {Object.entries(eventsByDate).map(([formattedDate, eventsForDay]) => (
            <div key={formattedDate} className="mb-4 bg-gray-100 p-2 rounded-lg">
              <h2 className="text-lg font-bold text-gray-500">{format(new Date(formattedDate), 'MMMM d')}</h2>
              <ul className="list-none pl-6 ">
                {eventsForDay.map((event) => (
                  <li key={event.due_date} className="mb-2 text-red-600">
                    {event.message}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-center text-gray-500">Nothing scheduled this month.</p>
      )}
    </div>
  );
};

export default Calendar;
