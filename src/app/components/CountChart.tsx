"use client"
import { RadialBarChart, RadialBar } from 'recharts';
import Image from 'next/image';

// #region Sample data
const data = [
  {
    name: 'total',
    count: 106,
    fill: '#f9fafb',
  },
  {
    name: 'Girls',
    count: 53,
    fill: '#6EE7B7',
  },
  {
    name: 'Boys',
    count: 53,
    fill: '#2563EB',
  },
];


const CountChart = () => {
  return (
      <div className="bg-background rounded-lg w-full h-full p-4 shadow-md">
        {/* title */}
        <div className="flex items-center justify-between">
          <h1 className='text-lg font-semibold'>Students</h1>
          <Image src="more.svg" alt="more-logo" width={20} height={20} className='opacity-70' />
        </div>
        {/* charts */}
        <div className="relative w-full h-[75%] flex items-center">
          <RadialBarChart
            style={{ width: '100%', height: '90%' }}
            responsive
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
          <Image src="malefemale.svg" alt="gender-logo" width={30} height={30} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70' />
        </div>
        {/* bottom */}
        <div className="flex justify-center gap-16">
          <div className="flex flex-col gap-1">
            <div className="size-5 bg-primary rounded-full" />
            <h1 className='font-bold'>123</h1>
            <h2 className='text-sm text-gray-500'>Boys (45%)</h2>
          </div>

          <div className="flex flex-col gap-1">
            <div className="size-5 bg-secondary rounded-full" />
            <h1 className='font-bold'>246</h1>
            <h2 className='text-sm text-gray-500'>Girls (55%)</h2>
          </div>
        </div>
      </div>
  )
}
export default CountChart