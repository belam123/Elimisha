import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';

const Calendar = ({ selectedDate, events }) => {
  const firstDayOfMonth = startOfMonth(selectedDate);
  const lastDayOfMonth = endOfMonth(selectedDate);
  const daysOfMonth = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });

  return (
    <div>
      <div className="text-center text-xl font-semibold mb-4">
        {format(selectedDate, 'MMMM yyyy')}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {daysOfMonth.map((day) => (
          <div
            key={day.toISOString()}
            className={`relative flex items-center justify-center h-12 border border-gray-200 ${
              isToday(day) ? 'bg-blue-300' : ''
            } ${isSameMonth(day, selectedDate) ? '' : 'text-gray-400'}`}
          >
            <span className="text-sm">{format(day, 'd')}</span>
          </div>
        ))}
      </div>
      <h1 className='text-center text-3xl text-gray-400 mt-4 px-2'>What's Happening This Month?</h1>
      <div className="mt-4 px-4">
        {daysOfMonth.map((day) => (
          <div key={day.toISOString()}>
            {events[format(day, 'yyyy-MM-dd')] && (
              <div className="mb-2 p-2 border border-gray-300 rounded shadow-lg">
                <span className="font-semibold block">
                  {format(day, 'yyyy-MM-dd')}:
                </span>
                
                {events[format(day, 'yyyy-MM-dd')].map((event) => (
                  <div key={event.id} className="ml-2">
                    <p className='text-red-700'>{event.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
