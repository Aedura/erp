"use client"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Image from 'next/image';

const data = [
  {
    name: 'Monday',
    present: 850,
    absent: 150,
  },
  {
    name: 'Tuesday',
    present: 920,
    absent: 80,
  },
  {
    name: 'Wednesday',
    present: 905,
    absent: 95,
  },
  {
    name: 'Thursday',
    present: 890,
    absent: 110,
  },
  {
    name: 'Friday',
    present: 820,
    absent: 180,
  },
  {
    name: 'Saturday',
    present: 450,
    absent: 550,
  },
];


const AttendanceChart = () => {
  return (
    <div className="bg-background rounded-lg w-full h-full p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className='text-lg font-semibold'>Attendance</h1>
        <Image src="more.svg" alt="more-logo" width={20} height={20} className='opacity-70' />
      </div>
      <BarChart
        style={{ width: '100%', height: '90%' }}
        responsive
        data={data}
        barSize={20}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#bfc1c6" />
        <XAxis dataKey="name" axisLine={false} tick={{ fill: "#bfc1c6" }} tickLine={false} />
        <YAxis width="auto" axisLine={false} tick={{ fill: "#bfc1c6" }} tickLine={false} />
        <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "#bfc1c6" }} />
        <Legend align="left" verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
        <Bar dataKey="present" fill="#6EE7B7" activeBar={<Rectangle fill="#24db92" stroke="#6EE7B7" />} radius={[ 10, 10, 0, 0 ]} legendType='circle' />
        <Bar dataKey="absent" fill="#2563EB" activeBar={<Rectangle fill="#1558ea" stroke="#2563EB" />} radius={[ 10, 10, 0, 0 ]} legendType='circle' />
      </BarChart>
    </div>
  )
}
export default AttendanceChart