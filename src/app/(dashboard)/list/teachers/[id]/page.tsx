
import Image from 'next/image';

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 flex flex-col p-4 gap-4 xl:flex-row ">
      <div className="w-full xl:w-2/3">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-primary/20 py-6 px-4 rounded-lg flex-1 flex gap-4">
            <div className="w-1/3">
              <Image src="/profile.svg" alt="user-image" width={144} height={144} className='size-36 rounded-full object-cover opacity-70' />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className='text-xl font-semibold'>John Doe</h1>
              <p className='text-sm text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic porro provident, aspernatur nisi molestias similique debitis quam architecto, unde praesentium cum consequatur? Sed at molestiae nihil voluptate? Ea, laborum. Beatae.</p>
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
                  <span>vivadidigoat@haha.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.svg" alt="blood-group-logo" width={14} height={14} />
                  <span>1234567890</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
        <div className="">
          Schedule
        </div>
      </div>
      <div className="w-full xl:w-1/3"></div>
    </div>
  )
}
export default SingleTeacherPage