"use client"
import Image from 'next/image';
import { Pie, PieChart } from 'recharts';

// #region Sample data
const data = [
  { name: 'Group B', value: 92, fill: '#2563EB' },
  { name: 'Group A', value: 8, fill: '#6EE7B7' },
];

// #endregion

const Performance = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => {
  return (
    <div className='bg-background p-4 rounded-lg h-80 relative'>
      <div className="flex items-center justify-between">
        <h1 className='text-xl font-semibold'>Performance</h1>
        <Image src="/more.svg" alt="more-options" width={16} height={16} />
      </div>
      <PieChart style={{ width: '100%', height: '100%' }} responsive>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          fill="#8884d8"
          isAnimationActive={isAnimationActive}
        />
      </PieChart>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className='text-3xl font-bold text-foreground'>9.2</h1>
        <p className='text-xs text-gray-500'>of 10 something</p>
      </div>
      <h2 className="absolute font-medium bottom-16 left-0 right-0 m-auto text-center opacity-80">1st Semester - 2nd Semester</h2>
    </div>
  )
}
export default Performance