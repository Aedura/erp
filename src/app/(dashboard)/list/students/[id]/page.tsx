import Announcements from '@/app/components/Announcements';
import BigCalendar from '@/app/components/BigCalendar';
import Performance from '@/app/components/Performance';
import Image from 'next/image';
import Link from 'next/link';

const SingleStudentPage = () => {
  return (
    <div className="flex-1 flex flex-col p-4 gap-4 xl:flex-row ">
      <div className="w-full xl:w-2/3">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-primary/25 py-6 px-4 rounded-lg flex-1 flex gap-4">
            <div className="w-1/3">
              <Image src="/profile.svg" alt="user-image" width={144} height={144} className='size-36 rounded-full object-cover opacity-70' />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className='text-xl font-semibold'>John Doe</h1>
              <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, accusantium!</p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.svg" alt="blood-group-logo" width={14} height={14} />
                  <span>O+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/calendar.svg" alt="calendar-logo" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/inbox.svg" alt="mail-logo" width={14} height={14} />
                  <span>bruh@sdhbfv.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.svg" alt="blood-group-logo" width={14} height={14} />
                  <span>1234567890</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            <div className="bg-background rounded-lg flex gap-4 p-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <p className='text-3xl'>🗓️</p>
              <div className="">
                <h1 className='text-2xl font-bold'>90%</h1>
                <span className='text-sm text-gray-500'>Attendance</span>
              </div>
            </div>
            <div className="bg-background rounded-lg flex gap-4 p-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <p className='text-3xl'>📋</p>
              <div className="">
                <h1 className='text-2xl font-bold'>6th</h1>
                <span className='text-sm text-gray-500'>Grade</span>
              </div>
            </div>
            <div className="bg-background rounded-lg flex gap-4 p-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <p className='text-3xl'>📚</p>
              <div className="">
                <h1 className='text-2xl font-bold'>18</h1>
                <span className='text-sm text-gray-500'>Lessons</span>
              </div>
            </div>
            <div className="bg-background rounded-lg flex gap-4 p-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <p className='text-3xl'>🧑‍🏫</p>
              <div className="">
                <h1 className='text-2xl font-bold'>6A</h1>
                <span className='text-sm text-gray-500'>Class</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-background rounded-lg p-4 h-[880px]">
          <h1 className='text-xl font-semibold'>John Doe&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-background p-4 rounded-lg">
          <h1 className='text-xl font-semibold'>Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-600">
            <Link href="" className='p-3 rounded-md bg-[#e825eb20]'>Student&apos;s Lessons</Link>
            <Link href="" className='p-3 rounded-md bg-[#6EE7B740]'>Student&apos;s Teachers</Link>
            <Link href="" className='p-3 rounded-md bg-[#e7df6e40]'>Student&apos;s Exams</Link>
            <Link href="" className='p-3 rounded-md bg-[#7b25eb20]'>Student&apos;s Assignments</Link>
            <Link href="" className='p-3 rounded-md bg-[#2563EB20]'>Student&apos;s Results</Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  )
}
export default SingleStudentPage