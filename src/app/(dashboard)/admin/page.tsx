import Announcements from "@/app/components/Announcements"
import AttendanceChart from "@/app/components/AttendanceChart"
import CountChart from "@/app/components/CountChart"
import EvenetCalendar from "@/app/components/EvenetCalendar"
import FinanceChart from "@/app/components/FinanceChart"
import UserCard from "@/app/components/UserCard"

const AdminPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4 md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-center flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          {/* <UserCard type="staff" /> */}
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EvenetCalendar />
        <Announcements />
      </div>
    </div>
  )
}
export default AdminPage