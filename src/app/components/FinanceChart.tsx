"use client"
import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Jan',
    income: 4200,
    expense: 3650,
  },
  {
    name: 'Feb',
    income: 4200,
    expense: 3420,
  },
  {
    name: 'Mar',
    income: 4500,
    expense: 3890,
  },
  {
    name: 'Apr',
    income: 4200,
    expense: 3720,
  },
  {
    name: 'May',
    income: 4200,
    expense: 4100,
  },
  {
    name: 'Jun',
    income: 4650,
    expense: 4380,
  },
  {
    name: 'Jul',
    income: 4200,
    expense: 4650,
  },
  {
    name: 'Aug',
    income: 4200,
    expense: 3580,
  },
  {
    name: 'Sept',
    income: 4200,
    expense: 3740,
  },
  {
    name: 'Oct',
    income: 4500,
    expense: 3920,
  },
  {
    name: 'Nov',
    income: 4200,
    expense: 4850,
  },
  {
    name: 'Dec',
    income: 5100,
    expense: 5420,
  },
];
// #endregion

const FinanceChart = () => {
  return (
    <div className="bg-background rounded-lg w-full h-full p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className='text-lg font-semibold'>Finance</h1>
        <Image src="more.svg" alt="more-logo" width={20} height={20} className='opacity-70' />
      </div>
      <LineChart
        style={{ width: '100%', height: '90%' }}
        responsive
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" stroke="#bfc1c6" />
        <XAxis dataKey="name" axisLine={false} tick={{ fill: "#bfc1c6" }} tickLine={false} tickMargin={10} />
        <YAxis width="auto" axisLine={false} tick={{ fill: "#bfc1c6" }} tickLine={false} tickMargin={20} />
        <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "#bfc1c6" }} />
        <Legend align="center" verticalAlign='top' wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }} />
        <Line type="monotone" dataKey="income" stroke="#6EE7B7" strokeWidth={3} />
        <Line type="monotone" dataKey="expense" stroke="#2563EB" strokeWidth={3} />
      </LineChart>
    </div>
  )
}
export default FinanceChart