"use client"
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Team Stand-up Meeting",
    time: "9:00 AM - 9:30 AM",
    description: "Daily sync with the development team to discuss progress and blockers"
  },
  {
    id: 2,
    title: "Client Presentation",
    time: "11:00 AM - 12:00 PM",
    description: "Present Q4 project proposal to stakeholders and gather feedback"
  },
  {
    id: 3,
    title: "Lunch Break",
    time: "12:30 PM - 1:30 PM",
    description: "Team lunch at the new cafe downtown"
  },
  {
    id: 4,
    title: "Workshop: React Best Practices",
    time: "2:00 PM - 4:00 PM",
    description: "Interactive session covering hooks, performance optimization, and modern patterns"
  },
  {
    id: 5,
    title: "Project Review",
    time: "4:30 PM - 5:30 PM",
    description: "Review sprint deliverables and plan for next iteration"
  },
]

const EvenetCalendar = () => {

  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='bg-background p-4 rounded-lg shadow-md'>
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className='text-xl font-semibold my-4'>Events</h1>
        <Image src="more.svg" alt="more-logo" width={20} height={20} className='opacity-70' />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div className="p-5 rounded-lg border-2 border-[#E5E7EB] border-t-8 odd:border-t-primary even:border-t-secondary" key={event.id}>
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold text-gray-600">{event.title}</h1>
              <span className="text-xs text-gray-400">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default EvenetCalendar